"use client"
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { AnchorHTMLAttributes } from "react";
export const ButtonBack = () => {
  const router = useRouter()
  return (
    <Link href='#' onClick={() => router.back()} className="font-semibold tracking-tight text-slate-400 flex gap-2">
      <MoveLeft /> Back
    </Link>
  )
}

export const ButtonNext = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link {...props} href={props.href || ''} className="font-semibold tracking-tight text-slate-400  gap-2 flex justify-end">
      See more
      <MoveRight />
    </Link>
  )
}