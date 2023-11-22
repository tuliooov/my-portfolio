import { LinkButton } from "@/components/Button"

interface TagsActionsProps {
  tags?: string[]
}

export const TagsActions = ({ tags }: TagsActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {(tags || []).map((tag) => (
        <div
          key={tag}
          className=" bg-slate-600 text-xs text-slate-50 px-2 py-1 rounded-md"
        >
          {tag}
        </div>
      ))}
    </div>
  )
}