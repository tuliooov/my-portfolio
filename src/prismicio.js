import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "../slicemachine.config.json";
import fetch from 'node-fetch'

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENTS || config.repositoryName;

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 *
 * @type {prismic.ClientConfig['routes']}
 */
const routes = [
  {
    type: "article",
    path: "/articles/:uid",
  },
  {
    type: "project",
    path: "/projects/:uid",
  },
  {
    type: "page",
    path: "/:uid",
  },
];

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    fetch,
    routes,
    accessToken: process.env.NEXT_PUBLIC_PRISMIC_API_KEY,
    // fetchOptions:
    //   process.env.NODE_ENV === "production"
    //     ? { next: { tags: ["prismic"] }, cache: "force-cache" }
    //     : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};
