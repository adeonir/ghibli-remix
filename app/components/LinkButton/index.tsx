import { ReactNode } from 'react'
import { Link as RemixLink } from 'remix'
import { twMerge as cn } from 'tailwind-merge'

import type { LinkProps } from 'remix'

type Props = {
  children: ReactNode
  className?: string
} & LinkProps

export function LinkButton({ children, className, ...props }: Props) {
  const classNames = cn(
    'inline-block rounded-lg bg-teal-500 px-4 py-2 font-bold text-slate-100 transition hover:bg-teal-550 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 disabled:cursor-not-allowed disabled:opacity-75',
    className
  )

  return (
    <RemixLink {...props} className={classNames}>
      {children}
    </RemixLink>
  )
}
