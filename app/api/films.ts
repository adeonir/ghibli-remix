export type Film = {
  id: string
  title: string
  original_title: string
  description: string
  image: string
  movie_banner: string
  people: string[]
}

export async function getFilms() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const films: Film[] = await response.json()

  return films
}
