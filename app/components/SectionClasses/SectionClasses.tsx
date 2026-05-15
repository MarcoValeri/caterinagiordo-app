import CardClass, { LinkType, ClassType } from "../CardClass/CardClass";
import ButtonLink from "../ButtonLink/ButtonLink";
import { YogaClassData } from "@/app/lib/classes";

interface SectionClassesProps {
  classes: YogaClassData[];
  showViewAll?: boolean;
}

const SectionClasses = ({ classes, showViewAll = false }: SectionClassesProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-800 text-center mb-12">
          Upcoming Classes
        </h2>
        {classes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classItem) => (
              <CardClass
                key={classItem.id}
                title={classItem.title}
                description={classItem.description}
                dateTime={classItem.dateTime}
                linkType={
                  classItem.linkType === "INTERNAL"
                    ? LinkType.Internal
                    : LinkType.External
                }
                link={classItem.link}
                address={classItem.address || undefined}
                map={classItem.map || undefined}
                type={
                  classItem.classType === "ONLINE"
                    ? ClassType.OnLine
                    : ClassType.InPerson
                }
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No classes available at the moment. Check back soon!
          </p>
        )}
        {showViewAll && classes.length > 0 && (
          <div className="mt-10 text-center">
            <ButtonLink href="/classes" label="View all classes" />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionClasses;
