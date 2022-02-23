import { ElementType, ReactNode } from 'react'
import cn from 'classnames'

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

  return (
    <Tag
      {...props}
      className={cn(
        `inline-block rounded-lg bg-pink-500 px-4 py-2 font-bold text-slate-100 outline-pink-300 transition hover:bg-pink-550 focus:outline focus:outline-2 ${className}`
      )}
    >
      {children}
    </Tag>
  )
}
