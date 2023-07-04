"use client";
import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import Output from "../Shared/Output";

import DropdownOptions from "./DropdownOptions/DropdownOptions";
import { usePathname } from "next/navigation";
import axios from "axios";

const Home = () => {
  const [generatedResponse, setGeneratedResponse] = useState(null);

  const pathname = usePathname();
  const pathParts = pathname.split("/"); // Split the pathname by '/'
  const format = pathParts[pathParts.length - 1];

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
    e.preventDefault();
    const form = e.target;
    const questionCount = form.questionCount.value;
    const content = form.content.value;
    const language = form.language.value;
    const difficulty = form.difficulty.value;
    const versionCount = form.versionCount.value;

    const prompt = `Give me ${questionCount} questions in ${difficulty} difficulty and ${language} language in ${format} format from the below text wrapped with """ : 

"""${content}"""

The response will be like this

1. {Question will be here}, True/False
2. {Question will be here}, True/False
3. {Question will be here}, True/False
... So on   

Answer : 
1. True
2. False
... So on`;

    const data = { prompt };

    axios
      .post("http://localhost:4000/api/v1/generate", data)
      .then((res) => {
        console.log(res.data.data);
        setGeneratedResponse(res.data.data);
      })
      .catch((err) => console.log(err.message));

    form.reset();
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
  ];
  const difficulty = ["Easy", "Average", "Above Average", "Difficult"];
  const numberOfVersions = [1, 2, 3];
  return (
    <div className="mr-8">
      <div className="grid md:grid-cols-3 gap-16 mt-10">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="col-span-1">
            <DropdownOptions
              label="How Many Question?"
              name="questionCount"
              options={options}
            ></DropdownOptions>
            {/* <TextInput label="How Many Question?" name="questionCount" /> */}
            <div className="flex flex-col mb-4">
              <label htmlFor="" className=" text-sm">
                Paste Your Text?
              </label>
              <textarea
                className="px-6 py-2 rounded-2xl border-2 border-[#eee] mt-3"
                rows={7}
                name="content"
                required
              ></textarea>
            </div>
            <DropdownOptions
              label="Language ?"
              name="language"
              options={languageOptions}
            ></DropdownOptions>
            <DropdownOptions
              label="Difficulty?"
              name="difficulty"
              options={difficulty}
            ></DropdownOptions>
            <DropdownOptions
              label="Number Of Versions?"
              name="versionCount"
              options={numberOfVersions}
            ></DropdownOptions>
            <PrimaryButton classNamemb="mb-3">Generate Output</PrimaryButton>
          </div>
        </form>
        <div className="rounded-lg mr-8 col-span-2">
          <Output generatedResponse={generatedResponse} />
        </div>
      </div>
    </div>
  );
};

export default Home;
