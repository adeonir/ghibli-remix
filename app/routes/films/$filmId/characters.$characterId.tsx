import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import { getCharacterById } from '~/api/films'
import { CharacterDetails } from '~/components/CharacterDetails'

import type { Character } from '~/api/films'

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
