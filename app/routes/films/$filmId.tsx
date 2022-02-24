import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import { getFilmById } from '~/api/films'
import { Banner } from '~/components/Banner'
import { Header } from '~/components/Header'

import type { Film } from '~/api/films'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, 'filmId is required')
  const film = await getFilmById(params.filmId)

  return film
}

export default function Film() {
  const film = useLoaderData<Film>()

  return (
    <div className="space-y-8">
      <Banner film={film} />
      <Header film={film} />
    </div>
  )
}
