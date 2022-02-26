import { InputHTMLAttributes } from 'react'
import { useField } from 'remix-validated-form'
import { twMerge as cn } from 'tailwind-merge'

type Props = {
  name: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export function TextField({ name, className, ...props }: Props) {
  const { error, getInputProps } = useField(name)

  const classNames = cn(
    `rounded-lg bg-slate-600 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
      error && 'border-2 border-red-400'
    }`,
    className
  )

  return (
    <div className="flex w-full flex-col">
      <input
        {...props}
        {...getInputProps({ id: name })}
        className={classNames}
      />
      {error && <span className="mt-2 flex text-sm text-red-400">{error}</span>}
    </div>
  )
}
