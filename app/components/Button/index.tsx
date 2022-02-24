import { ElementType, ReactNode } from 'react'
import { twMerge as cn } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
  as?: ElementType
}

export const Button = ({
  children,
  className,
  as = 'button',
  ...props
}: Props) => {
  const Tag = `${as}` as keyof JSX.IntrinsicElements

  const classNames = cn(
    'inline-block rounded-lg bg-teal-500 px-4 py-2 font-bold text-slate-100 outline-teal-300 transition hover:bg-teal-550 focus:outline',
    className
  )

  return (
    <Tag {...props} className={classNames}>
      {children}
    </Tag>
  )
}
