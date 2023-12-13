import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Project } from "@/components/ProjectCard";
import { Heading } from "@/components/Heading";
import React from "react";
import { TagsFilter } from "@/components/ProjectCard/TagsFilter";
import { getPostFiltered } from "@/utils";
import { ProjectDocument } from "prismicio-types";

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

interface PageProps {
  searchParams: {
    tags?: string[] | string
  }
}

export default async function Index({ searchParams }: PageProps) {
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


  const projectsFiltered = getPostFiltered<ProjectDocument<string>[]>(projects, searchParams.tags)
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

          <TagsFilter tags={tags} isFilter={true} tagsSelected={searchParams.tags} baseUrl='/projects' />
          {projectsFiltered.length === 0 && <p>We didn`t found anythink projects.</p>}
          {projectsFiltered.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </ul>
      </Bounded>
    </Layout>
  );
}
