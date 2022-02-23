import { Film } from '~/api/films'
import { Button } from '~/components/Button'

type Props = {
  film: Film
}

export const Card = ({ film }: Props) => {
  return (
    <div className="flex flex-col rounded-2xl bg-slate-700 shadow-xl">
      <img src={film.image} alt={film.title} className="rounded-t-2xl" />

      <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
        <h2 className="text-xl font-bold text-slate-100">{film.title}</h2>
        <Button className="self-end">See more</Button>
      </div>
    </div>
  )
}
