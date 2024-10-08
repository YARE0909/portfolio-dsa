import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// Define animation variants
const navbarVariant = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const contentVariant = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Projects = () => {
  const router = useRouter();
  return (
    <motion.div className="w-full min-h-screen h-fit bg-gradient-to-b from-[#14121C] to-black" initial="initial" animate="animate">
      <Head>
        <title>Pradyumna D | Projects</title>
        <meta
          name="description"
          content="Portfolio of Pradyumna D, a Full Stack Developer"
        />
        <link rel="icon" href="/ogIcon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Pradyumna D" />
        <meta
          property="og:description"
          content="Portfolio of Pradyumna D, a Full Stack Developer"
        />
        <meta property="og:url" content="https://pradyumnad.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <motion.div className="fixed top-0 w-full z-50" variants={navbarVariant}>
          <Navbar />
        </motion.div>
      <motion.div className="flex flex-col gap-20 items-center pt-20 p-4" variants={contentVariant}>
        <div>
          <h1 className="text-8xl text-white font-bold">my projects</h1>
        </div>
        <div className="w-full flex flex-col lg:flex lg:flex-row lg:flex-wrap justify-center gap-20">
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://hackout.shawshankkumar.me/");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project4.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Travelmate</h1>
              </div>
              <div>
                <h1 className="text-center">
                  Interact and plan trips from seasoned travellers. <br />
                  (Hackout 2023 travel track winner)
                </h1>
              </div>
            </div>
          </Tilt>
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://kzilla-internal-hackathon.vercel.app/");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project3.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Y</h1>
              </div>
              <div>
                <h1 className="text-center">
                  A clone of the popular social media app,
                  <br /> X(Twitter)
                </h1>
              </div>
            </div>
          </Tilt>
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://infostash-web.vercel.app/");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project1.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Infostash</h1>
              </div>
              <div>
                <h1 className="text-center">
                  UI for a platform that offers certified courses on various
                  topics.
                </h1>
              </div>
            </div>
          </Tilt>
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://capx-facial-recognition.vercel.app/");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project2.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Facial Recognition App</h1>
              </div>
              <div>
                <h1 className="text-center">
                  A webapp that verifies users on signing up to prevent
                  duplicate accounts.
                </h1>
              </div>
            </div>
          </Tilt>
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://arthouse814.org");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project5.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">ArtHouse 814 Website</h1>
              </div>
              <div>
                <h1 className="text-center">Website for ArtHouse 814</h1>
              </div>
            </div>
          </Tilt>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
