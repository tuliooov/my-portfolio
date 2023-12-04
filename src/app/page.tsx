import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";
import { Project } from "@/components/ProjectCard";
import { Heading } from "@/components/Heading";
import { HorizontalDivider } from "@/components/HorizontalDivider";
import { ButtonNext } from "@/components/ButtonBack";
import React from "react";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    title: prismic.asText(settings.data.name),
    metadataBase: new URL('https://tuliooov.github.io/my-portfolio/'),
    openGraph: {
      title: settings.data.name,
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
    limit: 5
  });
  const projects = await client.getAllByType("project", {
    orderings: [
      { field: "my.project.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    limit: 5
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Bounded size="widest">
        <ul className="grid grid-cols-1 gap-16">
          <Heading>Projects</Heading>
          {projects.length === 0 ? <p>We didn`t found anythink projects.</p> :
            <>
              {projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
              <ButtonNext href={"/projects"} />
            </>}
          
          <HorizontalDivider />
          
          <Heading>Articles</Heading>
          {articles.length === 0 ? <p>We didn`t found anythink articles.</p> :
            <>
              {articles.map((article) => (
                <Article key={article.id} article={article} />
              ))}
              <ButtonNext href={"/articles"} />
            </>}

        </ul>
      </Bounded>
    </Layout>
  );
}
