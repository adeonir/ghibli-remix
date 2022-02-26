import { ValidatedForm } from 'remix-validated-form'

import { TextField } from '~/components/Form/TextField'
import { TextArea } from '~/components/Form/TextArea'
import { SubmitButton } from '~/components/Form/SubmitButton'

import { commentSchema } from '~/validations/comments'

import type { Comment } from '~/types/comments'

type Props = {
  filmId: string
  comments: Comment[]
}

export function CommentsList({ filmId, comments }: Props) {
  const dateFormat = (date: Date) =>
    new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(date))

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-teal-500">Comments</h2>

      <ValidatedForm
        method="post"
        action={`/films/${filmId}`}
        validator={commentSchema}
        className="flex flex-col gap-4"
      >
        <TextField name="name" placeholder="Name" className="flex-1" />
        <TextArea
          name="message"
          placeholder="Message"
          className="flex-1 bg-slate-600 text-slate-100 placeholder:text-slate-400 disabled:text-slate-300"
        />
        <SubmitButton className="h-12 w-36 self-end" />
      </ValidatedForm>

      <div className="rounded-xl border-2 border-slate-600 p-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="mb-6 border-b border-slate-700 pb-6 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="mb-4 flex items-center gap-4">
              <img
                src={comment.avatarUrl}
                alt={comment.name}
                className="h-9 w-9 rounded-full"
              />
              <div className="flex flex-1 flex-col sm:flex-row sm:justify-between">
                <p className="text-lg font-bold text-slate-300">
                  {comment.name}
                </p>
                <span className="text-base font-semibold text-slate-500">
                  {dateFormat(comment.createdAt)}
                </span>
              </div>
            </div>
            <p className="text-base text-slate-100">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
