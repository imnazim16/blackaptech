import React from 'react'
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-gray-900 py-25">
            <div className="wrapper">
                <h3 className={"text-6xl font-semibold"}>
                    Ready to start your next project? {" "}
                    <Link className={"relative inline-block group text-gray-50"} href={"/start-your-project"}>
                        Talk to us
                        <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-red-500 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                    </Link>
                </h3>
                <ul className={"flex flex-wrap gap-15 pt-25 pb-25"}>
                    <li><Link className={"relative inline-block group"} href="/what-we-do">
                        What We Do
                        <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                    </Link></li>
                    <li><Link className={"relative inline-block group"} href="/projects">
                        Projects
                        <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                    </Link></li>
                    <li><Link className={"relative inline-block group"} href="#">
                        Journal
                        <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                    </Link></li>
                    <li><Link className={"relative inline-block group"} href="/about-us">
                        About
                        <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                    </Link></li>
                    <li><Link className={"relative inline-block group"} href="/work-with-us">
                        Work With Us
                        <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                    </Link></li>
                    <li><Link className={"relative inline-block group"} href="/start-your-project">
                        Contact
                        <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-50 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                    </Link></li>
                </ul>

                <div className={"flex flex-wrap gap-10"}>
                    <div className={"text-[16px] text-slate-500"}>© Copyright {new Date().getFullYear()} Somerville</div>
                    <ul className={"flex flex-wrap gap-8 text-[16px]"}>
                        <li><Link className={"text-slate-500 relative inline-block group"} href="#">
                            Terms & Conditions
                            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-slate-500 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                        </Link></li>
                        <li><Link className={"text-slate-500 relative inline-block group"} href="#">
                            Privacy Policy
                            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-slate-500 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                        </Link></li>
                        <li><Link className={"text-slate-500 relative inline-block group"} href="#">
                            Manage Cookies
                            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-slate-500 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                        </Link></li>
                        <li><Link className={"text-slate-500 relative inline-block group"} href="#">
                            Website by Eyekiller
                            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-slate-500 transition-all duration-300 group-hover:scale-1 group-hover:opacity-0"></span>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
