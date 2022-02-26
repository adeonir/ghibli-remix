import { NavLink } from 'remix'

import type { Character } from '~/types/characters'

type Props = {
  characters: Character[]
}

export function CharactersList({ characters }: Props) {
  if (!characters.length) {
    return (
      <div>
        <h2 className="mb-8 text-2xl font-bold text-teal-500">
          All characters
        </h2>

        <div className="text-lg text-slate-400">
          Sorry, no characters listed in this film
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold text-teal-500">All characters</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {characters.map((character) => (
          <NavLink
            key={character.id}
            to={`characters/${character.id}`}
            prefetch="intent"
            className={({ isActive }) =>
              `group relative flex h-14 items-center rounded-xl bg-slate-700 bg-clip-padding pl-10 shadow-lg before:absolute before:left-0 before:h-full before:w-6 before:rounded-l-xl ${
                isActive
                  ? 'text-teal-200 before:bg-teal-500'
                  : 'text-slate-100 before:bg-slate-600 before:transition hover:before:bg-slate-500'
              }`
            }
          >
            <span className="text-lg leading-5">{character.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
