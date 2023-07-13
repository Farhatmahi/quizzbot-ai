"use client";
import axios from "axios";
import SavedQuestionTable from "./SavedQuestionTable";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";

const SavedQuestion = () => {
  const [savedQuestion, setSavedQuestion] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleAllSavedQuestions = async () => {
      try {
        const email = user?.email;
        const response = await axios.post(
          "http://localhost:4000/api/v1/users/get-user",
          { email }
        );
        const data = await response.data;
        const userID = data?.data?._id;
        console.log(userID);
        saveToDatabaseSavedQuestion(userID);
      } catch (err) {
        console.log(err);
      }
    };

    const saveToDatabaseSavedQuestion = async (userID) => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/all-saved-questions/${userID}`
        );
        const data = await response.data;
        setSavedQuestion(data?.data?.saved_questions);
      } catch (err) {
        console.log(err.message);
      }
    };

    handleAllSavedQuestions();
  }, [user]);

  return (
    <section className="border-2 border-[#EEE]  rounded-xl py-5 mt-5 mr-8 ml-8 mb-10 min-h-screen">
      {/* Saved Question Text */}
      <h1 className="text-center text-3xl font-bold mb-8">Saved Question</h1>
      {/* Saved Question section */}
      {/* <div className="px-10 lg:mt-0 md:mt-0 mt-5">
        {/* Saved Question div style */}
      {/* <div
        className="bg-gradient-to-r from-[#FC495F] to-[#FFC371] bg-size-200 
        lg:flex md:flex justify-between rounded-xl px-6 py-3 mt-2 text-white font-bold hidden"
      >
        <p className="ml-14">Topic</p>
        <p>Questions</p>
        <p className="mr-14">Saved Date</p>
      </div> */}

      {/* Saved Question Data div style */}
      {/* <div className="bg-gray-100 rounded-lg py-3 px-7 mt-4"> */}
      {/* Saved Question Data */}
      {/* <div className=" lg:flex md:flex justify-between lg:space-y-0 md:space-y-0 space-y-5">
          <p className="ml-12">Bangladesh</p>
          <p className="">Explore Questions</p>
          <p className="mr-12">31/12/2022</p>
        </div>
      </div> */}
      {/* </div> */}

      <SavedQuestionTable savedQuestion={savedQuestion} />
    </section>
  );
};

export default SavedQuestion;
