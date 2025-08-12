'use client'

import React, { createContext, useContext, useMemo } from 'react'

const I18nContext = createContext({ t: (key) => key })

function getByPath(object, path) {
  if (!object || !path) return undefined
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), object)
}

export default function I18nProvider({ dictionary, children }) {
  const value = useMemo(() => {
    const t = (key) => {
      const found = getByPath(dictionary, key)
      return found !== undefined ? found : key
    }
    return { t }
  }, [dictionary])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}


