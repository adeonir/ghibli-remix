import { InputHTMLAttributes } from 'react'
import { twMerge as cn } from 'tailwind-merge'

type Props = {
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: Props) {
  const classNames = cn(
    'w-full rounded-lg bg-slate-600 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500',
    className
  )

  return <input {...props} className={classNames} />
}
