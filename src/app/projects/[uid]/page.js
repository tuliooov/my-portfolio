import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { HorizontalDivider } from "@/components/HorizontalDivider";
import { ButtonBack } from "@/components/ButtonBack";
import { ButtonActions } from "@/components/ProjectCard/ButtonActions";
import { TagsActions } from "@/components/ProjectCard/Tags";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function LatestProject({ project }) {
  const date = prismic.asDate(
    project.data.publishDate || project.first_publication_date
  );

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <PrismicNextLink document={project}>
          <PrismicText field={project.data.title} />
        </PrismicNextLink>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {dateFormatter.format(date)}
      </p>
    </li>
  );
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const project = await client
    .getByUID("project", params.uid)
    .catch(() => notFound());

  return {
    title: `${prismic.asText(project.data.title)} | ${prismic.asText(
      settings.data.name
    )}`,
    description: project.data.meta_description,
    openGraph: {
      title: project.data.meta_title,
      images: [
        {
          url: project.data.meta_image.url,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const client = createClient();

  const project = await client
    .getByUID("project", params.uid)
    .catch(() => notFound());
  const latestProject = await client.getAllByType("project", {
    limit: 3,
    orderings: [
      { field: "my.project.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  console.log(project.data);
  const date = prismic.asDate(
    project.data.publishDate || project.first_publication_date
  );

  return (
    <Layout
      navigation={navigation}
      withHeaderDivider={false}
      withProfile={false}
      settings={settings}
    >
      <Bounded>
        <ButtonBack />
      </Bounded>
      <article>
        <Bounded className="pb-0">
          <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
            <PrismicText field={project.data.title} />
          </h1>
          <p className="font-serif italic tracking-tighter text-slate-500">
            {dateFormatter.format(date)}
          </p>
          
          <TagsActions tags={project.tags}/>

          <div className="mt-8">
            <ButtonActions
              code={{
                url: project.data.code.url,
                target: project.data.code.target,
              }}
              demo={{
                url: project.data.demo.url,
                target: project.data.demo.target,
              }}
            />
          </div>
        </Bounded>
        <SliceZone slices={project.data.slices} components={components} />
      </article>
      {latestProject.length > 0 && (
        <Bounded>
          <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
            <HorizontalDivider />
            <div className="w-full">
              <Heading size="2xl" className="mb-10">
                Latest projects
              </Heading>
              <ul className="grid grid-cols-1 gap-12">
                {latestProject.map((project) => (
                  <LatestProject key={project.id} project={project} />
                ))}
              </ul>
            </div>
          </div>
        </Bounded>
      )}
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const projects = await client.getAllByType("project");
  console.log(projects);

  return projects.map((project) => {
    return { uid: project.uid };
  });
}
