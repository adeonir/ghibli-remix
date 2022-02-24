import cn from 'classnames'
import { InputHTMLAttributes } from 'react'

type Props = {
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: Props) => {
  return (
    <input
      {...props}
      className={cn(
        `rounded-lg bg-slate-400 px-4 py-2 text-slate-800 outline-pink-300 placeholder:text-slate-100 focus:outline focus:outline-2 ${className}`
      )}
    />
  )
}
