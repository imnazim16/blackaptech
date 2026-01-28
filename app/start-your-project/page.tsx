import React from 'react'

function StartYourProject() {
    return (
        <div className={"wrapper py-25"}>
            <div className={"text-center"}>
                <h2 className={"text-6xl font-bold pb-2"}>
                    {"We'd"} love to hear from you
                </h2>
                <p className={"py-2"}>
                    We contribute to beautiful, stylish spaces for clients all over the world. We’d love to help <br/>create yours.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-10 pb-20 pt-20">
                <div>
                    <h3 className={"text-4xl font-semibold pb-8"}>Reach out and bring your <br/>vision to life.</h3>
                    <p className={"pb-8"}>We’re located in Dundonald, just outside Belfast, giving us great access across Northern Ireland and
                        beyond.</p>
                    <div className="grid grid-cols-2 gap-10 pb-25">
                        <div>
                            <div className="text-2xl">Give us a call</div>
                            <a className={"border-b-2"} href="tel:+91 8130505609">+91 8130505609</a>
                        </div>
                        <div>
                            <div className="text-2xl">Send us an email</div>
                            <a className={"border-b-2"} href="mailto:info@vibbevital.com">info@vibbevital.com</a>
                        </div>
                    </div>
                </div>

                <div className={"bg-gray-800 py-16 px-10 rounded-4xl"}>
                    <form action="">
                        <h3 className={"text-3xl pb-6 font-semibold"}>Get in touch</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className={"grid grid-cols-1"}>
                                <label htmlFor="firstname" className={"text-[16px] pb-2"}>First Name</label>
                                <input
                                    className={"bg-gray-700 border-1 border-gray-600 h-9 text-[16px] px-2 focus:outline-0 rounded"}
                                    id={"firstname"} type="text"/>
                            </div>
                            <div className={"grid grid-cols-1"}>
                                <label htmlFor="lastname" className={"text-[16px] pb-2"}>Last Name</label>
                                <input className={"bg-gray-700 border-1 border-gray-600 h-9 text-[16px] px-2 focus:outline-0 rounded"} id={"lastname"} type="text"/>
                            </div>
                            <div className={"grid grid-cols-1"}>
                                <label htmlFor="phone" className={"text-[16px] pb-2"}>Phone Number</label>
                                <input className={"bg-gray-700 border-1 border-gray-600 h-9 text-[16px] px-2 focus:outline-0 rounded"} id={"phone"} type="text"/>
                            </div>
                            <div className={"grid grid-cols-1"}>
                                <label htmlFor="email" className={"text-[16px] pb-2"}>Email</label>
                                <input className={"bg-gray-700 border-1 border-gray-600 h-9 text-[16px] px-2 focus:outline-0 rounded"} id={"email"} type="text"/>
                            </div>
                            <div className={"grid grid-cols-1 col-span-2"}>
                                <label htmlFor="enquiry-type" className={"text-[16px] pb-2"}>Enquiry Type</label>
                                <select name="" id="enquiry-type" className={"bg-gray-700 border-1 border-gray-600 h-9 text-[16px] px-2 focus:outline-0 rounded"}>
                                    <option value="">Please Select</option>
                                    <option value="General Enquiry">General Enquiry</option>
                                    <option value="Joinery Manufacturing Project">Joinery Manufacturing Project</option>
                                    <option value="Fit-Out Project">Fit-Out Project</option>
                                    <option value="Retail Fixture Maintenance">Retail Fixture Maintenance</option>
                                    <option value="Commercial Environmental Solutions">Commercial Environmental Solutions</option>
                                    <option value="Job Opportunities">Job Opportunities</option>
                                </select>
                            </div>
                            <div className={"grid grid-cols-1 col-span-2"}>
                                <label htmlFor="message" className={"text-[16px] pb-2"}>Message</label>
                                <textarea className={"bg-gray-700 border-1 border-gray-600 h-20 py-2 text-[16px] px-2 focus:outline-0 rounded resize-none"} name="" id="message"></textarea>
                            </div>
                            <div className={"grid grid-cols-1 col-span-2"}>
                                <div className={"flex flex-row gap-4"}>
                                    <input className={"h-10 w-5"} id={"subscribe"} type="checkbox" />
                                    <label htmlFor="subscribe" className={"text-[16px]"}>
                                        Subscribe for the latest news and updates from Somerville Fit-Out. Unsubscribe anytime.
                                    </label>
                                </div>
                            </div>
                            <div className={"grid grid-cols-1 col-span-2 text-[14px]"}>
                                By submitting this form I accept the Privacy Policy of this site.
                            </div>
                            <button
                                className={"bg-gray-950 rounded-full py-2 px-3 w-2/3 cursor-pointer disabled:bg-gray-900 disabled:cursor-not-allowed"}
                                disabled={true}
                                type={"submit"}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default StartYourProject
