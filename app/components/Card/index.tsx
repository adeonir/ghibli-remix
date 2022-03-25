import { LinkButton } from '~/components/LinkButton'

export type Props = {
  id: string
  title: string
  image: string
}

export function Card({ id, title, image }: Props) {
  return (
    <div className="flex flex-col rounded-2xl bg-slate-700 shadow-xl">
      <img src={image} alt={title} className="rounded-t-2xl" />

      <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
        <h2 className="text-xl font-bold text-slate-100">{title}</h2>
        <LinkButton to={id} prefetch="intent" className="self-end">
          See more
        </LinkButton>
      </div>
    </div>
  )
}
