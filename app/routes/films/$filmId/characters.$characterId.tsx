import { LoaderFunction, useCatch, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import { getCharacterById } from '~/api/films'

import { CharacterDetails } from '~/components/CharacterDetails'

import type { Character } from '~/types/characters'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.characterId, 'characterId is required')
  const character = await getCharacterById(params.characterId)

  return character
}

export default function Character() {
  const character = useLoaderData<Character>()

  return <CharacterDetails character={character} />
}

export function ErrorBoundary({ error }: any) {
  return <CharacterDetails error={error} />
}

export function CatchBoundary() {
  const caught = useCatch()

  if (caught.status === 404) {
    return <CharacterDetails caught={caught} />
  }

  throw new Error('Not found')
}
