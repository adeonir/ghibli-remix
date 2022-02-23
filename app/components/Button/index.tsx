import { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

type Props = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        `rounded-lg bg-pink-500 px-4 py-2 font-bold text-slate-100 outline-pink-700 transition hover:bg-pink-550 ${className}`
      )}
    >
      {children}
    </button>
  )
}
