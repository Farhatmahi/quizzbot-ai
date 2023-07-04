import Link from "next/link";

const ChoosePlan = () => {
  return (
    <div>
      <section class="bg-white ">
        <div class="container px-6 py-8 mx-auto">
          <div class="max-w-2xl p-1.5 mx-auto overflow-hidden bg-[#eee] rounded-2xl ">
            <div class="grid gap-3 md:grid-cols-3">
              <button
                class="px-3 py-2 font-bold text-gray-800 uppercase transition-colors duration-300
               transform bg-transparent rounded-2xl focus:outline-none 
                 "
              >
                Monthly
              </button>

              <button
                class="flex items-center justify-center px-3 py-2 font-bold text-gray-800
               uppercase transition-colors duration-300 transform bg-transparent rounded-2xl 
                focus:outline-none "
              >
                <span class="mx-1">Biannually</span>
                <span
                  class="text-xs mx-1 font-normal text-white transition-all duration-500
                  bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0 hover:bg-pos-100
                rounded-full py-1 px-1.5"
                >
                  save 10%
                </span>
              </button>

              <button
                class="flex items-center justify-center px-3 py-2 font-bold text-gray-800 
              uppercase transition-colors duration-300 transform bg-transparent rounded-2xl focus:outline-none 
                hover:bg-gray-200"
              >
                <span class="mx-1">Annually</span>
                <span
                  class="text-xs mx-1 font-normal transition-all text-white bg-gradient-to-r
                   from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38%  duration-500
       bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-full py-0.5 px-1.5"
                >
                  save 20%
                </span>
              </button>
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5
           md:space-y-0 md:flex-row"
          >
            <div
              class="w-full px-6 py-4 transition-colors duration-300 transform rounded-2xl md:mx-5 
            md:w-96 bg-gray-50 "
            >
              <div class="text-center">
                <p class="text-2xl font-semibold text-gray-800 ">Basic</p>
                <p class="mt-4 text-gray-500 ">Essentail Features</p>
                <h4 class="mt-2 text-gray-600 line-through dark:text-gray-400">
                  $59.99
                </h4>
                <h4 class="mt-2 text-4xl font-semibold text-gray-800 ">
                  $53.99
                </h4>
                <p class="mt-4 text-gray-500 ">/per month</p>
                <p class="mt-4 text-gray-500 ">Bill all 6 months</p>
              </div>

              <div class="mt-8 space-y-8">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="mx-4 text-gray-700 ">Access all features</span>
                </div>

                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="mx-4 text-gray-700 ">5 wathclists included</span>
                </div>

                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="mx-4 text-gray-700 ">Chat support</span>
                </div>

                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="mx-4 text-gray-700 ">Optimize hashtags</span>
                </div>

                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-[#FC495F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="mx-4 text-gray-700 ">5 exclusive widgets</span>
                </div>
              </div>
              <Link href="/transaction">
                {" "}
                <button
                  class="w-full px-4 py-2 mt-10 font-medium tracking-wide btn btn-primary
               text-white capitalize transition-all  transform rounded-2xl
                duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38%
                bg-size-200 bg-pos-0 hover:bg-pos-100 "
                >
                  Choose Basic
                </button>
              </Link>
            </div>

            <div
              class="w-full overflow-hidden transition-colors duration-300 transform rounded-2xl
             md:mx-5 md:w-96 bg-gray-50 "
            >
              <p
                class="py-2 text-sm text-center text-white uppercase transition-all
                 duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38%
                bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Recommended by experts
              </p>
              <div class="px-6 py-4">
                <div class="text-center">
                  <p class="text-2xl font-semibold text-gray-800 ">Pro</p>
                  <p class="mt-4 text-gray-500 ">Advanced Features</p>
                  <h4 class="mt-2 text-gray-600 line-through dark:text-gray-400">
                    $89.99
                  </h4>
                  <h4 class="mt-2 text-4xl font-semibold text-gray-800 ">
                    $80.99
                  </h4>
                  <p class="mt-4 text-gray-500 ">/per month</p>
                  <p class="mt-4 text-gray-500 ">Bill all 6 months</p>
                </div>

                <div class="mt-8 space-y-8">
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span class="mx-4 text-gray-700 ">Access all features</span>
                  </div>

                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span class="mx-4 text-gray-700 ">
                      Unlimited wathclists
                    </span>
                  </div>

                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span class="mx-4 text-gray-700 ">Chat support</span>
                  </div>

                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span class="mx-4 text-gray-700 ">Optimize hashtags</span>
                  </div>

                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-[#FC495F]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span class="mx-4 text-gray-700 ">
                      10+ exclusive pro widgets
                    </span>
                  </div>
                </div>
                <Link href="/transaction">
                  {" "}
                  <button
                    class="w-full px-4 py-2 mt-10 font-medium tracking-wide btn btn-primary
               text-white capitalize transition-all  transform rounded-2xl
                duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38%
                bg-size-200 bg-pos-0 hover:bg-pos-100 "
                  >
                    Choose Pro
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChoosePlan;
