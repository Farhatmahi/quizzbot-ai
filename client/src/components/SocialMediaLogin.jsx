"use client";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

const SocialMediaLogin = ({ children }) => {
  const { signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();
  const handleGoogleLogin = () => {
    signInWithGoogle().then((res) => {
      const user = res.user;

      router.push("/dashboard");
    });
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
