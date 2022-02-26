import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  Outlet,
  redirect,
  useLoaderData,
} from 'remix'
import invariant from 'tiny-invariant'
import faker from '@faker-js/faker'
import { validationError } from 'remix-validated-form'

import { getFilmById } from '~/api/films'
import { addComment } from '~/api/comments'

import { Banner } from '~/components/Banner'
import { Header } from '~/components/Header'
import { CharactersList } from '~/components/CharactersList'
import { CommentsList } from '~/components/CommentsList'

import { commentSchema } from '~/validations/comments'

import type { Film } from '~/types/films'
import type { Comment } from '~/types/comments'

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `${data.title} | Studio Ghibli`,
    description: data.description,
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.filmId, 'filmId is required')
  const body = await request.formData()

  const values = await commentSchema.validate(body)

  if (values.error) {
    return validationError(values.error)
  }

  const comment: Comment = {
    id: faker.datatype.uuid(),
    name: body.get('name') as string,
    avatarUrl: faker.image.avatar(),
    message: body.get('message') as string,
    createdAt: new Date(),
    filmId: params.filmId,
  }

  await addComment(comment)

  return redirect(`/films/${params.filmId}`)
}

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

          <CommentsList filmId={film.id} comments={film.comments || []} />
        </div>
      </div>
    </div>
  )
}
