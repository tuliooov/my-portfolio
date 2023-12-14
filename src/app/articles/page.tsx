import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import React from "react";
import ListArticles from "@/components/ListArticles";

export const dynamic = 'force-static'

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    title: `Articles | ${prismic.asText(settings.data.name)}` ,
    metadataBase: new URL('https://tuliooov.github.io/my-portfolio/articles'),
    openGraph: {
      images: [
        {
          url: 'https://images.prismic.io/blogtulioov/6556bd87531ac2845a253b44_profile.ico?auto=format%2Ccompress&rect=0%2C0%2C256%2C256&w=828&fit=max',
        },
      ],
    },
  };
}


export default async function Index() {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  
  const tags: string[] = [];
  articles.forEach((objeto) => {
    objeto.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
      withProfile={false}
    >
      <Bounded size="widest">
        <ul className="grid grid-cols-1 gap-16">
          <Heading>Articles</Heading>
          <ListArticles articles={articles} />
        </ul>
      </Bounded>
    </Layout>
  );
}
