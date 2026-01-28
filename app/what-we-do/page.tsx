import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

function WhatWeDo() {
    return (
        <div className={"wrapper py-25"}>
            <div className={"text-center"}>
                <h2 className={"text-6xl font-bold leading-[4.5rem] pb-4"}>
                    Expertly Crafted Interiors. <br/>Precision Joinery. Sustainable <br/>Solutions.
                </h2>
                <p className={"pb-25"}>
                    Design-led fit-out and joinery solutions for office, retail, hospitality, and luxury residential spaces, <br/>
                    built to enhance how people work, live and connect.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-10 pb-20">
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
                        <div className="text-2xl font-semibold pb-4">Joinery <br/>Manufacturing</div>
                        <p>Bespoke furniture for commercial offices, retail stores, hospitality venues and luxury residences.</p>
                        <Link className={"rounded-full bg-gray-50 text-black w-[50px] h-[50px] inline-block absolute -top-5 right-8 hover:bg-gray-950 hover:text-white"} href={"/"}>
                            <FiPlus className={"absolute  text-xl top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 "} />
                        </Link>
                    </div>
                </div>
                <div className="bgBox relative overflow-hidden rounded-2xl">
                    <Image className={"object-cover h-[600px] w-full"} src={"/ui-ux-representations-with-laptop.jpg"} alt="Representation" width={256} height={256} />
                    <div className={"z-11 px-10 absolute bottom-10 left-0 w-full"}>
                        <div className="text-2xl font-semibold pb-4">Retail Fixture <br/>Refurbishment</div>
                        <p>Specialist refurbishment and reactive repair services that extend fixture lifespan and reduce waste.</p>
                        <Link className={"rounded-full bg-gray-50 text-black w-[50px] h-[50px] inline-block absolute -top-5 right-8 hover:bg-gray-950 hover:text-white"} href={"/"}>
                            <FiPlus className={"absolute  text-xl top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 "} />
                        </Link>
                    </div>
                </div>
                <div className="bgBox relative overflow-hidden rounded-2xl">
                    <Image className={"object-cover h-[600px] w-full"} src={"/ui-ux-representations-with-laptop.jpg"} alt="Representation" width={256} height={256} />
                    <div className={"z-11 px-10 absolute bottom-10 left-0 w-full"}>
                        <div className="text-2xl font-semibold pb-4">Commercial <br/>Environmental <br/>Solutions</div>
                        <p>Sustainable fit-outs and circular strategies that support your ESG goals.</p>
                        <Link className={"rounded-full bg-gray-50 text-black w-[50px] h-[50px] inline-block absolute -top-5 right-8 hover:bg-gray-950 hover:text-white"} href={"/"}>
                            <FiPlus className={"absolute  text-xl top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 "} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
                <h2 className={"text-6xl font-bold"}>Exceptional spaces, <br/>expertly crafted</h2>
                <div>
                    <p className={"pb-6"}>At Somerville, we collaborate with architects, designers, project managers, surveyors, contractors,
                        and business owners to deliver interiors that are as practical as they are beautiful.
                        With over 50 years of joinery manufacturing experience, we produce bespoke furniture and precision-fit
                        interiors for offices, hotels, retail environments, and luxury homes, combining craftsmanship
                        with efficiency.
                    </p>
                    <p className={"pb-6"}>Our full-service approach covers bespoke joinery design and production, architectural detailing and
                        finishes, and complete interior fit-out and installation. We manage technical integration with lighting,
                        M&E, and HVAC systems, and offer ongoing maintenance and refurbishment to protect and extend
                        the life of every space.
                    </p>
                    <p className={"pb-6"}>Operating from our state-of-the-art manufacturing facility in Belfast, we deliver enhanced production
                        capacity, quality control, and cost-efficiency, ensuring speed, consistency, and value
                        at every stage.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
