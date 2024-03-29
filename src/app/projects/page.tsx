import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import React from "react";
import { getPostFiltered } from "@/utils";
import { ProjectDocument } from "prismicio-types";
import ListProjects from "@/components/ListProducts";

export const dynamic = 'force-static'

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    title: `Projects | ${prismic.asText(settings.data.name)}` ,
    metadataBase: new URL('https://tuliooov.github.io/my-portfolio/projects'),
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


  const projects = await client.getAllByType("project", {
    orderings: [
      { field: "my.project.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  const tags: string[] = [];
  projects.forEach((objeto) => {
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
          <Heading>Projects</Heading>
          <ListProjects projects={projects} />
        </ul>
      </Bounded>
    </Layout>
  );
}
