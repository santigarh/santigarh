import { defaultLang, languages, ui, type Lang, type UiKey } from './ui'

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/')
  return first in languages ? (first as Lang) : defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey, vars: Record<string, string> = {}) {
    return ui[lang][key].replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? `{${name}}`)
  }
}

/** Ruta de la página de inicio en el otro idioma. */
export function homePath(lang: Lang) {
  return lang === defaultLang ? '/' : `/${lang}/`
}

const locales: Record<Lang, string> = { es: 'es-EC', en: 'en-US' }

function parseMonth(value: string) {
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

function formatMonth(value: string, lang: Lang) {
  const { year, month } = parseMonth(value)
  const name = new Intl.DateTimeFormat(locales[lang], { month: 'short', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1, 1)))
    .replace('.', '')
  return `${name.charAt(0).toUpperCase()}${name.slice(1)} ${year}`
}

/** "Feb 2022 – Actualidad" / "Feb 2022 – Present". Fechas en formato YYYY-MM. */
export function formatPeriod(start: string, end: string | undefined, lang: Lang) {
  const to = end ? formatMonth(end, lang) : ui[lang]['experience.present']
  return `${formatMonth(start, lang)} – ${to}`
}

/** Duración contando ambos meses, como LinkedIn: Jun 2018 – Sep 2019 = 1 año 4 meses. */
export function formatDuration(start: string, end: string | undefined, lang: Lang, now = new Date()) {
  const from = parseMonth(start)
  const to = end ? parseMonth(end) : { year: now.getUTCFullYear(), month: now.getUTCMonth() + 1 }
  const total = (to.year - from.year) * 12 + (to.month - from.month) + 1
  const years = Math.floor(total / 12)
  const months = total % 12
  const words = {
    es: { year: ['año', 'años'], month: ['mes', 'meses'] },
    en: { year: ['year', 'years'], month: ['month', 'months'] },
  }[lang]
  const parts = []
  if (years) parts.push(`${years} ${words.year[years === 1 ? 0 : 1]}`)
  if (months) parts.push(`${months} ${words.month[months === 1 ? 0 : 1]}`)
  return parts.join(' ')
}
