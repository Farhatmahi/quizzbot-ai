"use client";
import React, { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import { AiOutlineFileWord, AiOutlineFileText } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";
import { ContentState, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../app/customEditorClassName.css";
import axios from "axios";
import { AuthContext } from "@/context/AuthProvider";

const DynamicEditor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

const Output = ({ generatedResponse, saveQuestion }) => {
  const [editorState, setEditorState] = useState(null);
  const [title, setTitle] = useState("");

  const { user } = useContext(AuthContext);
  const {
    questionCount,
    language,
    content,
    difficulty,
    versionCount,
    generateOutput,
  } = saveQuestion;

  useEffect(() => {
    if (generatedResponse) {
      // Convert the generated response to a ContentState
      const contentState = ContentState.createFromText(generatedResponse);

      // Set the initial editor state with the generated response
      setEditorState(EditorState.createWithContent(contentState));
    } else {
      // If no generated response is available, create an empty editor state
      setEditorState(EditorState.createEmpty());
    }
  }, [generatedResponse]);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSave = async (user) => {
    const question = {
      how_many_questions: questionCount,
      paste_text: content,
      language: language,
      difficulty: difficulty,
      number_of_sets: versionCount,
      title: title,
      generatedText: generateOutput,
    };

    const userId = user?.uid;

    axios
      .post("http://localhost:4000/api/v1/all-saved-questions/userId", {
        question,
        userId,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex flex-col mb-5">
      {/* First Row */}
      <div className="flex justify-between">
        <span className="text-lg font-bold">Generated Questions</span>
        <div className="space-x-2">
          <button
            className="px-3 py-3 text-white rounded  bg-gradient-to-b from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0"
          >
            <AiOutlineFileWord className="text-2xl" />
          </button>
          <button
            className="px-3 py-3 text-white rounded  bg-gradient-to-b from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0"
          >
            <AiOutlineFileText className="text-2xl" />
          </button>
          <button
            className="px-3 py-3 text-white rounded  bg-gradient-to-b from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0"
          >
            <MdContentCopy className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-between items-center gap-6 mt-12 mb-6">
        <div className="flex flex-col flex-grow">
          <input
            onChange={handleChange}
            type="text"
            name="saveGeneratedQuestion"
            className="px-6 py-2 w-full rounded-2xl border-2 border-[#eee]"
            placeholder="Save generated question as"
          />
        </div>
        <button
          onClick={handleSave}
          className="px-3 py-3 text-white rounded  bg-gradient-to-b from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-50"
        >
          <AiOutlineSave className="text-2xl" />
        </button>
      </div>

      {/* Third Row */}
      <div className="flex items-center mt-4">
        <DynamicEditor
          editorState={editorState}
          wrapperClassName="wrapperClassName"
          editorClassName="customEditorClassName"
          toolbarClassName="customToolbarClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};

export default Output;