import * as prismic from "@prismicio/client";
import { PrismicText, SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { TagsActions } from "@/components/ProjectCard/Tags";
import { Bounded } from "@/components/Bounded";

export async function generateMetadata({ params }) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: `${prismic.asText(page.data.title)} | ${prismic.asText(
      settings.data.name
    )}`,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      images: [
        {
          url: page.data.meta_image.url,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <Layout
      navigation={navigation}
      settings={settings}
      withProfile={true}
      profileLine
    >
      <article>
        <Bounded className="py-0 md:py-0 lg:py-0">
          {/* <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
            <PrismicText field={page.data.title} />
          </h1> */}
          <TagsActions tags={page.tags} />
        </Bounded>
        <SliceZone slices={page.data.slices} components={components} />
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
