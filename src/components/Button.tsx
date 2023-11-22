import Link from "next/link"
export const Button = ({ href, label, target = '' }: { href: string; label: string;  target?:string}) => {
  return (
    <Link href={href || '#'} as='button' className={`${href ? 'bg-slate-800' : 'bg-slate-400 cursor-not-allowed'} text-lg text-slate-50 px-2 py-1 rounded-md`} target={target}>
      {label}
    </Link>
  )
}