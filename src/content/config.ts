import { defineCollection, z } from "astro:content";

const produkte = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    preis: z.number(),
    waehrung: z.string().default("EUR"),
    lagerbestand: z.number().default(1),
    spendenanteilProzent: z.number().min(0).max(100),
    stripeLink: z.string().url(),
    bild: z.string().optional(),
    material: z.string().optional(),
    verkauft: z.boolean().default(false),
  }),
});

const belege = defineCollection({
  type: "content",
  schema: z.object({
    datum: z.date(),
    betrag: z.number(),
    empfaenger: z.string(),
    belegDatei: z.string().optional(),
  }),
});

export const collections = { produkte, belege };
