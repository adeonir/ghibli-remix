import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { Film, getFilms } from '~/api/films'
import { Card } from '~/components/Card'

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
    <div className="mx-auto max-w-7xl space-y-12">
      <div className="flex h-12 items-center">
        <h1 className="text-4xl font-bold text-pink-500">
          Studio Ghibli Films
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {films.map((film) => (
          <Card key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}
