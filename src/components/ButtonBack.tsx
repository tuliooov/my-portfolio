"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
export const ButtonBack = () => {
  const router = useRouter()
  return (
    <Link href='#' onClick={() => router.back()} className="font-semibold tracking-tight text-slate-400">
      &larr; Back
    </Link>
  )
}