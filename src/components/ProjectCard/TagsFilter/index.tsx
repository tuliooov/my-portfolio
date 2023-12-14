'use client'

import Link from 'next/link'

interface TagsFilterProps {
  tags?: string[]
  isFilter?: boolean
  tagsSelected: string[]
  baseUrl: string
}

export const TagsFilter = ({ tags, tagsSelected, baseUrl }: TagsFilterProps) => {

  const createTagUrl = () => {
    let tagsQuery = '';
    if (tagsSelected.length) {
        tagsQuery = `tags=${tagsSelected.join('&tags=')}`;
    }
    return `${baseUrl}?${tagsQuery}`
  }
  
  const addTagUrl = (newTag: string) => {
    return `${createTagUrl()}&tags=${newTag}`;
  }
  
  const removeTagUrl = (newTag: string) => {
    return `${createTagUrl()}`.replace(`tags=${newTag}`, '');
  }

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {(tags || []).map((tag) => {
        const select = tagsSelected?.includes(tag)
        return (
          <Link
            key={tag}
            href={select ? removeTagUrl(tag) : addTagUrl(tag)}
            className={`${select ? 'bg-slate-600 text-slate-50' : 'bg-slate-200 text-slate-600'} text-xs  px-2 py-1 rounded-md`}
          >
            {tag}
          </Link>
        )
      })}
    </div>
  )
}