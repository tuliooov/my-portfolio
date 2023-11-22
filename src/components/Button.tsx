import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const LinkButton = ({ children, href, ...rest }: LinkProps) => {
  const style = `${href ? 'bg-slate-800' : 'bg-slate-400 cursor-not-allowed'} text-lg disabled:bg-slate-400 text-slate-50 px-2 py-1 rounded-md`

  if (!href) {
    return <div className={style}>
      {children}
    </div>
  }
  return (
    <Link className={style} href={href} {...rest}>
      {children}
    </Link>
  )
}