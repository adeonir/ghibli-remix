import { Link } from 'remix'

import { ArrowLeftIcon } from '~/components/Icons'
import { Button } from '~/components/Button'

export type Props = {
  title: string
  image: string
}

export function Banner({ title, image }: Props) {
  return (
    <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl md:h-72 lg:h-96">
      <div className="absolute flex h-full w-full flex-col items-start justify-between">
        <Link to="/films" className="ml-4 mt-4">
          <Button className="rounded-full px-3 py-3">
            <ArrowLeftIcon width={24} height={24} />
          </Button>
        </Link>
      </div>

      <img src={image} alt={title} className="min-h-full w-full object-cover" />
    </div>
  )
}
