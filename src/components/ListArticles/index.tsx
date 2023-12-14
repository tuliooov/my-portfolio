
'use client'

import { useSearchParams } from 'next/navigation'

import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Article } from "@/components/Article";
import React from "react";
import { getPostFiltered } from "@/utils";
import { TagsFilter } from "@/components/ProjectCard/TagsFilter";
import { ArticleDocument } from "prismicio-types";


interface PageProps {
  articles: ArticleDocument<string>[]
}

export default function ListArticles({ articles }: PageProps) {

  const searchParams = useSearchParams()

  const tagsParam = searchParams.getAll('tags')

  const tags: string[] = [];
  articles.forEach((objeto) => {
    objeto.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  const articlesFiltered = getPostFiltered<ArticleDocument<string>[]>(articles, tagsParam)
  return (
    <>

      <TagsFilter tags={tags} isFilter={true} tagsSelected={tagsParam} baseUrl='/articles' />
      {articlesFiltered.length === 0 && <p>We didn`t found anythink articles.</p>}
      {articlesFiltered.map((article) => (
        <Article key={article.id} article={article} />
      ))}

    </>
  );
}
