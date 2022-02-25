import { InputHTMLAttributes } from 'react'
import { twMerge as cn } from 'tailwind-merge'

type Props = {
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: Props) => {
  const classNames = cn(
    'w-full rounded-lg bg-slate-400 px-4 py-2 text-slate-800 placeholder:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 disabled:cursor-not-allowed disabled:opacity-75',
    className
  )

  return <input {...props} className={classNames} />
}
