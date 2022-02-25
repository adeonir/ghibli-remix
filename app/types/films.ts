import type { Character } from '~/types/characters'
import type { Comment } from '~/types/comments'

export type Film = {
  id: string
  title: string
  original_title: string
  description: string
  image: string
  movie_banner: string
  people: string[]
  characters: Character[]
  comments: Comment[]
  release_date: string
  running_time: string
  rt_score: string
}
