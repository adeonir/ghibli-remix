import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { Film, getFilms } from '~/api/films'

export const loader: LoaderFunction = async () => {
  return getFilms()
}

export const meta: MetaFunction = () => {
  return {
    title: 'Films | Studio Ghibli',
    description: 'List of films from Studio Ghilbli',
  }
}

export default function Index() {
  const films = useLoaderData<Film[]>()

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  )
}
