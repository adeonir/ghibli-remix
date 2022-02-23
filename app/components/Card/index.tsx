import { Film } from '~/api/films'

type Props = {
  film: Film
}

export const Card = ({ film }: Props) => {
  return (
    <div className="flex flex-col rounded-2xl bg-slate-700 shadow-xl">
      <img src={film.image} alt={film.title} className="rounded-t-2xl" />

      <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
        <h2 className="text-xl font-bold text-slate-100">{film.title}</h2>
        <div className="cursor-pointer self-end rounded-lg bg-pink-500 py-2 px-4 font-bold text-slate-100 transition hover:bg-pink-550">
          See more
        </div>
      </div>
    </div>
  )
}
