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
