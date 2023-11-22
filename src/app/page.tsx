import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";
import { Project } from "@/components/ProjectCard";
import { Heading } from "@/components/Heading";
import { HorizontalDivider } from "@/components/HorizontalDivider";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    title: prismic.asText(settings.data.name),
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
    >
      <Bounded size="widest">
        <ul className="grid grid-cols-1 gap-16">
          <Heading>Projects</Heading>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
          {projects.length === 0 && <p>We didn`t found anythink projects.</p>}
          <div className="grid grid-cols-1 justify-items-center w-full">
            <HorizontalDivider />
          </div>
          <Heading>Articles</Heading>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
          {articles.length === 0 && <p>We didn`t found anythink articles.</p>}
        </ul>
      </Bounded>
    </Layout>
  );
}
