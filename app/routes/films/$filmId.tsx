import { LoaderFunction, Outlet, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import { getFilmById } from '~/api/films'
import { Banner } from '~/components/Banner'
import { Header } from '~/components/Header'
import { CharactersList } from '~/components/CharactersList'

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

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-2">
        <CharactersList characters={film.characters} />

        <div className="col-span-2 lg:col-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
