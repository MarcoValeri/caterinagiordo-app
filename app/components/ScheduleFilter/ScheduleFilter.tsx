"use client";

import { useMemo, useState } from "react";
import CardClass, {
  LinkType,
  ClassType,
  ScheduleType,
  scheduleTypeLabels,
} from "../CardClass/CardClass";
import { YogaClassData } from "@/app/lib/classes";

interface ScheduleFilterProps {
  classes: YogaClassData[];
}

type FilterValue = "ALL" | ScheduleType;

const filterOptions: { value: FilterValue; label: string }[] = [
  { value: "ALL", label: "All" },
  { value: "CLASS", label: "Classes" },
  { value: "COURSE", label: "Courses" },
  { value: "EVENT", label: "Events" },
  { value: "WORKSHOP", label: "Workshops" },
];

const formatDateTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const ScheduleFilter = ({ classes }: ScheduleFilterProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("ALL");

  // Only show filter buttons for types that actually appear in the data.
  const availableFilters = useMemo(() => {
    const present = new Set(
      classes.map((c) => c.scheduleType).filter(Boolean) as ScheduleType[]
    );
    return filterOptions.filter(
      (opt) => opt.value === "ALL" || present.has(opt.value as ScheduleType)
    );
  }, [classes]);

  const filteredClasses = useMemo(() => {
    if (activeFilter === "ALL") return classes;
    return classes.filter((c) => c.scheduleType === activeFilter);
  }, [classes, activeFilter]);

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-800 text-center mb-8">
          Schedule
        </h2>

        {/* Type filter */}
        {availableFilters.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {availableFilters.map((opt) => {
              const isActive = activeFilter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setActiveFilter(opt.value)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                    isActive
                      ? "text-white bg-[#0F4C5C]"
                      : "text-gray-600 bg-white border border-gray-200 hover:text-[#45858C] hover:border-[#45858C]"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}

        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((classItem) => (
              <CardClass
                key={classItem.id}
                title={classItem.title}
                description={classItem.description}
                dateTime={formatDateTime(classItem.dateTime)}
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
                scheduleType={classItem.scheduleType || undefined}
                ctaText={classItem.ctaText || undefined}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No schedules available at the moment. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
};

export { scheduleTypeLabels };
export default ScheduleFilter;
