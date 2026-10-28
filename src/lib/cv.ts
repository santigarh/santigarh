import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { Lang } from '../i18n/ui'
import { useTranslations } from '../i18n/utils'

const file = (lang: Lang) => `/cv/santiago-cv-${lang}.pdf`
const exists = (lang: Lang) => existsSync(join(process.cwd(), 'public', file(lang)))

/**
 * CV para el idioma de la página (design D11). Si no hay PDF en ese idioma se entrega
 * el de español y la etiqueta lo indica; si no hay ninguno, no se muestra el botón.
 */
export function getCv(lang: Lang) {
  const t = useTranslations(lang)
  if (exists(lang)) return { href: file(lang), label: t('hero.cta.cv') }
  if (exists('es')) return { href: file('es'), label: t('hero.cta.cvFallback') }
  return null
}
