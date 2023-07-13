"use client";
import Link from "next/link";
import { motion } from "framer-motion";
const ChoosePlan = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="container px-6 py-8 mx-auto">
          <div className="max-w-2xl p-1.5 mx-auto overflow-hidden bg-[#eee] rounded-2xl ">
            <div className="grid gap-3 md:grid-cols-3">
              <button
                className="px-3 py-2 font-bold text-gray-800 uppercase transition-colors duration-300
               transform bg-transparent rounded-2xl focus:outline-none 
                 "
              >
                Monthly
              </button>

              <button
                className="flex items-center justify-center px-3 py-2 font-bold text-gray-800
               uppercase transition-colors duration-300 transform bg-transparent rounded-2xl 
                focus:outline-none "
              >
                <span className="mx-1">Biannually</span>
                <span
                  className="text-xs mx-1 font-normal text-white transition-all duration-500
                  bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0 hover:bg-pos-100
                rounded-full py-1 px-1.5"
                >
                  save 10%
                </span>
              </button>

              <button
                className="flex items-center justify-center px-3 py-2 font-bold text-gray-800 
              uppercase transition-colors duration-300 transform bg-transparent rounded-2xl focus:outline-none 
                "
              >
                <span className="mx-1">Annually</span>
                <span
                  className="text-xs mx-1 font-normal transition-all text-white bg-gradient-to-r
                   from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38%  duration-500
       bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-full py-0.5 px-1.5"
                >
                  save 20%
                </span>
              </button>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5
           md:space-y-0 md:flex-row"
          >
            <motion.div
              // whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full px-6 py-4 transition-colors duration-300 transform rounded-2xl md:mx-5 
            md:w-96 bg-gray-50 "
            >
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-800 ">Basic</p>
                <p className="mt-4 text-gray-500 ">Essentail Features</p>
                <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">
                  $59.99
                </h4>
                <h4 className="mt-2 text-4xl font-semibold text-gray-800 ">
                  $53.99
                </h4>
                <p className="mt-4 text-gray-500 ">/per month</p>
                <p className="mt-4 text-gray-500 ">Bill all 6 months</p>
              </div>

              <div className="mt-8 space-y-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">
                    Access all features
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">
                    5 wathclists included
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">Chat support</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">Optimize hashtags</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">
                    5 exclusive widgets
                  </span>
                </div>
              </div>
              <Link href="/transaction">
                {" "}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-full px-4 py-2 mt-10 font-medium tracking-wide btn btn-primary
               text-white capitalize transition-all  transform rounded-2xl
                duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38%
                bg-size-200 bg-pos-0 hover:bg-pos-100 "
                >
                  Choose Basic
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full overflow-hidden transition-colors duration-300 transform rounded-2xl
             md:mx-5 md:w-96 bg-gray-50 "
            >
              <p
                className="py-2 text-sm text-center text-white uppercase transition-all
                 duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38%
                bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Recommended by experts
              </p>
              <div className="px-6 py-4">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-800 ">Pro</p>
                  <p className="mt-4 text-gray-500 ">Advanced Features</p>
                  <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">
                    $89.99
                  </h4>
                  <h4 className="mt-2 text-4xl font-semibold text-gray-800 ">
                    $80.99
                  </h4>
                  <p className="mt-4 text-gray-500 ">/per month</p>
                  <p className="mt-4 text-gray-500 ">Bill all 6 months</p>
                </div>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="mx-4 text-gray-700 ">
                      Access all features
                    </span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="mx-4 text-gray-700 ">
                      Unlimited wathclists
                    </span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="mx-4 text-gray-700 ">Chat support</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="mx-4 text-gray-700 ">
                      Optimize hashtags
                    </span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="mx-4 text-gray-700 ">
                      10+ exclusive pro widgets
                    </span>
                  </div>
                </div>
                <Link href="/transaction">
                  {" "}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-full px-4 py-2 mt-10 font-medium tracking-wide btn btn-primary
               text-white capitalize transition-all  transform rounded-2xl
                duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38%
                bg-size-200 bg-pos-0 hover:bg-pos-100 "
                  >
                    Choose Pro
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChoosePlan;
