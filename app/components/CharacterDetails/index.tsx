import type { Character } from '~/types/characters'

type Props = {
  character?: Character
  error?: any
  caught?: any
}

export function CharacterDetails({ character, error, caught }: Props) {
  if (error) {
    return (
      <div className="mb-8">
        <h2 className="mb-8 text-2xl font-bold text-teal-500">
          Character details
        </h2>

        <div className="rounded-xl border-2 border-red-400 bg-slate-700 py-4 px-6 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-red-400">
            Uhh... something went wrong
          </h3>

          <p className="text-lg text-slate-400">
            Sorry, an unexpected error happened
          </p>
        </div>
      </div>
    )
  }

  if (caught) {
    return (
      <div className="mb-8">
        <h2 className="mb-8 text-2xl font-bold text-teal-500">
          Character details
        </h2>

        <div className="rounded-xl border-2 border-red-400 bg-slate-700 py-4 px-6 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-red-400">
            {caught.statusText}
          </h3>

          <p className="text-lg text-slate-400">Sorry, nothing to show here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <h2 className="mb-8 text-2xl font-bold text-teal-500">
        Character details
      </h2>

      <div className="rounded-xl bg-slate-700 py-4 px-6 shadow-lg">
        <h3 className="mb-4 text-2xl font-bold text-teal-200">
          {character?.name}
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-base text-slate-400">Gender</p>
            <p className="text-xl text-slate-100">{character?.gender}</p>
          </div>
          <div>
            <p className="text-base text-slate-400">Eye color</p>
            <p className="text-xl text-slate-100">{character?.eye_color}</p>
          </div>
          <div>
            <p className="text-base text-slate-400">Age</p>
            <p className="text-xl text-slate-100">{character?.age}</p>
          </div>
          <div>
            <p className="text-base text-slate-400">Hair color</p>
            <p className="text-xl text-slate-100">{character?.hair_color}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
