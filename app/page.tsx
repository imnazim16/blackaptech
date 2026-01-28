import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
    return (
        <>
            <div className="banner px-8 pt-8">
                <Image className={"rounded-2xl w-full h-[600px] object-cover"} src="/ui-ux-representations-with-laptop.jpg" alt={"banner"} width={1400} height={100} />
            </div>
            <div className="wrapper pb-16">
                <section className="py-24">
                    <h2 className="heading">Interior fit-out, joinery manufacturing <br/>
                    and commercial environmental solutions</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <div className={"imageBox"}>
                            <Image src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="py-6">
                                <div className="text-2xl font-semibold py-3">Fit-Out</div>
                                <p>Creating tailored fit-out solutions for commercial offices, hospitality venues and retail spaces.</p>
                            </div>
                        </div>
                        <div className={"imageBox"}>
                            <Image src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="py-6">
                                <div className="text-2xl font-semibold py-3">Joinery Manufacturing</div>
                                <p>Providing high-quality specialist joinery for office interiors, retail stores, hospitality venues & residential spaces.</p>
                            </div>
                        </div>
                        <div className={"imageBox"}>
                            <Image src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="py-6">
                                <div className="text-2xl font-semibold py-3">Commercial Environmental Solutions</div>
                                <p>For clients prioritising commercial sustainability, we push the boundaries with closed-loop production through recycling initiatives.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-gray-900 px-12 rounded-2xl">
                    <h2 className="heading p-btm">Delivering the finest work, across the UK, <br/>Europe & beyond</h2>
                    <p>Our clients come from far and wide. They trust us to provide quality <br/>
                        craftsmanship and a reliable service.</p>
                    <Link className={"mt-5 px-6 bg-gray-50 text-black text-xl py-3 rounded-4xl inline-block"} href="/about-us">About Us</Link>
                    <div className="grid grid-cols-3 gap-8 pt-14">
                        <div>
                            <Image className={"h-2/4 rounded-2xl"} src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="pt-4">
                                <div className="text-2xl font-semibold py-3">Passionate People</div>
                                <p>We have a unique blend of people within Somerville. They show passion for their work, what they create,
                                    and how it’s delivered. Our company culture fosters dedication and brilliance among our team.</p>
                            </div>
                        </div>
                        <div>
                            <Image className={"h-2/4 rounded-2xl"} src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="pt-4">
                                <div className="text-2xl font-semibold py-3">Innovation</div>
                                <p>We have invested in new facilities, advanced machinery and technology to develop and enhance our work methods.
                                    This approach increases efficiency while maintaining exceptional quality.</p>
                            </div>
                        </div>
                        <div>
                            <Image className={"h-2/4 rounded-2xl"} src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="pt-4">
                                <div className="text-2xl font-semibold py-3">Diversity &amp; Inclusion</div>
                                <p>Diversity and inclusion are essential as we continue to grow the company.
                                    Somerville is committed to fostering a diverse, safe, and inclusive workspace for all team members.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={"py-20"}>
                    <div className="grid grid-cols-2 gap-8">
                        <h2 className="heading p-btm">Closing the loop for a greener, brighter future.</h2>
                        <div className="box-cont">
                            <p className={"pb-5"}>With a growing emphasis on corporate environmental impact, we understand the impact of our work and recognise that our clients' needs are changing.
                            </p>
                            <p className={"pb-5"}>We have designed a sustainable service for clients who prioritise their commercial impact. The process involves separating and recycling wood, metal and plastics to achieve zero waste to landfill certification.
                            </p>
                            <p className={"pb-5"}>Sustainable manufacturing makes ecological and commercial sense, so we strive to minimise waste and create efficiencies.
                            </p>
                            <Link className={"mt-5 px-6 bg-gray-50 text-black text-xl py-3 rounded-4xl inline-block"} href={"/about-us"}>Our Impact</Link>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-gray-900 px-12 rounded-2xl">
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <h3 className={"text-3xl font-semibold pb-5"}>Inspirational interior fit-outs and specialist joinery</h3>
                            <p className={"pb-5"}>Discover some of our recent projects, showcasing distinct and memorable interior spaces.</p>
                            <Link className={"mt-5 px-6 bg-gray-50 text-black text-xl py-3 rounded-4xl inline-block"} href={"/projects"}>All Product</Link>
                        </div>
                        <div>
                            <Image className={"h-70 rounded-2xl"} src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="text-2xl font-semibold py-3">Sustainably focused office fit-out forglobal professionals</div>
                            <div>EY | Bedford House, Belfast</div>
                        </div>
                        <div>
                            <Image className={"h-70 rounded-2xl"} src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="text-2xl font-semibold py-3">Industrial fit-out for global innovation consultants</div>
                            <div>PA Consulting | The Printworks, Belfast</div>
                        </div>
                        <div>
                            <Image className={"h-70 rounded-2xl"} src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="text-2xl font-semibold py-3">Inspiring and flexible office spacewith a touch of city luxury</div>
                            <div>Metro | Metro Building, Belfast</div>
                        </div>
                        <div>
                            <Image className={"h-70 rounded-2xl"} src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="text-2xl font-semibold py-3">Design & build fit-out for international consultant</div>
                            <div>Jacobs | Dublin</div>
                        </div>
                        <div>
                            <Image className={"h-70 rounded-2xl"} src="/ui-ux-representations-with-laptop.jpg" alt={"image"} width={500} height={600} />
                            <div className="text-2xl font-semibold py-3">Bespoke office joinery & fit-out for multinational tax consultants</div>
                            <div>RSM | The Ewart Building</div>
                        </div>
                    </div>
                </section>
                <section className="mt-20 bg-gray-900 px-12 rounded-2xl h-[600px] pb-4 bgBlack"
                         style={{
                             background: "url('./ui-ux-representations-with-laptop.jpg') no-repeat",
                             backgroundSize: "cover",
                         }}>
                    <div className={"h-[90%] flex flex-wrap items-baseline flex-col justify-end relative z-10"}>
                        <h3 className={"text-4xl font-semibold pb-5"}>Cutting-edge new facilities <br/>
                            enhanced with innovation and <br/>technology</h3>
                        <Link className={"mt-5 px-6 bg-gray-50 text-black text-xl py-3 rounded-4xl inline-block"} href={"/start-your-project"}>Take a Look</Link>
                    </div>
                </section>
                <section className={"pt-20"}>
                    <div className="grid grid-cols-2 gap-8 items-center">
                        <div>
                            <Image className={"w-full rounded-2xl h-[500px]"} src={"/ui-ux-representations-with-laptop.jpg"} alt={"image"} width={500} height={600} />
                        </div>
                        <div className="box-cont px-10">
                            <h2 className={"text-4xl pb-10 font-semibold"}>Crafting beautiful furniture and interiors workspaces for over 50 years.</h2>
                            <p className={"pb-5"}>
                                Somerville was founded in 1970 and has been delivering specialist joinery and fit-out projects
                                across UK and Ireland. Over the past 50 years, the company has experienced significant growth,
                                and in the last decade, it has been owned and managed by Stephen Somerville.
                            </p>
                            <Link className={"mt-5 px-6 bg-gray-50 text-black text-xl py-3 rounded-4xl inline-block"} href={"/about-us"}>Read More</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Page
