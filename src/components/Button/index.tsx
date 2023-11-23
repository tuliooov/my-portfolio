import { LucideIcon } from "lucide-react"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon
  circle?: boolean
}

export const Button = ({ children, circle, icon: Icon, disabled, ...rest }: ButtonProps) => {
  return (
    <button className={`${disabled ? 'bg-slate-400' : 'bg-slate-800 hover:bg-slate-700'} hover:bg-slate-400 text-lg disabled:bg-slate-400 text-slate-50 px-2 py-1 ${circle ? 'rounded-full' : 'rounded-md'} w-min`}  {...rest}>
      {Icon && <Icon />}
      {children}
    </button>
  )
}