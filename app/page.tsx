import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SectionClasses from "./components/SectionClasses/SectionClasses";
import { getClasses } from "./lib/classes";

import yogaPlaceholder from "./assets/images/yoga-placeholder-one.jpg";

const HomePage = async () => {
  const classes = await getClasses(3);

  return (
    <>
      <Header
        showHero={true}
        heroImage={yogaPlaceholder}
        headline="Find Your Balance"
        subtitle="Yoga classes in London with Caterina Giordo"
        ctaText="Book a Class"
        ctaHref="/book"
      />
      <main>
        <SectionClasses classes={classes} showViewAll={true} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
