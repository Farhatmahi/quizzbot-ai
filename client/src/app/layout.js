"use client";
import "./globals.css";

import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";
import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import { Varela_Round } from "next/font/google";
import Footer from "@/components/Shared/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import Options from "@/components/Options/Options";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaBars } from "react-icons/fa";

const varela_round = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});
export default function RootLayout({ children }) {
  const [open, setOpen] = useState(true);

  const pathname = usePathname();
  const excludePaths = ["/register"];
  const shouldExclude = excludePaths.some((path) => pathname === path);

  if (shouldExclude) {
    return children;
  }
  return (
    <html lang="en">
      <body className={varela_round.className}>
        <div>
          <AuthProvider>
            {pathname !== "/login" &&
            pathname !== "/sign-up" &&
            pathname !== "/about" &&
            pathname !== "/" ? (
              <>
                <div
                  className={`${
                    open
                      ? "lg:grid md:grid lg:grid-cols-5 md:grid-cols-5"
                      : null
                  } `}
                >
                  {open ? (
                    <div className="col-span-1 bg-white font-bold  px-8 py-4 sticky top-0 border-r-2 border-[#eee]">
                      <div className="w-full rounded-2xl bg-gradient-to-r from-[#FC495F] to-[#FFc371] lg:hidden md:hidden block lg:mb-0 md:mb-0 mb-5">
                        <div className="flex items-center justify-between px-4 py-2">
                          <button
                            className={`${
                              open ? "transition-all duration-700" : "ml-2"
                            } w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-700 bg-white`}
                            onClick={() => setOpen(!open)}
                          >
                            <FaBars
                              className={`text-[#FC495F] text-lg ${
                                open ? "rotate-45" : ""
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      <Sidebar></Sidebar>
                    </div>
                  ) : null}
                  <div className="col-span-4">
                    <div className="mr-8">
                      <Header open={open} setOpen={setOpen}></Header>
                      {pathname === "/generate-questions" ||
                      pathname === "/generate-questions/true-false" ||
                      pathname === "/generate-questions/multiple-questions" ||
                      pathname === "/generate-questions/short-answers" ||
                      pathname === "/generate-questions/blanks" ||
                      pathname === "/generate-questions/matching" ||
                      pathname === "/generate-questions/calculations" ||
                      pathname === "/generate-questions/teacher-tool" ||
                      pathname ===
                        "/generate-questions/teacher-tool/lesson-planner" ||
                      pathname ===
                        "/generate-questions/teacher-tool/project-ideas" ||
                      pathname ===
                        "/generate-questions/teacher-tool/study-points" ||
                      pathname ===
                        "/generate-questions/teacher-tool/group-creator" ||
                      pathname ===
                        "/generate-questions/teacher-tool/seating-chart" ? (
                        <>
                          <Options></Options>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    {children}
                  </div>
                </div>
              </>
            ) : (
              <>{children}</>
            )}
            <Footer />
            <Toaster position="bottom-center" reverseOrder={false} />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
