import { useCallback } from 'react'
import { useTranslation as baseTranslation } from 'react-i18next'

export default function useTranslation(namespace: string, basePath?: string) {
  const { t: baseT, ...translationRest } = baseTranslation(namespace)
  const isValidBasePath = typeof basePath === 'string' && basePath.length > 0
  const t = useCallback(
    (key: string) => baseT(isValidBasePath ? `${basePath}.${key}` : key),
    [baseT, basePath, isValidBasePath]
  )

  return { t, ...translationRest }
}
