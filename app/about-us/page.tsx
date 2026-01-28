import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDeploymentUnit, AiOutlineCalendar, AiOutlineDashboard  } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { BsHeartPulse } from "react-icons/bs";
import { GiThrownCharcoal } from "react-icons/gi";
import { GiPiggyBank } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { MdPedalBike } from "react-icons/md";

function AboutUs() {
    return (
        <div className={"wrapper py-25"}>
            <div className={"text-center"}>
                <h2 className={"text-6xl font-bold leading-[4rem] pb-4"}>
                    A heritage built on hard <br/>work and integrity.
                </h2>
                <p className={"pb-20"}>
                    We all work together to produce beautiful spaces for our clients.
                </p>
            </div>
            <div className={"pb-20"}>
                <Image className={"object-cover h-[700px] w-full rounded-2xl"} src={"/about-us-edge-bander-image.jpg"} alt={"work with us"} width={256} height={256} />
            </div>
            <div className="grid grid-cols-2 gap-10 pb-35 pt-25">
                <h2 className={"text-4xl font-semibold"}>
                    Crafting beautiful furniture <br/>and interior workspaces for <br/>over 50 years.
                </h2>
                <div>
                    <p>Somerville was founded in 1970 and has been delivering specialist joinery and
                        fit-out projects across both Northern and Southern Ireland. Over the past 50 years, the company
                        has experienced significant growth, and in the last decade, it has been owned and
                        managed by Stephen Somerville.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-12 auto-rows-[200px] gap-6 pb-25">
                {/* Left Big */}
                <div className="col-span-4 row-span-2">
                    <Image
                        className="h-full w-full object-cover rounded-2xl"
                        src="/masonry-image-1-2.jpg"
                        alt=""
                        width={"250"}
                        height={"250"}
                    />
                </div>

                {/* Middle Top */}
                <div className="col-span-4 row-span-1">
                    <Image
                        className="h-full w-full object-cover rounded-2xl"
                        src="/work-with-us-grid-1.jpg"
                        alt=""
                        width={"250"}
                        height={"250"}
                    />
                </div>

                {/* Right Tall */}
                <div className="col-span-4 row-span-2">
                    <Image
                        className="h-full w-full object-cover rounded-2xl"
                        src="/work-with-us-grod-pic-2.jpg"
                        alt=""
                        width={"250"}
                        height={"250"}
                    />
                </div>

                {/* Middle Bottom */}
                <div className="col-span-4 row-span-1">
                    <Image
                        className="h-full w-full object-cover rounded-2xl"
                        src="/work-with-us-sprayshop-4.jpg"
                        alt=""
                        width={"250"}
                        height={"250"}
                    />
                </div>

                {/* Bottom Left */}
                <div className="col-span-6 row-span-2">
                    <Image
                        className="h-full w-full object-cover rounded-2xl"
                        src="/work-with-us-grid-3.jpg"
                        alt=""
                        width={"250"}
                        height={"250"}
                    />
                </div>

                {/* Bottom Right */}
                <div className="col-span-6 row-span-2">
                    <Image
                        className="h-full w-full object-cover rounded-2xl"
                        src="/masonry-image-small-1.jpg"
                        alt=""
                        width={"250"}
                        height={"250"}
                    />
                </div>
            </div>

            <div className={"bg-gray-50 py-20 px-20 text-black rounded-3xl"}>
                <div className={"grid grid-cols-2 gap-10 pb-20"}>
                    <h3 className={"text-4xl font-semibold"}>Enjoy the perks of being <br/>part of Somerville</h3>
                    <div>
                        <p>We love taking care of our team! And as a valued member of Somerville, you will have
                            access to a range of fantastic benefits designed to support your wellbeing, growth
                            and work-life balance. Here are some of the perks you can look forward to:
                        </p>
                        <Link
                            className={"rounded-4xl px-6 pt-2 pb-3 inline-block mt-4 bg-gray-600 text-white hover:bg-gray-950"}
                            href={"/start-your-project"}>Start Your Project</Link>
                    </div>
                </div>

                <div className={"grid grid-cols-3 gap-8"}>
                    <div className={"flex flex-row gap-2 border-t border-t-gray-300 pt-10"}>
                        <AiOutlineDeploymentUnit className={"w-full text-[40px] text-gray-900"} />
                        <div>
                            <h3 className={"text-2xl font-semibold pb-4"}>Flexible Working Opportunities</h3>
                            <p className={"text-[18px]"}>We support work-life balance through flexible working arrangements. Factory teams benefit
                                from a condensed four-day working week, while office staff enjoy a generous flexible
                                system designed to accommodate individual needs, including parents and caregivers.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row gap-2 border-t border-t-gray-300 pt-10"}>
                        <AiOutlineCalendar className={"w-full text-[40px] text-gray-900"} />
                        <div>
                            <h3 className={"text-2xl font-semibold pb-4"}>Flexible Annual Leave</h3>
                            <p className={"text-[18px]"}>
                                We provide generous paid annual leave with minimal fixed holidays, giving you greater
                                flexibility to plan your time off, ensuring you can balance work and personal commitments
                                and give you more control over your time.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row gap-2 border-t border-t-gray-300 pt-10"}>
                        <AiOutlineDashboard  className={"w-full text-[40px] text-gray-900"} />
                        <div>
                            <h3 className={"text-2xl font-semibold pb-4"}>Mental Health Support</h3>
                            <p className={"text-[18px]"}>As a Company Supporter of the Lighthouse Charity, we give our team
                                access to 24/7 support. This service is dedicated to the emotional, physical, and
                                financial wellbeing of construction workers and their families whenever needed.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row gap-2 border-t border-t-gray-300 pt-10"}>
                        <FaUserDoctor className={"w-full text-[40px] text-gray-900"} />
                        <div>
                            <h3 className={"text-2xl font-semibold pb-4"}>Aviva Health</h3>
                            <p className={"text-[18px]"}>Employees enjoy private medical insurance through Aviva,
                                offering quick access to high-quality healthcare. This ensures you can receive prompt
                                treatment, peace of mind, and the reassurance that your health and well-being are
                                always prioritised.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row gap-2 border-t border-t-gray-300 pt-10"}>
                        <BsHeartPulse className={"w-full text-[40px] text-gray-900"} />
                        <div>
                            <h3 className={"text-2xl font-semibold pb-4"}>BUPA Wellbeing</h3>
                            <p className={"text-[18px]"}>Our BUPA scheme allows you to reclaim costs for everyday health
                                needs, such as eye tests, dental care, and physiotherapy. This benefit helps you look
                                after your well-being while reducing the personal cost of essential treatments.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row gap-2 border-t border-t-gray-300 pt-10"}>
                        <GiThrownCharcoal className={"w-full text-[40px] text-gray-900"} />
                        <div>
                            <h3 className={"text-2xl font-semibold pb-4"}>Death in Service</h3>
                            <p className={"text-[18px]"}>In the unfortunate event of your passing, we want to ensure your
                                loved ones are cared for. Your nominated beneficiaries will receive three times your
                                annual salary, offering financial security and peace of mind for their future.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row gap-2 border-t border-t-gray-300 pt-10"}>
                        <GiPiggyBank className={"w-full text-[40px] text-gray-900"} />
                        <div>
                            <h3 className={"text-2xl font-semibold pb-4"}>Pension Scheme</h3>
                            <p className={"text-[18px]"}>All employees are automatically enrolled in our company pension
                                scheme, with contributions made by both you and the business. While you can opt out,
                                staying enrolled helps you build towards a secure and comfortable retirement.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row gap-2 border-t border-t-gray-300 pt-10"}>
                        <FaCar className={"w-full text-[40px] text-gray-900"} />
                        <div>
                            <h3 className={"text-2xl font-semibold pb-4"}>Hassle-Free Commuting</h3>
                            <p className={"text-[18px]"}>Our workplace is designed with convenience in mind. Staff benefit
                                from safe, free onsite car parking, while excellent transport links, including the
                                Dundonald Glider, ensure straightforward and reliable commuting options for everyone.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row gap-2 border-t border-t-gray-300 pt-10"}>
                        <MdPedalBike className={"w-full text-[40px] text-gray-900"} />
                        <div>
                            <h3 className={"text-2xl font-semibold pb-4"}>Bike to Work Scheme</h3>
                            <p className={"text-[18px]"}>Through our Bike to Work scheme, you can save up to 42% in tax
                                when purchasing a new bike or accessories. It's a great way to cut fuel costs, improve
                                your fitness, and reduce your carbon footprint.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"grid grid-cols-2 gap-20 items-center py-25"}>
                <div>
                    <Image className={"object-cover w-full rounded-2xl h-[600px]"} src={"/group-people-working.jpg"} alt={""} width={"250"} height={"250"}/>
                </div>
                <div>
                    <h3 className={"text-6xl pb-7 font-bold"}>A workplace where everyone belongs</h3>
                    <p className={"pb-10"}>Construction is ever evolving, and so are we. At Somerville, we are committed to fostering an
                        inclusive environment where everyone can thrive:
                    </p>
                    <ul>
                        <li className={"pb-4"}>
                            <strong>Gender Equality</strong> – breaking down barriers and supporting women from apprenticeships to
                            leadership roles.
                        </li>
                        <li className={"pb-4"}>
                            <strong>Zero Tolerance for Discrimination</strong> – regardless of age, gender, religion, ethnic origin,
                            sexual orientation, or marital status.
                        </li>
                        <li className={"pb-4"}>
                            <strong>Inclusive Opportunities</strong> – creating pathways for all through apprenticeships, training, and
                            career development.
                        </li>
                    </ul>
                </div>
            </div>

            <div className={"grid grid-cols-2 gap-20 items-center pb-25"}>
                <h3 className={"text-4xl font-bold"}>Our commitment in the <br/>community</h3>
                <p>Alongside our commercial projects, we are committed to knowledge sharing and engaging with both community and
                    educational bodies to encourage our future young people into a career in construction. Over the past 12 months,
                    we have been involved in several key projects, including:
                </p>
            </div>

            <div className="grid grid-cols-3 gap-10 pb-25">
                <div className={"flex flex-row gap-2 border-t border-t-gray-800 pt-10"}>
                    <AiOutlineDeploymentUnit className={"w-full text-[40px]"} />
                    <div>
                        <h3 className={"text-2xl font-semibold pb-4"}>Delivered business programmes to schools</h3>
                        <p className={"text-[18px]"}>Collaborating with Young Enterprise at both primary and secondary school levels.
                            Our staff have had the opportunity to deliver programmes on business topics to the pupils and mentor
                            groups through creating their own businesses.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-row gap-2 border-t border-t-gray-800 pt-10"}>
                    <AiOutlineCalendar className={"w-full text-[40px] "} />
                    <div>
                        <h3 className={"text-2xl font-semibold pb-4"}>Mentoring sixth-form girls in leadership</h3>
                        <p className={"text-[18px]"}>
                            Connecting and mentoring students through the SistersIN programme, which aims to enhance leadership
                            confidence and expand the career horizons of sixth-form girls in Northern Ireland.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-row gap-2 border-t border-t-gray-800 pt-10"}>
                    <AiOutlineDashboard  className={"w-full text-[40px]"} />
                    <div>
                        <h3 className={"text-2xl font-semibold pb-4"}>Offering hands-on apprenticeships in joinery & fit-out</h3>
                        <p className={"text-[18px]"}>Working closely with the colleges across Northern Ireland to offer Apprentice
                            Level opportunities across both workshop and site, equipping the students with an all-round
                            education that will set them up for a fulfilling career after completion.
                        </p>
                    </div>
                </div>
            </div>

            <div className={"grid grid-cols-3 gap-10 border-t border-t-gray-800 pt-20"}>
                <div className={"grid grid-cols-1 col-span-3 text-center pb-15"}>
                    <h3 className={"text-4xl font-semibold pb-4"}>What’s it like to work here?</h3>
                    <p>Discover a workplace where passion, craftsmanship, and collaboration thrive.</p>
                </div>
                <div className={"bg-gray-900 p-15 rounded-4xl shadow-2xl shadow-gray-900"}>
                    <p className={"text-center"}>
                        "Since joining Somerville as a Project Manager in early 2022, I’ve had the chance to grow, learn, and
                        explore creative ways to keep our project on track. Working alongside a talented and dedicated team has
                        been truly inspiring, and it’s been rewarding to see our collaboration translate into
                        great results for our client."
                    </p>
                    <div className={"flex flex-col gap-2 pt-20 items-center"}>
                        <Image className={"rounded-full border-4 bg-gray-50"} src={"/CA-Selected.jpg"} alt={""} width={"100"} height={"100"} />
                        <div>Christen Allen</div>
                        <div className={"flex flex-row gap-3 text-[16px]"}>
                            <span>Project Manager</span> |
                            <span>Joined 2022</span>
                        </div>
                    </div>
                </div>
                <div className={"bg-gray-900 p-15 rounded-4xl shadow-2xl shadow-gray-900"}>
                    <p className={"text-center"}>
                        "As the HR Coordinator for Somerville, I am fortunate to be in a role that allows me to develop new initiatives
                        aimed at benefiting our employees. I believe that fostering a supportive and inclusive work culture is
                        essential for helping employees thrive and reach their full potential."
                    </p>
                    <div className={"flex flex-col gap-2 pt-20 items-center"}>
                        <Image className={"rounded-full border-4 bg-gray-50"} src={"/AB-Profile-pic.jpg"} alt={""} width={"100"} height={"100"} />
                        <div>Christen Allen</div>
                        <div className={"flex flex-row gap-3 text-[16px]"}>
                            <span>HR Coordinator</span> |
                            <span>Joined 2021</span>
                        </div>
                    </div>
                </div>
                <div className={"bg-gray-900 p-15 rounded-4xl shadow-2xl shadow-gray-900"}>
                    <p className={"text-center"}>
                        "Since starting my employment in Somerville in 2009, I have grown in confidence through my extensive
                        traveling and working worldwide. The people I work with, both at home and abroad, are what make my
                        job so fulfilling and sometimes humbling, as my colleagues come from many different backgrounds and cultures."
                    </p>
                    <div className={"flex flex-col gap-2 pt-20 items-center"}>
                        <Image className={"rounded-full border-4 bg-gray-50"} src={"/paul-somerville.png"} alt={""} width={"100"} height={"100"} />
                        <div>Paul Shields</div>
                        <div className={"flex flex-row gap-3 text-[16px]"}>
                            <span>Lead Engineer</span> |
                            <span>Joined 2009</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
