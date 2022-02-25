import type { Comment } from '~/types/comments'

type Props = {
  filmId: string
  comments: Comment[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CommentsList = ({ filmId, comments }: Props) => {
  const dateFormat = (date: Date) =>
    new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(date))

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-teal-500">Comments</h2>

      <div className="rounded-xl border-2 border-slate-600 p-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="mb-6 border-b border-slate-700 pb-6 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="mb-4 flex items-center">
              <img
                src={comment.avatarUrl}
                alt={comment.name}
                className="h-9 w-9 rounded-full"
              />
              <p className="ml-4 text-lg font-bold text-slate-300">
                {comment.name}
              </p>
              <span className="ml-auto text-base font-semibold text-slate-500">
                {dateFormat(comment.createdAt)}
              </span>
            </div>
            <p className="text-base text-slate-100">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
