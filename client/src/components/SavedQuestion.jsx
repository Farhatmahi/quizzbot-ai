"use client";
import axios from "axios";
import SavedQuestionTable from "./SavedQuestionTable";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";

const SavedQuestion = () => {
  const [savedQuestion, setSavedQuestion] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleAllSavedQuestions = async () => {
      setLoading(true);
      try {
        const email = user?.email;
        const response = await axios.post(
          "https://ai-quizzbot-farhatmahi.vercel.app/api/v1/users/get-user",
          { email }
        );
        const data = await response.data;
        const userID = data?.data?._id;
        console.log(userID);
        saveToDatabaseSavedQuestion(userID);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    const saveToDatabaseSavedQuestion = async (userID) => {
      try {
        const response = await axios.get(
          `https://ai-quizzbot-farhatmahi.vercel.app/api/v1/all-saved-questions/${userID}`
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
      <h1 className="text-center text-3xl font-bold mb-8">Saved Question</h1>
      {/* {loading && <p>Loading!</p>} */}
      <SavedQuestionTable loading={loading} savedQuestion={savedQuestion} />
    </section>
  );
};

export default SavedQuestion;
