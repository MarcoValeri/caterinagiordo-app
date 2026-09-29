import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ScheduleFilter from "../components/ScheduleFilter/ScheduleFilter";
import { getClasses } from "../lib/classes";

const SchedulePage = async () => {
  const classes = await getClasses();

  return (
    <>
      <Header showHero={false} />
      <main>
        <ScheduleFilter classes={classes} />
      </main>
      <Footer />
    </>
  );
};

export default SchedulePage;
