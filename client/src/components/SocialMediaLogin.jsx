"use client";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

const SocialMediaLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();
  const handleGoogleLogin = () => {
    signInWithGoogle().then((res) => {
      const user = res.user;
      console.log(res);
      router.push("/dashboard");
    });
  };

  return (
    <button
      className="flex items-center justify-center px-4 py-2 space-x-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full"
      onClick={handleGoogleLogin}
    >
      <FcGoogle className="mr-3 text-xl" />
      <span className="text-sm font-medium text-gray-700">
        Sign In with Google
      </span>
    </button>
  );
};

export default SocialMediaLogin;
