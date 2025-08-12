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
      {SUPPORTED_LOCALES.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}${normalizedRest}`}
          className={
            currentLocale === lang
              ? 'font-semibold underline underline-offset-4'
              : 'opacity-70 hover:opacity-100'
          }
          prefetch
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}


