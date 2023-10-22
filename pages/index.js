import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import Image from "next/image";
import Lee from "../public/LeeTan_Headshot.jpg";
import {useState} from "react";


export default function Home() {
  return (
      <div>
          <Head>
              <title>Lee C Tan Portfolio</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />

          </Head>
          <main className="bg-gradient-to-b from-blue-400 to-blue-200 md:px-20 lg:px-40">
              <section className="max-h-screen ">
                  <nav className="py-10 mb-12 flex justify-between">

                      <h1 className="text-3xl font-burtons">Lee C Tan</h1>
                      {/*/!*<ul className="flex items-center">*!/*/}
                      {/*/!*    <li><BsFillMoonStarsFill className="cursor-pointer text-2xl" /></li>*!/*/}
                      {/*/!*    <li><a*!/*/}
                      {/*/!*        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"*!/*/}
                      {/*/!*        href="#"*!/*/}
                      {/*/!*    >*!/*/}
                      {/*/!*        Resume*!/*/}
                      {/*/!*    </a>*!/*/}
                      {/*/!*    </li>*!/*/}
                      {/*</ul>*/}
                  </nav>

                  <div className={"text-center p-1"}>
                      <h2 className={"text-5xl text-sky-800 font-medium md:text-5xl"}>
                          Hi I'm Lee
                      </h2>
                      <h3 className={"text-2xl py-2"}>I'm a healthcare professional turned tech enthusiast</h3>
                      <p className={"text-xl py-2 leading-8 text-gray-800"}>I'm on a journey to make this world a better place through AI @Medvenix.com</p>
                      <p className={"text-xl py-2 leading-8 text-gray-800"}>Let's connect!</p>

                  </div>
                  <div className={"text-9xl flex justify-center gap-16 py-3"}>
                      <a
                          className="text-5xl"
                          href={`https://twitter.com/leectan`}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <AiFillTwitterCircle />
                      </a>
                      <a
                          className="text-5xl"
                          href={`https://www.linkedin.com/in/lee-tan/`}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <AiFillLinkedin />
                      </a>
                      <a
                          className="text-5xl"
                          href={`https://github.com/Leectan`}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <AiFillGithub/>
                      </a>

                  </div>

                  <div className={"relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden"}>
                      <Image src={Lee} layout="fill" objectFit="cover">

                      </Image>

                  </div>

              </section>


              <section>

              </section>



          </main>
      </div>
  )
}