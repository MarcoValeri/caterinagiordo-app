import { cookieBasedClient } from "./amplify-server-utils";

const client = cookieBasedClient as any;

export interface YogaClassData {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  linkType: "INTERNAL" | "EXTERNAL";
  link: string;
  address?: string | null;
  map?: string | null;
  classType?: "ONLINE" | "IN_PERSON" | null;
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Fetch all published yoga classes (upcoming only, sorted by next class first)
 * @param limit - Optional limit for number of classes to fetch
 * @returns Array of published upcoming classes sorted by dateTime ascending
 */
export async function getClasses(limit?: number): Promise<YogaClassData[]> {
  try {
    const { data } = await client.models.YogaClass.list({
      filter: { published: { eq: true } },
      selectionSet: [
        "id",
        "title",
        "description",
        "dateTime",
        "linkType",
        "link",
        "address",
        "map",
        "classType",
        "published",
        "createdAt",
        "updatedAt",
      ],
    });

    const now = new Date().toISOString();

    // Filter out past classes and sort by dateTime ascending (next class first)
    const upcomingClasses = (data as YogaClassData[])
      .filter((c) => c.dateTime >= now)
      .sort((a, b) => {
        return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
      });

    return limit ? upcomingClasses.slice(0, limit) : upcomingClasses;
  } catch (error) {
    console.error("Error fetching classes:", error);
    return [];
  }
}
