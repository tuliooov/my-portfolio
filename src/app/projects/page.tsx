import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Project } from "@/components/ProjectCard";
import { Heading } from "@/components/Heading";
import React from "react";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    title: prismic.asText(settings.data.name),
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
          {projects.length === 0 && <p>We didn`t found anythink projects.</p>}
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </ul>
      </Bounded>
    </Layout>
  );
}