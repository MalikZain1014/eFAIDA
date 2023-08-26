import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <>
        <section className="relative py-32 lg:py-36 bg-white">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
              <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
              <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
            </div>
            <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
            <div
              className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
            >
              <h1
                className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
      font-bold text-gray-900"
              >
                SOFTWARE DEVELOPMENT COMPANY
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
                  Best-in-class
                </span>
                Niche solutions
              </h1>
              <p className="mt-8 text-gray-700">
                Powered by transparency, technology-driven customer interaction
                process, and highly proficient teams.
              </p>
              <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                <div className="flex sm:flex-row flex-col gap-5 w-full">
                  <form
                    action="#"
                    className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20
                      border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:gray-100  focus-within:border-white"
                  >
                    <span className="min-w-max pr-2 border-r border-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                        />
                      </svg>
                    </span>
                    <input
                      type="email"
                      disabled
                      name=""
                      id=""
                      placeholder="malikzain1014@gmail.com"
                      className="w-full py-3 outline-none   bg-transparent"
                    />
                    <Link to="./contact">
                      <button
                        className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                          after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-white"
                      >
                        <span className="hidden sm:flex relative z-[5]">
                          Contact Us
                        </span>
                        <span className="flex sm:hidden relative z-[5]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
              <img
                src="m 1.png"
                alt=""
                width={2350}
                height={2359}
                className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
              />
            </div>
          </div>
        </section>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <Link to="https://youtu.be/Tn6-PIqc4UM?si=XUs9YdGDrG1jbfhM">
              <Link
                className="rounded-t-lg"
                src="https://youtu.be/Tn6-PIqc4UM?si=XUs9YdGDrG1jbfhM"
                alt="Skyscrapers"
              />
            </Link>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
              <small>Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                alt="Los Angeles Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
              <small>Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                alt="Palm Springs Road"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
              <small>Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
