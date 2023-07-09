"use client";
import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import Output from "../Shared/Output";
import DropdownOptions from "./DropdownOptions/DropdownOptions";
import { usePathname } from "next/navigation";
import axios from "axios";
import { generatePrompt } from "@/utils/PromptGenerations";
import { toast } from "react-hot-toast";
import LoaderSpinner from "../Loader/LoaderSpinner";
import ChatLoader from "../ChatgptLoader/ChatLoader";

const Home = () => {
  const [generatedResponse, setGeneratedResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chatGptLoading, setChatGptLoading] = useState(false);

  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const format = pathParts[pathParts.length - 1];

  let prompt = "";
  if (pathname === "/generate-questions/true-false") {
    prompt = "This is True false Prompt";
  } else if (pathname === "/generate-questions/multiple-questions") {
    prompt = "This is Multiple Question Prompt";
  } else if (pathname === "/generate-questions/blanks") {
    prompt = "This is Multiple Question Prompt";
  } else if (pathname === "/generate-questions/short-answers") {
    prompt = "This is Short Answer Prompt";
  } else if (pathname === "/generate-questions/matching") {
    prompt = "This is Matching Prompt";
  } else if (pathname === "/generate-questions/calculations") {
    prompt = "This is Calculation Prompt";
  } else if (pathname === "/generate-questions/teacher-tool") {
    prompt = "This is Teacher-tool Prompt";
  } else if (pathname === "/generate-questions/teacher-tool/lesson-planer") {
    prompt = "This is Lesson planer Prompt";
  } else if (pathname === "/generate-questions/teacher-tool/project-ideas") {
    prompt = "This is Project Ideas Prompt";
  } else if (pathname === "/generate-questions/teacher-tool/group-creator") {
    prompt = "This is Group Creator Prompt";
  } else if (pathname === "/generate-questions/teacher-tool/seating-chart") {
    prompt = "This is Group Creator Prompt";
  } else if (pathname === "/generate-questions/teacher-tool/study-points") {
    prompt = "This is study Points Prompt";
  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    let questionCount;
    let level;
    if (
      format !== "lesson-planer" &&
      format !== "project-ideas" &&
      format !== "study-points"
    ) {
      questionCount = form.questionCount.value;
    }
    if (
      format === "lesson-planer" ||
      format === "project-ideas" ||
      format === "study-points"
    ) {
      level = form.level.value;
    }
    const content = form.content.value;
    const language = form.language.value;
    const difficulty = form.difficulty.value;
    const versionCount = form.versionCount.value;

    const prompt = generatePrompt({
      format,
      questionCount,
      content,
      language,
      level,
      difficulty,
    });

    const data = { prompt };

    setChatGptLoading(true); // Show the chat GPT loader

    axios
      .post("http://localhost:4000/api/v1/generate", data)
      .then((res) => {
        setGeneratedResponse(res.data.data);
        setLoading(false);
        setChatGptLoading(false); // Hide the chat GPT loader
        toast.success("Generate successful");
      })
      .catch((err) => {
        setLoading(false);
        setChatGptLoading(false); // Hide the chat GPT loader
        toast.error("Error generating response");
      });
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const languageOptions = [
    "English",
    "Chinese",
    "Danish",
    "Arabic",
    "French",
    "German",
    "Hebrew",
    "Hindi",
    "Indonesian",
    "Italian",
    "Japanese",
    "Polish",
    "Romanian",
    "Russian",
    "Spanish",
    "Swedish",
    "Turkish",
    "Vietnamese",
    "Bangla",
  ];
  const levelOptions = ["Beginner", "Medium", "Advance", "Hard"];
  const difficultyOptions = ["Easy", "Average", "Above Average", "Difficult"];
  const numberOfVersions = [1, 2, 3];

  return (
    <div className="mx-8">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-16 mt-10">
        <form onSubmit={handleSubmit}>
          <div>
            {format !== "lesson-planer" &&
              format !== "project-ideas" &&
              format !== "study-points" && (
                <DropdownOptions
                  label="How Many Questions?"
                  name="questionCount"
                  options={options}
                />
              )}
            <div className="flex flex-col mb-4">
              {format === "project-ideas" ||
              format === "study-points" ||
              format === "lesson-planer" ? (
                <label className="text-sm">Topic Name?</label>
              ) : (
                <label className="text-sm">Paste Your Text?</label>
              )}
              <textarea
                className="px-6 py-2 rounded-2xl border-2 border-[#eee] mt-3"
                rows={7}
                name="content"
                required
              ></textarea>
            </div>
            {format === "lesson-planer" ||
            format === "project-ideas" ||
            format === "study-points" ? (
              <DropdownOptions
                label="Level?"
                name="level"
                options={levelOptions}
              />
            ) : null}
            <DropdownOptions
              label="Language?"
              name="language"
              options={languageOptions}
            />
            <DropdownOptions
              label="Difficulty?"
              name="difficulty"
              options={difficultyOptions}
            />
            <DropdownOptions
              label="Number Of Versions?"
              name="versionCount"
              options={numberOfVersions}
            />
            {loading ? (
              <PrimaryButton loading={loading} className="mb-3">
                <LoaderSpinner /> Generating Question
              </PrimaryButton>
            ) : (
              <PrimaryButton className="mb-3">Generate Output</PrimaryButton>
            )}
          </div>
        </form>
        <div className="rounded-lg">
          <Output
            generatedResponse={generatedResponse}
            chatGptLoading={chatGptLoading}
          />
           {/* Show the ChatGpt loader */}
        </div>
      </div>
    </div>
  );
};

export default Home;
