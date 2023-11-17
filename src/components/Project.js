import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";

import { Heading } from "./Heading";

export function Project({ project }) {
  const featuredImage =
    (prismic.isFilled.image(project.data.featuredImage) &&
      project.data.featuredImage) ||
    findFirstImage(project.data.slices);
  const date = prismic.asDate(
    project.data.publishDate || project.first_publication_date,
  );
  const excerpt = getExcerpt(project.data.slices);

  return (
    <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
      <PrismicNextLink document={project} tabIndex="-1">
        <div className="aspect-h-3 aspect-w-4 relative bg-gray-100">
          {prismic.isFilled.image(featuredImage) && (
            <PrismicNextImage
              field={featuredImage}
              fill={true}
              className="object-cover"
            />
          )}
        </div>
      </PrismicNextLink>
      <div className="grid grid-cols-1 gap-3 md:col-span-2">
        <Heading as="h2">
          <PrismicNextLink document={project}>
            <PrismicText field={project.data.title} />
          </PrismicNextLink>
        </Heading>
        <p className="font-serif italic tracking-tighter text-slate-500">
          {dateFormatter.format(date)}
        </p>
        {excerpt && (
          <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
    </li>
  );
}
