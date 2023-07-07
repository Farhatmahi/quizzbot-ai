import Link from "next/link";
import textimage from "../../../public/assets/text1.png";
import techingimage from "../../../public/assets/teachers.png";
import aicodeimage from "../../../public/assets/aicode.png";
import truefalse from "../../../public/assets/truefalse.png";
import { motion } from "framer-motion";
import Image from "next/image";

const QuizbotWork = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const images = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div>
      <section class="bg-white ">
        <div class="container px-8 py-10 mx-auto">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
              What Ai-Quizbot can do for you?
            </h1>
          </div>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"
          >
            <motion.div variants={images}>
              <div class="relative ">
                <Image
                  class="object-cover object-center rounded-2xl border border-[#e0dfdf] "
                  src={textimage}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  //   style={{ height: "80%", width: "100%" }}
                />
              </div>

              <h1 class="mt-6 text-xl font-semibold text-center text-gray-800 ">
                Text, Link, Video
              </h1>

              {/* <hr class="w-32 my-6 text-blue-500" /> */}

              <p class="text-sm text-gray-900 text-center">
                AiQuizbot can prepare questions in different types such as
                Multiple-Choice, Fill in the Blanks, True - False, Matching,
                Blooms Taxonomy at levels using any text, link or video....
              </p>

              <Link
                href="/dashboard"
                class=" lg:ml-40 inline-block mt-4 items-center justify-center text-[#FC495F]
                 underline hover:text-[#FF0000]"
              >
                See more
              </Link>
            </motion.div>
            <motion.div variants={images}>
              <div class="relative">
                <Image
                  class="object-cover object-center rounded-2xl border border-[#e0dfdf] "
                  src={techingimage}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  //   style={{ height: "80%", width: "100%" }}
                />
              </div>

              <h1 class="mt-6 text-xl font-semibold text-center text-gray-800 ">
                Teaching Tools
              </h1>

              {/* <hr class="w-32 my-6 text-blue-500" /> */}

              <p class="text-sm text-gray-900 text-center">
                Quizbot can help you to design better lessons with different
                teaching tools such as Lesson Planner, Experiment Designer,
                Opening Questions, In-class Activity Planner, Project Ideas....
              </p>

              <Link
                href="/dashboard"
                class=" lg:ml-40 inline-block mt-4 items-center justify-center text-[#FC495F]
                 underline hover:text-[#FF0000]"
              >
                See more
              </Link>
            </motion.div>
            <motion.div variants={images}>
              <div class="relative">
                <Image
                  class="object-cover object-center rounded-2xl border border-[#e0dfdf]"
                  src={aicodeimage}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  //   style={{ height: "80%", width: "100%" }}
                />
              </div>

              <h1 class="mt-6 text-xl font-semibold text-center text-gray-800 ">
                AI Code
              </h1>

              {/* <hr class="w-32 my-6 text-blue-500" /> */}

              <p class="text-sm text-gray-900 text-center">
                Quizbot can code for the website you want to create and give you
                suggestion to improve it.....
              </p>

              <Link
                href="/dashboard"
                class=" lg:ml-40 inline-block mt-4 items-center justify-center text-[#FC495F]
                 underline hover:text-[#FF0000]"
              >
                See more
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuizbotWork;
