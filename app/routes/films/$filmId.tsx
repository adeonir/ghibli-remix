import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { getFilmById } from '~/api/films'

import type { Film } from '~/api/films'
import { Banner } from '~/components/Banner'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, 'filmId is required')
  const film = await getFilmById(params.filmId)

  return film
}

export default function Film() {
  const film = useLoaderData<Film>()

  return (
    <div>
      <Banner film={film} />
    </div>
  )
}
