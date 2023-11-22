import { LinkButton } from "@/components/Button"

interface ButtonProps {
  url?: string
  target?: string
}

interface ButtonActionsProps {
  demo: ButtonProps
  code: ButtonProps
}

export const ButtonActions = ({ code, demo }: ButtonActionsProps) => {
  return (
    <div className="flex flex-row gap-4">
      {<LinkButton href={demo.url} target={demo.target} >Demo</LinkButton>}
      {<LinkButton href={code.url} target={code.target}>Code</LinkButton>}
    </div>
  )
}