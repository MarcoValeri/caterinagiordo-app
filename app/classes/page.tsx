import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SectionClasses from "../components/SectionClasses/SectionClasses";
import { getClasses } from "../lib/classes";

const ClassesPage = async () => {
  const classes = await getClasses();

  return (
    <>
      <Header showHero={false} />
      <main>
        <SectionClasses classes={classes} />
      </main>
      <Footer />
    </>
  );
};

export default ClassesPage;
