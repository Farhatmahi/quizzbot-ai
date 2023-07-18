"use client";
import { IoDocumentsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "@/context/AuthProvider";

const SavedQuestionTable = ({ loading, savedQuestion }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [saveModalQuestion, setSaveModalQuestion] = useState({});

  const openModal = (question) => {
    setModalOpen(true);
    setSaveModalQuestion(question);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = async (id) => {
    const response = await axios.post(
      "http://localhost:4000/api/v1/users/get-user",
      { email }
    );

    const data = await response.data;
    const userId = {
      userId: data?.data?._id,
    };

    try {
      const response = await axios.delete(
        `http://localhost:4000/api/v1/all-saved-questions/${id}`,
        { data: userId }
      );
      const data = await response.data;

      toast.success(data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="px-6 mx-auto mt-16">
      <div className="flex items-center gap-x-3 mx-8">
        <h2 className="text-xl font-medium text-gray-800 ">All Documents</h2>

        <IoDocumentsOutline className="text-[#FC495F]" />
      </div>

      <div className="flex flex-col mt-6 mx-4">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border-2 border-[#eee]  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gradient-to-r from-[#FC495F] to-[#FFC371] bg-size-200  ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-white
                         "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Document</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-white "
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Content</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-white "
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Date</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-white "
                    >
                      Action
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200  ">
                  {savedQuestion?.map((question) => (
                    <tr>
                      <td className="px-4 py-4 text-sm text-gray-900  whitespace-nowrap">
                        {question?.title}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <p className="ml-8">
                          <button onClick={() => openModal(question)}>
                            {question?.paste_text.slice(0, 40) + "..."}
                          </button>
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          {question?.createdAt}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <Link href="/saved-questions/1">
                            <button
                              //   onClick={handleClick}
                              className="text-[#f9a544] transition-colors 
                          duration-200  focus:outline-none mt-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(question?._id)}
                            className="text-[#FC495F] transition-colors  duration-200
                            focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal details here */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50  ">
          <div className="modal-overlay fixed inset-0 bg-gray-500 opacity-75"></div>
          <div
            className="modal-container bg-white w-1/2 h-3/4 mx-auto rounded-2xl shadow-lg
                               z-50 overflow-y-auto"
          >
            <div className="modal-content py-6  text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <h3 className="text-2xl font-bold mt-3">
                  {saveModalQuestion?.title}
                </h3>

                <button
                  className="modal-close  w-10 h-10 font-bold cursor-pointer"
                  onClick={closeModal}
                >
                  <ImCross className="w-4 h-4 text-red-700" />
                </button>
              </div>
              <div>{saveModalQuestion?.generatedText}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SavedQuestionTable;
