import Image from 'next/image';

/** About me page located [here](https://jack-maclennan-portfolio.vercel.app/about-me). @source */
export default function AboutMe() {
  return (
    <div className="m-8 flex w-1/2 flex-row items-center justify-around gap-4">
      <span className="basis-1/5 rounded bg-emerald-700 drop-shadow-lg" data-testid="image">
        <Image className="!static overflow-hidden rounded-xl p-2" src="/me.jpg" alt="me" fill={true} />
      </span>
      <div className="flex h-full basis-3/5 flex-col justify-around">
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-300">About Me</h2>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-300">Jack Maclennan</h1>
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
    </div>
  );
}
