import { Film } from '~/api/films'

type Props = {
  film: Film
}

export const Header = ({ film }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-teal-500">{film.title}</h2>
        <div className="grid grid-cols-4">
          <div>
            <span className="text-sm text-slate-500">Release date</span>
            <p className="text-lg text-slate-200">{film.release_date}</p>
          </div>
          <div>
            <span className="text-sm text-slate-500">Time</span>
            <p className="text-lg text-slate-200">{film.running_time}min</p>
          </div>
          <div>
            <span className="text-sm text-slate-500">Rating</span>
            <p className="text-lg text-slate-200">
              {Number(film.rt_score) / 10}/10
            </p>
          </div>
          <div>
            <span className="text-sm text-slate-500">Director</span>
            <p className="text-lg text-slate-200">{film.director}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base text-slate-100">{film.description}</p>
      </div>
    </div>
  )
}
