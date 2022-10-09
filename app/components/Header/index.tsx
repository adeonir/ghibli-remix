import type { Film } from '~/types/films'

export type Props = {
  film: Film
}

export function Header({ film }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-teal-500">{film.title}</h2>
        <div className="grid-col-1 grid gap-4 sm:grid-cols-3">
          <div>
            <span className="mb-1 flex border-b border-b-slate-500 text-sm text-slate-500">
              Release date
            </span>
            <p className="text-lg text-slate-200">{film.release_date}</p>
          </div>
          <div>
            <span className="mb-1 flex border-b border-b-slate-500 text-sm text-slate-500">
              Time
            </span>
            <p className="text-lg text-slate-200">{film.running_time}min</p>
          </div>
          <div>
            <span className="mb-1 flex border-b border-b-slate-500 text-sm text-slate-500">
              Rating
            </span>
            <p className="text-lg text-slate-200">
              {Number(film.rt_score) / 10}/10
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base text-slate-100">{film.description}</p>
      </div>
    </div>
  )
}
