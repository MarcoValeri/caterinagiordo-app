import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SectionClasses from "../components/SectionClasses/SectionClasses";

const ClassesPage = () => {
    return (
        <>
            <Header showHero={false} />
            <main>
                <SectionClasses />
            </main>
            <Footer />
        </>
    )
}

export default ClassesPage;