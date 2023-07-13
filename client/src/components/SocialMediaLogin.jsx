"use client";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const SocialMediaLogin = ({ children }) => {
  const { signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();
  const handleGoogleLogin = () => {
    signInWithGoogle().then((res) => {
      const userData = res.user;

      saveToDatabaseUser(userData);

      router.push("/dashboard");
    });
  };

  const saveToDatabaseUser = async (userData) => {
    const user = {
      email: userData?.email,
      password: "",
      avatar: userData?.photoURL,
      membership: "",
      transaction: "sth23yhaqeghvc",
    };

    try {
      const response = await axios.post(
        "https://ai-quizzbot-farhatmahi.vercel.app/api/v1/users/create-user",
        { user }
      );
      const data = response.data;
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full">
      <button
        className=" lg:mb-6 flex justify-center  items-center border-2 border-[#eee] text-[#000000] px-16 py-2 mb-2  w-full rounded-2xl"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="mr-3 text-xl" />
        {children}
      </button>
    </div>
  );
};

export default SocialMediaLogin;
