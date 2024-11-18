import Image from 'next/image';

/** About me page located [here](https://jack-maclennan-portfolio.vercel.app/about-me). @source */
export default function AboutMe() {
  return (
    <div className="m-8 flex w-full max-w-screen-2xl flex-row items-center justify-around gap-4">
      <div className="flex h-full flex-col justify-around gap-8 sm:basis-2/3 lg:basis-3/5">
        <div className="flex w-full gap-4 max-sm:justify-around">
          <span className="flex flex-col justify-around gap-8">
            <h2 className="text-lg font-medium text-slate-800 dark:text-slate-300" data-testid="page-header">
              About Me
            </h2>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-300" data-testid="name-header">
              Jack Maclennan
            </h1>
          </span>
          <span className="rounded bg-emerald-700 drop-shadow-lg sm:hidden" data-testid="mobile-image">
            <Image className="!static overflow-hidden rounded-xl p-2" src="/me.jpg" alt="me" fill={true} />
          </span>
        </div>
        <span className="text-slate-800 dark:text-slate-300" data-testid="description">
          Hello! My name is Jack Maclennan and I am a web developer. I graduated from Victoria University of Wellington
          in 2021 with a Bachelors of Science majoring in Computer Science. Shortly after I started my first job in the
          industry at cricHQ. There I got my first taste of React and Ruby on Rails which have become my preferred
          languages/frameworks. Programming is my passion, I love the challenge.
          <br />
          <br />
          In my spare time I work on solo projects such as this, go on bush walks with my friends and read.
        </span>
      </div>
      <span
        className="basis-1/3 rounded bg-emerald-700 drop-shadow-lg max-sm:hidden lg:basis-1/5"
        data-testid="desktop-image"
      >
        <Image className="!static overflow-hidden rounded-xl p-2" src="/me.jpg" alt="me" fill={true} />
      </span>
    </div>
  );
}
