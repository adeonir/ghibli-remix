import { useFormContext, useIsSubmitting } from 'remix-validated-form'
import { twMerge as cn } from 'tailwind-merge'

type Props = {
  className?: string
}

export const ValidatedButton = ({ className }: Props) => {
  const isSubmitting = useIsSubmitting()
  const { isValid } = useFormContext()

  const disabled = isSubmitting || !isValid

  const classNames = cn(
    `cursor-pointer inline-block rounded-lg bg-teal-500 px-4 py-2 font-bold text-slate-100 transition hover:bg-teal-550 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${{
      disabled: 'disabled:cursor-not-allowed disabled:opacity-75',
    }}`,
    className
  )

  return (
    <button type="submit" disabled={disabled} className={classNames}>
      {isSubmitting ? 'Submiting...' : 'Submit'}
    </button>
  )
}
