"use client";
import Lottie from "lottie-react";
import quiz from "../../../public/assets/quiz.json";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

const HomeMiddle = () => {
  return (
    <div className="lg:flex  lg:mx-20   lg:ml-0 ml-6">
      <div className="text-[#0e0d0d] mt-6 lg:ml-32">
        <p className="text-[16px] font-semibold uppercase">
          AI Question Generator
        </p>
        <h1 className="text-[36px] font-bold mt-3">
          Make life easier with Ai-QuizzBot
        </h1>
        <p className="text-[18px] mt-3">
          AiQuizbot is a powerful AI question generator designed to
          revolutionize the way you create questions and exams by allowing you
          to create multiple versions of the test at different levels.
        </p>
        <Link href="/dashboard">
          <button
            class="inline-flex items-center 
                justify-center ml-3 mb-12  mt-6 h-[46px] w-[220px] px-6 font-medium tracking-wide
                 text-white  rounded-2xl transition-all
       duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0 hover:bg-pos-100"
            aria-label="Sign up"
          >
            Try Question for Free
          </button>
        </Link>
      </div>
      <div className="flex items-center  justify-center h-30 w-full lg:ml-56">
        <Lottie animationData={quiz} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default HomeMiddle;
