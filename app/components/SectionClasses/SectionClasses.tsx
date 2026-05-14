import CardClass, { LinkType, ClassType } from "../CardClass/CardClass";
import ButtonLink from "../ButtonLink/ButtonLink";

const fakeClasses = [
  {
    title: "Morning Vinyasa Flow",
    description: "Start your day with an energising vinyasa sequence. Suitable for all levels.",
    dateTime: "Monday, 7:00 AM – 8:00 AM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "The Yoga Space, 12 Camden Road, London NW1",
    map: "https://maps.google.com",
  },
  {
    title: "Gentle Hatha Yoga",
    description: "A slow-paced class focusing on breath and alignment. Perfect for beginners.",
    dateTime: "Monday, 10:00 AM – 11:00 AM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.OnLine,
  },
  {
    title: "Lunchtime Stretch",
    description: "A quick 45-minute session to release tension from desk work.",
    dateTime: "Tuesday, 12:30 PM – 1:15 PM",
    linkType: LinkType.External,
    link: "https://booking.example.com",
    type: ClassType.OnLine,
  },
  {
    title: "Power Yoga",
    description: "Build strength and stamina with this dynamic, challenging flow.",
    dateTime: "Tuesday, 6:30 PM – 7:45 PM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "Southbank Yoga Studio, London SE1",
    map: "https://maps.google.com",
  },
  {
    title: "Yin Yoga & Meditation",
    description: "Deep stretches held for longer, followed by a guided meditation.",
    dateTime: "Wednesday, 7:30 AM – 8:45 AM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "Calm Studio, 5 Brick Lane, London E1",
    map: "https://maps.google.com",
  },
  {
    title: "Prenatal Yoga",
    description: "Gentle movements and breathing techniques designed for expectant mothers.",
    dateTime: "Wednesday, 10:30 AM – 11:30 AM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "The Yoga Space, 12 Camden Road, London NW1",
    map: "https://maps.google.com",
  },
  {
    title: "Restorative Yoga",
    description: "Fully supported poses to calm the nervous system and promote deep rest.",
    dateTime: "Wednesday, 7:00 PM – 8:15 PM",
    linkType: LinkType.External,
    link: "https://booking.example.com",
    type: ClassType.OnLine,
  },
  {
    title: "Ashtanga Primary Series",
    description: "Traditional Ashtanga sequence. Some yoga experience recommended.",
    dateTime: "Thursday, 6:30 AM – 8:00 AM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "Southbank Yoga Studio, London SE1",
    map: "https://maps.google.com",
  },
  {
    title: "Chair Yoga",
    description: "Accessible yoga using a chair for support. Great for limited mobility.",
    dateTime: "Thursday, 11:00 AM – 12:00 PM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.OnLine,
  },
  {
    title: "Evening Wind Down",
    description: "Slow, calming sequences to release the day and prepare for restful sleep.",
    dateTime: "Thursday, 8:00 PM – 9:00 PM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.OnLine,
  },
  {
    title: "Yoga for Runners",
    description: "Targeted stretches for hips, hamstrings, and IT band. All levels welcome.",
    dateTime: "Friday, 7:00 AM – 8:00 AM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "Regent's Park Pavilion, London NW1",
    map: "https://maps.google.com",
  },
  {
    title: "Core & Balance Flow",
    description: "Strengthen your core and improve balance through creative sequencing.",
    dateTime: "Friday, 12:00 PM – 1:00 PM",
    linkType: LinkType.External,
    link: "https://booking.example.com",
    type: ClassType.OnLine,
  },
  {
    title: "Candlelit Yin",
    description: "A soothing yin practice in soft candlelight. Deeply relaxing.",
    dateTime: "Friday, 7:30 PM – 8:45 PM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "Calm Studio, 5 Brick Lane, London E1",
    map: "https://maps.google.com",
  },
  {
    title: "Saturday Morning Flow",
    description: "A feel-good weekend flow to wake up the body and set intentions.",
    dateTime: "Saturday, 9:00 AM – 10:15 AM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "The Yoga Space, 12 Camden Road, London NW1",
    map: "https://maps.google.com",
  },
  {
    title: "Yoga Nidra",
    description: "Guided yogic sleep practice. Lie down, close your eyes, and let go.",
    dateTime: "Saturday, 11:00 AM – 12:00 PM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.OnLine,
  },
  {
    title: "Partner Yoga Workshop",
    description: "A fun, playful workshop for pairs. No experience needed.",
    dateTime: "Saturday, 2:00 PM – 4:00 PM",
    linkType: LinkType.External,
    link: "https://booking.example.com",
    type: ClassType.InPerson,
    address: "Southbank Yoga Studio, London SE1",
    map: "https://maps.google.com",
  },
  {
    title: "Sunday Slow Flow",
    description: "Ease into your Sunday with mindful movement and breathwork.",
    dateTime: "Sunday, 9:30 AM – 10:45 AM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "Regent's Park Pavilion, London NW1",
    map: "https://maps.google.com",
  },
  {
    title: "Breathwork & Pranayama",
    description: "Explore powerful breathing techniques to energise and calm the mind.",
    dateTime: "Sunday, 11:30 AM – 12:30 PM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.OnLine,
  },
  {
    title: "Inversions Workshop",
    description: "Learn headstands, handstands, and forearm stands safely. Intermediate level.",
    dateTime: "Sunday, 2:00 PM – 4:00 PM",
    linkType: LinkType.Internal,
    link: "/book",
    type: ClassType.InPerson,
    address: "The Yoga Space, 12 Camden Road, London NW1",
    map: "https://maps.google.com",
  },
  {
    title: "Sound Bath & Yoga",
    description: "Gentle yoga followed by a healing sound bath with singing bowls.",
    dateTime: "Sunday, 6:00 PM – 7:30 PM",
    linkType: LinkType.External,
    link: "https://booking.example.com",
    type: ClassType.InPerson,
    address: "Calm Studio, 5 Brick Lane, London E1",
    map: "https://maps.google.com",
  },
];

interface SectionClassesProps {
  limit?: number;
}

const SectionClasses = ({ limit }: SectionClassesProps) => {
  const classesToShow = limit ? fakeClasses.slice(0, limit) : fakeClasses;
  const showViewAll = limit && limit < fakeClasses.length;

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-800 text-center mb-12">
          Upcoming Classes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classesToShow.map((classItem, index) => (
            <CardClass key={index} {...classItem} />
          ))}
        </div>
        {showViewAll && (
          <div className="mt-10 text-center">
            <ButtonLink href="/classes" label="View all classes" />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionClasses;
