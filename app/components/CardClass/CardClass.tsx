import { HiOutlineClock, HiOutlineLocationMarker, HiOutlineExternalLink } from "react-icons/hi";

enum LinkType {
    Internal,
    External,
}

enum ClassType {
    OnLine,
    InPerson,
}

interface CardClassProps {
    title: string;
    description: string;
    dateTime: string;
    linkType: LinkType;
    link: string;
    address?: string;
    map?: string;
    type?: ClassType;
}

const CardClass = ({
    title,
    description,
    dateTime,
    linkType,
    link,
    address,
    map,
    type,
}: CardClassProps) => {
    const isExternal = linkType === LinkType.External;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
            {/* Header: Title + Badge */}
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                {type !== undefined && (
                    <span
                        className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full ${
                            type === ClassType.OnLine
                                ? "bg-sky-100 text-sky-700"
                                : "bg-amber-100 text-amber-700"
                        }`}
                    >
                        {type === ClassType.OnLine ? "Online" : "In Person"}
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

            {/* Date & Time */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <HiOutlineClock className="text-base text-rose-400" />
                <span>{dateTime}</span>
            </div>

            {/* Address (if in-person) */}
            {address && (
                <div className="flex items-start gap-2 text-sm text-gray-500">
                    <HiOutlineLocationMarker className="text-base text-rose-400 mt-0.5" />
                    <span>
                        {map ? (
                            <a
                                href={map}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-rose-500 underline underline-offset-2 transition-colors"
                            >
                                {address}
                            </a>
                        ) : (
                            address
                        )}
                    </span>
                </div>
            )}

            {/* CTA Link */}
            <a
                href={link}
                {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-rose-400 hover:text-rose-500 transition-colors"
            >
                Book this class
                {isExternal && <HiOutlineExternalLink className="text-base" />}
            </a>
        </div>
    );
};

export { LinkType, ClassType };
export type { CardClassProps };
export default CardClass;
