import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  YogaClass: a
    .model({
      title: a.string().required(),
      description: a.string().required(),
      dateTime: a.string().required(),
      linkType: a.enum(["INTERNAL", "EXTERNAL"]),
      link: a.string().required(),
      address: a.string(),
      map: a.string(),
      classType: a.enum(["ONLINE", "IN_PERSON"]),
      published: a.boolean().default(false),
      ctaText: a.string(),
    })
    .authorization((allow) => [
      allow.authenticated(),
      allow.guest().to(["read"]),
    ]),

  PageContent: a
    .model({
      slug: a.string().required(),
      // About page fields
      aboutIntro: a.string(),
      aboutPhilosophyBalance: a.string(),
      aboutPhilosophyMindfulness: a.string(),
      aboutPhilosophyGrowth: a.string(),
      aboutJourney: a.string(),
      // Contact page fields
      contactIntro: a.string(),
      contactEmail: a.string(),
      contactEmailDescription: a.string(),
      contactInstagram: a.string(),
      contactInstagramDescription: a.string(),
      contactNewsletterText: a.string(),
      contactNewsletterLink: a.string(),
    })
    .authorization((allow) => [
      allow.authenticated(),
      allow.guest().to(["read"]),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
