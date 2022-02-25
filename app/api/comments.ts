import type { Comment } from '~/types/comments'

export async function getComments(filmId: string) {
  const response = await fetch(
    `http://localhost:3001/comments?film_id=${filmId}`
  )
  const comments: Comment[] = await response.json()

  return comments
}
