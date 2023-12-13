import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";
import { Heading } from "@/components/Heading";
import React from "react";
import { getPostFiltered } from "@/utils";
import { TagsFilter } from "@/components/ProjectCard/TagsFilter";
import { ArticleDocument } from "prismicio-types";

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

interface PageProps {
  searchParams: {
    tags?: string[] | string
  }
}

export default async function Index({ searchParams }: PageProps) {
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

  const articlesFiltered = getPostFiltered<ArticleDocument<string>[]>(articles, searchParams.tags)

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
          <TagsFilter tags={tags} isFilter={true} tagsSelected={searchParams.tags} baseUrl='/articles'/>
          {articlesFiltered.length === 0 && <p>We didn`t found anythink articles.</p>}
          {articlesFiltered.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Bounded>
    </Layout>
  );
}
