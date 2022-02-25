import { getComments } from '~/api/comments'

import type { Film } from '~/types/films'
import type { Character } from '~/types/characters'

export async function getFilms(title?: string) {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const films: Film[] = await response.json()

  return films.filter((film) =>
    title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
  )
}

export async function getFilmById(filmId: string) {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/films/${filmId}`
  )
  const film: Film = await response.json()

  const characters = await Promise.all(
    film.people
      .filter((url) => url !== 'https://ghibliapi.herokuapp.com/people/')
      .map((url) => fetch(url).then((res) => res.json()))
  )

  const comments = await getComments(filmId)

  return { ...film, characters, comments }
}

export async function getCharacterById(
  characterId: string
): Promise<Character> {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/people/${characterId}`
  )

  if (!response.ok) {
    throw response
  }

  const character: Character = await response.json()

  return character
}
