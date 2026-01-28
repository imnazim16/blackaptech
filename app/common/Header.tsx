'use client'
import React, {useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const pathname = usePathname()
    useEffect(() => {
        setOpen(false)
    }, [pathname])
    console.log(pathname)
    return (
      <>
        {open && (
          <div
            className={
              "fixed z-52 h-screen flex items-center justify-center top-0 left-0 w-2/4 bg-gray-800/70 backdrop-blur-md"
            }
          >
            <div className={"absolute top-20 right-20"}>
              {open ? (
                <IoCloseSharp onClick={() => setOpen(!open)} className="menu" />
              ) : (
                <FaBars onClick={() => setOpen(!open)} className="menu" />
              )}
            </div>
            <ul
              className={
                "text-4xl flex flex-wrap flex-col gap-10 uppercase font-semibold"
              }
            >
              <li>
                <Link className={"relative inline-block group"} href="/">
                  Home
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0 ${pathname === "/" ? "scale-1 opacity-0" : ""}`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  className={"relative inline-block group"}
                  href="/what-we-do"
                >
                  What We Do
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0 ${pathname === "/what-we-do" ? "scale-1 opacity-0" : ""}`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  className={"relative inline-block group"}
                  href="/projects"
                >
                  Projects
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0 ${pathname === "/projects" ? "scale-1 opacity-0" : ""}`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  className={"relative inline-block group"}
                  href="/work-with-us"
                >
                  Work With Us
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0 ${pathname === "/work-with-us" ? "scale-1 opacity-0" : ""}`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  className={"relative inline-block group"}
                  href="/about-us"
                >
                  About
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0 ${pathname === "/about-us" ? "scale-1 opacity-0" : ""}`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  className={"relative inline-block group"}
                  href="/start-your-project"
                >
                  Contact
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0 ${pathname === "/start-your-project" ? "scale-1 opacity-0" : ""}`}
                  ></span>
                </Link>
              </li>
            </ul>
          </div>
        )}

        <header className="sticky top-0 w-full z-50 border-b-1 border-gray-700 bg-gray-900/80 backdrop-blur-md">
          <div className="max-w-[1400px] mx-auto px-4 pl-12 flex items-center justify-between h-18 relative">
            {open ? (
              <IoCloseSharp onClick={() => setOpen(!open)} className="menu" />
            ) : (
              <FaBars onClick={() => setOpen(!open)} className="menu" />
            )}

            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link
                    href="/what-we-do"
                    className={`hover:text-gray-500 ${pathname === "/what-we-do" ? "text-gray-500" : ""}`}
                  >
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className={`hover:text-gray-500 ${pathname === "/projects" ? "text-gray-500" : ""}`}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work-with-us"
                    className={`hover:text-gray-500 ${pathname === "/work-with-us" ? "text-gray-500" : ""}`}
                  >
                    Work With Us
                  </Link>
                </li>
              </ul>
            </nav>
            <Link
              href="/"
              className="text-3xl logo absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2"
            >
              Blackaptech.
            </Link>
            <div>
              <Link
                href="/start-your-project"
                className={`start-btn transition-all duration-300 ${pathname === "/start-your-project" ? "bg-gray-50 text-gray-900" : ""}`}
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header
