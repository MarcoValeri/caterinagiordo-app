import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { getPageContent } from "../lib/pages"

const AboutPage = async () => {
    const content = await getPageContent("about");

    return (
        <>
            <Header showHero={true} />
            <main className="flex-1">
                {/* Intro Section */}
                <section className="w-full py-16">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-light text-gray-800 mb-6 text-center">
                            About Me
                        </h2>
                        <div className="prose prose-gray max-w-none">
                            {content?.aboutIntro ? (
                                <div dangerouslySetInnerHTML={{ __html: content.aboutIntro }} />
                            ) : (
                                <>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                    </p>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                {/* Philosophy / Values */}
                <section className="w-full py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-light text-gray-800 text-center mb-12">
                            My Philosophy
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E0F2F1] flex items-center justify-center">
                                    <span className="text-[#0F4C5C] text-2xl">🧘</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Balance
                                </h3>
                                <div className="prose prose-sm prose-gray max-w-none">
                                    {content?.aboutPhilosophyBalance ? (
                                        <div dangerouslySetInnerHTML={{ __html: content.aboutPhilosophyBalance }} />
                                    ) : (
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                                    )}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E0F2F1] flex items-center justify-center">
                                    <span className="text-[#0F4C5C] text-2xl">🌿</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Mindfulness
                                </h3>
                                <div className="prose prose-sm prose-gray max-w-none">
                                    {content?.aboutPhilosophyMindfulness ? (
                                        <div dangerouslySetInnerHTML={{ __html: content.aboutPhilosophyMindfulness }} />
                                    ) : (
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                    )}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E0F2F1] flex items-center justify-center">
                                    <span className="text-[#0F4C5C] text-2xl">✨</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Growth
                                </h3>
                                <div className="prose prose-sm prose-gray max-w-none">
                                    {content?.aboutPhilosophyGrowth ? (
                                        <div dangerouslySetInnerHTML={{ __html: content.aboutPhilosophyGrowth }} />
                                    ) : (
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Qualifications / Journey */}
                <section className="w-full py-16">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-light text-gray-800 text-center mb-8">
                            My Journey
                        </h2>
                        <div className="prose prose-gray max-w-none">
                            {content?.aboutJourney ? (
                                <div dangerouslySetInnerHTML={{ __html: content.aboutJourney }} />
                            ) : (
                                <>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum.
                                    </p>
                                    <p>
                                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                                        Maecenas faucibus mollis interdum. Donec ullamcorper nulla
                                        non metus auctor fringilla.
                                    </p>
                                    <p>
                                        Cras justo odio, dapibus ut facilisis in, egestas eget
                                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage;
