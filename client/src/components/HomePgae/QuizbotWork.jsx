import Link from "next/link";
import textimage from "../../../public/assets/text1.png";
import techingimage from "../../../public/assets/teachers.png";
import aicodeimage from "../../../public/assets/aicode.png";
import Image from "next/image";
const QuizbotWork = () => {
  return (
    <div>
      <section class="bg-white ">
        <div class="container px-8 py-10 mx-auto">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
              What Ai-Quizbot can do for you?
            </h1>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div class="relative">
                <Image
                  class="object-cover object-center rounded-2xl "
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
            </div>
            <div>
              <div class="relative">
                <Image
                  class="object-cover object-center rounded-2xl "
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
            </div>
            <div>
              <div class="relative">
                <Image
                  class="object-cover object-center rounded-2xl "
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuizbotWork;
