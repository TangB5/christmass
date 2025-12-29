// middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // Vérification sécurisée de l'utilisateur
    const { data: { user } } = await supabase.auth.getUser()
    const pathname = request.nextUrl.pathname

    // --- LOGIQUE DE PROTECTION DES ROUTES ---

    // 1. Routes privées (Dashboard, Création de carte, Batch Business)
    const isProtectedRoute =
        pathname.startsWith('/dashboard') ||
        pathname.startsWith('/create') ||
        pathname.startsWith('/batch');

    if (isProtectedRoute && !user) {
        const url = new URL('/auth', request.url)
        // On mémorise la destination pour y retourner après le login
        url.searchParams.set('next', pathname)
        return NextResponse.redirect(url)
    }


    if (pathname.startsWith('/auth') && user) {
        const nextPath = request.nextUrl.searchParams.get('next') || '/dashboard'
        return NextResponse.redirect(new URL(nextPath, request.url))
    }

    return response
}

export const config = {
    // Matcher optimisé pour exclure les assets et l'api
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}