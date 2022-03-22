import { GhibliLogo } from '~/components/Logo'

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold text-teal-500">
          Ghibli Studio Film list
        </h1>
        <GhibliLogo
          className="h-[144px] w-[300px] text-slate-100"
          aria-label="Ghibli Studio"
        />
      </div>

      <hr className="border-1 my-12 w-full min-w-[300px] max-w-[480px] border-teal-500" />

      <div className="text-xl text-slate-400">
        Go to the{' '}
        <a
          href="/films"
          className="text-teal-500 underline-offset-2 hover:underline"
        >
          films page
        </a>{' '}
        to see the list!
      </div>
    </div>
  )
}
