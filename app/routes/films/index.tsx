import { Form, Link, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { getFilms } from '~/api/films'

import { Button } from '~/components/Button'
import { Card } from '~/components/Card'
import { Input } from '~/components/Input'

import type { Film } from '~/types/films'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') ?? ''

  return getFilms(title)
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
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <h1 className="text-4xl font-bold text-teal-500">
          <Link to="/films">Studio Ghibli Films</Link>
        </h1>
        <Form
          method="get"
          reloadDocument
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Input
            type="text"
            name="title"
            placeholder="Type a title..."
            className="h-12"
          />
          <Button type="submit" className="h-12 px-8">
            Search
          </Button>
        </Form>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {films.map((film) => (
          <Card key={film.id} {...film} />
        ))}
      </div>
    </div>
  )
}
