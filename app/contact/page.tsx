import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ButtonLink from "../components/ButtonLink/ButtonLink"
import { HiOutlineMail } from "react-icons/hi"
import { FaInstagram } from "react-icons/fa"
import { getPageContent } from "../lib/pages"

const ContactPage = async () => {
    const content = await getPageContent("contact");

    const email = content?.contactEmail || "cat@caterinagiordo.com";
    const instagram = content?.contactInstagram || "@catgiordo";
    const newsletterLink = content?.contactNewsletterLink || "https://mailchi.mp/caterinagiordo/newsletter";

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
                        <div className="prose prose-gray max-w-none">
                            {content?.contactIntro ? (
                                <div dangerouslySetInnerHTML={{ __html: content.contactIntro }} />
                            ) : (
                                <p>Whether you have a question about classes, want to discuss private sessions, or just want to say hello — I'd love to hear from you.</p>
                            )}
                        </div>
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
                                <div className="prose prose-sm prose-gray max-w-none">
                                    {content?.contactEmailDescription ? (
                                        <div dangerouslySetInnerHTML={{ __html: content.contactEmailDescription }} />
                                    ) : (
                                        <p>Drop me a message and I'll get back to you as soon as I can.</p>
                                    )}
                                </div>
                                <a
                                    href={`mailto:${email}`}
                                    className="text-sm font-medium text-[#0F4C5C] hover:text-[#45858C] transition-colors"
                                >
                                    {email}
                                </a>
                            </div>

                            {/* Instagram */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center flex flex-col items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-[#E0F2F1] flex items-center justify-center">
                                    <FaInstagram className="text-2xl text-[#0F4C5C]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Follow Me On Instagram
                                </h3>
                                <div className="prose prose-sm prose-gray max-w-none">
                                    {content?.contactInstagramDescription ? (
                                        <div dangerouslySetInnerHTML={{ __html: content.contactInstagramDescription }} />
                                    ) : (
                                        <p>Class updates, tips, and behind-the-scenes moments.</p>
                                    )}
                                </div>
                                <a
                                    href={`https://instagram.com/${instagram.replace("@", "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-[#0F4C5C] hover:text-[#45858C] transition-colors"
                                >
                                    {instagram}
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
                        <div className="prose prose-gray max-w-none mb-8">
                            {content?.contactNewsletterText ? (
                                <div dangerouslySetInnerHTML={{ __html: content.contactNewsletterText }} />
                            ) : (
                                <p>Subscribe to my newsletter for class schedules, wellness tips, and exclusive offers delivered straight to your inbox.</p>
                            )}
                        </div>
                        <ButtonLink
                            href={newsletterLink}
                            label="Subscribe to my Newsletter"
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
