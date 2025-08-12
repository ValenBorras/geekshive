import { NextResponse } from 'next/server'

const locales = ['en', 'es']
const defaultLocale = 'en'

function isMissingLocale(pathname) {
  if (pathname === '/') return true
  return locales.every((locale) => {
    return !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  })
}

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Ignore next internals and files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  if (isMissingLocale(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|.*\\..*|api).*)'],
}


