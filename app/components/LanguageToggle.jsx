'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SUPPORTED_LOCALES = ['en', 'es']

export default function LanguageToggle() {
  const pathname = usePathname() || '/'

  const segments = pathname.split('/')
  const hasLocalePrefix = SUPPORTED_LOCALES.includes(segments[1])
  const currentLocale = hasLocalePrefix ? segments[1] : 'en'
  const restPath = hasLocalePrefix ? `/${segments.slice(2).join('/')}` : pathname

  const normalizedRest = restPath === '/' ? '' : restPath

  return (
    <div className="flex items-center gap-3 text-xs">
      {SUPPORTED_LOCALES.map((lang) => {
        const base = 'text-[#F2D300] transition hover:drop-shadow-[0_0_6px_#F2D300]'
        const active = 'font-semibold underline underline-offset-4'
        const inactive = 'opacity-80 hover:opacity-100'
        return (
          <Link
            key={lang}
            href={`/${lang}${normalizedRest}`}
            className={`${base} ${currentLocale === lang ? active : inactive}`}
            prefetch
          >
            {lang.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}


