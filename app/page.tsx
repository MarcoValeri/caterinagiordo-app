import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import yogaPlaceholder from "./assets/images/yoga-placeholder-one.jpg";

const HomePage = () => {
    return (
        <>
            <Header
                showHero={true}
                heroImage={yogaPlaceholder}
                headline = "Find Your Balance"
                subtitle = "Yoga classes in London with Caterina Giordo"
                ctaText = "Book a Class"
                ctaHref = "/book"
            />
            <main>
                <h2>Main</h2>
            </main>
            <Footer />
        </>
    )
}

export default HomePage;