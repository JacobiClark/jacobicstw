import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <section className="flex flex-col items-center content-center h-full p-5 w-6xl">
        <div className="w-full max-w-6xl mx-5 mt-3">
          <h1 className="mb-2 text-5xl font-medium text-blue-400 transition transition-colors duration-1000 dark:text-yellow-300">
            Hello, I&apos;m Jacob Clark
          </h1>
        </div>
        <div className="w-full max-w-6xl mx-5 mt-3">
          <p className="mb-2 text-2xl transition transition-colors duration-1000 text-slate-800 text-md dark:text-gray-50">
            I&apos;m a software developer based in San Diego, California.
            I&apos;m currently building software for the FAIR Data Innovations
            Hub that assists Biomedical researchers with uploading datasets that
            comply with the FAIR SPARC data curation and sharing guidelines.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-5 mt-3">
          <p className="mb-2 text-2xl transition transition-colors duration-1000 text-slate-800 text-md dark:text-gray-50">
            With a CS degree, over a year of professional software development
            experience, and four years of programming experience, I have built a
            solid foundation of skills that can bring value to any team.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-5 mt-3">
          <p className="mb-2 text-2xl transition transition-colors duration-1000 text-slate-800 text-md dark:text-gray-50">
            My strongets skillset is frond-end development, however, I am
            growing my back-end skillset and thoroughly enjoy all other aspects
            of software engineering.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-5 mt-3">
          <p className="mb-2 text-2xl transition transition-colors duration-1000 text-slate-800 text-md dark:text-gray-50">
            Please feel free to check out some of the technologies I have
            experience with and projects I have built below.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center content-center h-full p-5 w-6xl">
        <div className="w-full max-w-6xl mx-5 mt-3">
          <h1 className="mb-2 text-5xl font-medium text-blue-400 transition transition-colors duration-1000 dark:text-yellow-300">
            Projects
          </h1>
        </div>
      </section>
    </Fragment>
  );
}
