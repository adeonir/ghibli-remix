import { twMerge as cn } from 'tailwind-merge'

import { InputHTMLAttributes } from 'react'

type Props = {
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: Props) => {
  const classNames = cn(
    'rounded-lg bg-slate-400 px-4 py-2 text-slate-800 outline-teal-300 placeholder:text-slate-100 focus:outline',
    className
  )

  return <input {...props} className={classNames} />
}
