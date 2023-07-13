"use client";
import { useContext, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { AuthContext } from "@/context/AuthProvider";
import LoaderSpinner from "./Loader/LoaderSpinner";
import { toast } from "react-hot-toast";

const AccountSetting = () => {
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const updateProfile = () => {
    toast.success("Your Profile has been updated Successfully!!");
  };
  return (
    <div className="">
      <section
        className="max-w-4xl p-6 lg:px-32 lg:py-16 mx-auto bg-white border border-[#e0dfdf] rounded-xl
         mt-20 mb-20"
      >
        <h2 className="text-3xl mb-10 font-semibold text-gray-700 capitalize  text-center">
          Account settings
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-10 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 text-sm" for="username">
                Avatar
              </label>
              <div className="mb-1">
                <input
                  className="relative m-0 block min-w-0 flex-auto cursor-pointer  
                  border-solid px-6 py-1 w-full rounded-2xl border-2
                 border-[#e0dfdf] mt-2   bg-clip-padding font-normal
                   leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-6 
                   file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-xl file:border-0
                     file:border-none file:bg-gradient-to-r from-[#FC495F] to-[#FFC371] file:px-4 
                     file:py-[0.26rem] file:text-white file:transition file:duration-150
                      file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]
                       hover:file:bg-neutral-200 focus:border-[#0e0e0e] focus:outline-none"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 text-sm " for="userName">
                Username
              </label>
              <input
                id="text"
                type="text"
                placeholder="#john123"
                className=" pl-4 placeholder:text-xs block  px-6 py-2 w-full rounded-2xl border-2
                 border-[#e0dfdf] mt-2 text-gray-700 bg-white"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm " for="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="pl-4 placeholder:text-xs block  px-6 py-2 w-full rounded-2xl border-2
                 border-[#e0dfdf] mt-2 text-gray-700 bg-white"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm" for="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="min 8 characters"
                className=" pl-4 placeholder:text-xs block  px-6 py-2 w-full rounded-2xl border-2
                 border-[#e0dfdf] mt-2 text-gray-700 bg-white"
              />
            </div>
          </div>
          {/* {loading ? (
            <PrimaryButton loading={loading}>
              <LoaderSpinner /> Loading
            </PrimaryButton>
          ) : (
            <PrimaryButton funq={updateProfile}>Log In</PrimaryButton>
          )} */}

          <div className="flex justify-end mt-10">
            <PrimaryButton onClick={() => updateProfile()}>
              Update Profile
            </PrimaryButton>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AccountSetting;
