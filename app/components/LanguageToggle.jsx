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
    <div className="flex items-center gap-1 text-xs">
      {SUPPORTED_LOCALES.map((lang, i) => (
        <span key={lang} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/20 mx-0.5">/</span>}
          <Link
            href={`/${lang}${normalizedRest}`}
            className={`px-2 py-1 rounded-md transition-all duration-300 ${
              currentLocale === lang
                ? 'text-black bg-[#F2D300] font-bold'
                : 'text-[#F2D300]/60 hover:text-[#F2D300] hover:bg-white/5'
            }`}
            prefetch
          >
            {lang.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  )
}


