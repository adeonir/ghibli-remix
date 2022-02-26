import { Link } from 'remix'

import { ArrowLeft } from '~/assets/ArrowLeft'
import { Button } from '~/components/Button'

import type { Film } from '~/types/films'

type Props = {
  film: Film
}

export const Banner = ({ film }: Props) => {
  return (
    <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl md:h-72 lg:h-96">
      <div className="absolute flex h-full w-full flex-col items-start justify-between">
        <Link to="/films" className="ml-4 mt-4">
          <Button className="rounded-full px-3 py-3">
            <ArrowLeft width={24} height={24} />
          </Button>
        </Link>
      </div>

      <img src={film.movie_banner} className="min-h-full w-full object-cover" />
    </div>
  )
}
