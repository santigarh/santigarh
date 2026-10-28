import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

/** Texto con versión en español e inglés (design D3). */
const localized = z.object({
  es: z.string().min(1, { error: 'Falta el texto en español' }),
  en: z.string().min(1, { error: 'Falta el texto en inglés' }),
})

const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, { error: 'Usa el formato YYYY-MM' })

const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string().min(1),
        description: localized,
        image: image(),
        imageAlt: localized,
        tech: z.array(z.string()).min(1),
        site: z.url().optional(),
        repo: z.url().optional(),
        order: z.number().int(),
        featured: z.boolean().default(false),
        published: z.boolean().default(true),
      })
      .refine((project) => project.site || project.repo, {
        error: 'El proyecto necesita al menos un enlace: "site" o "repo"',
        path: ['site'],
      }),
})

const experience = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/experience' }),
  schema: z
    .object({
      role: localized,
      company: z.string().min(1),
      start: month,
      end: month.optional(),
      achievements: z.array(localized).min(2).max(4),
      tech: z.array(z.string()).default([]),
    })
    .refine((job) => !job.end || job.end >= job.start, {
      error: 'La fecha "end" no puede ser anterior a "start"',
      path: ['end'],
    }),
})

const education = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/education' }),
  schema: ({ image }) =>
    z
      .object({
        kind: z.enum(['study', 'certification']),
        name: localized,
        institution: z.string().min(1),
        start: z.number().int().optional(),
        year: z.number().int(),
        logo: image(),
        credentialUrl: z.url().optional(),
      })
      .refine((item) => !item.start || item.start <= item.year, {
        error: 'El año "start" no puede ser posterior a "year"',
        path: ['start'],
      }),
})

export const collections = { projects, experience, education }
