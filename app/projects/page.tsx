import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

function Projects() {
    return (
        <div className={"wrapper py-25"}>
            <div className={"text-center"}>
                <h2 className={"text-6xl font-bold leading-[4.5rem] pb-4"}>
                    Built in Belfast. Serving the UK, <br/>Ireland & beyond.
                </h2>
                <p className={"pb-25"}>
                    Delivering beautiful fit-out and joinery for commercial, retail, hospitality and luxury <br/>living spaces.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-10 pb-20">
                <div className="bgBox relative overflow-hidden rounded-2xl">
                    <Image className={"object-cover h-[600px] w-full"} src={"/ui-ux-representations-with-laptop.jpg"} alt="Representation" width={256} height={256} />
                    <div className={"z-11 px-10 absolute bottom-10 left-0 w-full"}>
                        <div className="text-2xl font-semibold pb-4">Fit-Out Projects</div>
                        <p>Quality fit-out solutions for commercial offices, retail spaces and hospitality venues.</p>
                        <Link className={"rounded-full bg-gray-50 text-black w-[50px] h-[50px] inline-block absolute -top-5 right-8 hover:bg-gray-950 hover:text-white"} href={"/"}>
                            <FiPlus className={"absolute  text-xl top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 "} />
                        </Link>
                    </div>
                </div>
                <div className="bgBox relative overflow-hidden rounded-2xl">
                    <Image className={"object-cover h-[600px] w-full"} src={"/ui-ux-representations-with-laptop.jpg"} alt="Representation" width={256} height={256} />
                    <div className={"z-11 px-10 absolute bottom-10 left-0 w-full"}>
                        <div className="text-2xl font-semibold pb-4">Joinery Manufacturing Projects</div>
                        <p>Bespoke joinery for commercial offices, retail stores, hospitality venues and luxury residences.</p>
                        <Link className={"rounded-full bg-gray-50 text-black w-[50px] h-[50px] inline-block absolute -top-5 right-8 hover:bg-gray-950 hover:text-white"} href={"/"}>
                            <FiPlus className={"absolute  text-xl top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 "} />
                        </Link>
                    </div>
                </div>
                <div className="bgBox relative overflow-hidden rounded-2xl">
                    <Image className={"object-cover h-[600px] w-full"} src={"/ui-ux-representations-with-laptop.jpg"} alt="Representation" width={256} height={256} />
                    <div className={"z-11 px-10 absolute bottom-10 left-0 w-full"}>
                        <div className="text-2xl font-semibold pb-4">Fit-Out</div>
                        <p>Quality fit-out solutions for commercial offices, retail spaces and hospitality venues.</p>
                        <Link className={"rounded-full bg-gray-50 text-black w-[50px] h-[50px] inline-block absolute -top-5 right-8 hover:bg-gray-950 hover:text-white"} href={"/"}>
                            <FiPlus className={"absolute  text-xl top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 "} />
                        </Link>
                    </div>
                </div>
                <div className="bgBox relative overflow-hidden rounded-2xl">
                    <Image className={"object-cover h-[600px] w-full"} src={"/ui-ux-representations-with-laptop.jpg"} alt="Representation" width={256} height={256} />
                    <div className={"z-11 px-10 absolute bottom-10 left-0 w-full"}>
                        <div className="text-2xl font-semibold pb-4">Fit-Out</div>
                        <p>Quality fit-out solutions for commercial offices, retail spaces and hospitality venues.</p>
                        <Link className={"rounded-full bg-gray-50 text-black w-[50px] h-[50px] inline-block absolute -top-5 right-8 hover:bg-gray-950 hover:text-white"} href={"/"}>
                            <FiPlus className={"absolute  text-xl top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 "} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
                <h2 className={"text-6xl font-bold"}>Our capability and <br/>experience offer a local <br/>focus with global reach</h2>
                <div>
                    <p className={"pb-6"}>With a skilled team of creatives, craftspeople, and project managers,
                        Somerville delivers full-service interior fit-out and bespoke joinery solutions across the UK,
                        Ireland, and beyond. From concept to completion, we transform ideas into impactful,
                        high-performing spaces,  blending creativity with precision and practicality.
                    </p>
                    <p className={"pb-6"}>Our experience spans commercial offices, luxury hotels, hospitality venues,
                        flagship retail stores, and high-end residential interiors, each tailored to meet
                        unique operational, aesthetic, and brand goals. From large-scale fit-outs to one-of-a-kind
                        furniture and architectural joinery, our work balances function, form, and lasting quality.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects
