import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: LucideIcon
  circle?: boolean
}

export const LinkButton = ({ children, icon: Icon, circle, href, ...rest }: LinkProps) => {
  if (!href) {
    return <div className={`${href ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-400 cursor-not-allowed'} text-lg disabled:bg-slate-400 text-slate-50 px-2 py-1 rounded-md ${circle ? 'rounded-full' : 'rounded-md'} w-min`}>
      {Icon && <Icon />}
      {children}
    </div>
  }
  return (
    <Link className={`${href ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-400 cursor-not-allowed'} text-lg disabled:bg-slate-400 text-slate-50 px-2 py-1 rounded-md ${circle ? 'rounded-full' : 'rounded-md'} w-min`} href={href} {...rest}>
      {Icon && <Icon />}
      {children}
    </Link>
  )
}