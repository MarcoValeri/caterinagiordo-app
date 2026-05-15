import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ButtonLink from "../components/ButtonLink/ButtonLink"
import { HiOutlineMail } from "react-icons/hi"
import { FaInstagram } from "react-icons/fa"

const ContactPage = () => {
    return (
        <>
            <Header showHero={true} />
            <main className="flex-1">
                {/* Intro */}
                <section className="w-full py-16">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-light text-gray-800 mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Whether you have a question about classes, want to discuss
                            private sessions, or just want to say hello — I&apos;d love to
                            hear from you.
                        </p>
                    </div>
                </section>

                {/* Contact Options */}
                <section className="w-full py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Email */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center flex flex-col items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-[#E0F2F1] flex items-center justify-center">
                                    <HiOutlineMail className="text-2xl text-[#0F4C5C]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Email Me
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Drop me a message and I&apos;ll get back to you as soon
                                    as I can.
                                </p>
                                <a
                                    href="mailto:hello@caterinagiordo.com"
                                    className="text-sm font-medium text-[#0F4C5C] hover:text-[#45858C] transition-colors"
                                >
                                    hello@caterinagiordo.com
                                </a>
                            </div>

                            {/* Instagram */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center flex flex-col items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-[#E0F2F1] flex items-center justify-center">
                                    <FaInstagram className="text-2xl text-[#0F4C5C]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Follow on Instagram
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Class updates, tips, and behind-the-scenes moments.
                                </p>
                                <a
                                    href="https://instagram.com/caterinagiordo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-[#0F4C5C] hover:text-[#45858C] transition-colors"
                                >
                                    @caterinagiordo
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="w-full py-16">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-light text-gray-800 mb-4">
                            Stay Connected
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Subscribe to my newsletter for class schedules, wellness tips,
                            and exclusive offers delivered straight to your inbox.
                        </p>
                        <ButtonLink
                            href="https://mailchimp.com"
                            label="Subscribe to Newsletter"
                            isExternal={true}
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ContactPage;
