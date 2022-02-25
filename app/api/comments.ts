import type { Comment } from '~/types/comments'

export async function getComments(filmId: string) {
  const response = await fetch(
    `http://localhost:3001/comments?film_id=${filmId}`
  )
  const comments: Comment[] = await response.json()

  return comments
}

export async function addComment(comment: Comment) {
  const response = await fetch(`http://localhost:3001/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })

  if (!response.ok) {
    throw response
  }

  const newComment: Comment = await response.json()

  return newComment
}
