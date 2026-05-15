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
 * Fetch all published yoga classes
 * @param limit - Optional limit for number of classes to fetch
 * @returns Array of published classes sorted by dateTime
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

    const sortedClasses = (data as YogaClassData[]).sort((a, b) => {
      const dateA = new Date(a.createdAt || 0).getTime();
      const dateB = new Date(b.createdAt || 0).getTime();
      return dateB - dateA;
    });

    return limit ? sortedClasses.slice(0, limit) : sortedClasses;
  } catch (error) {
    console.error("Error fetching classes:", error);
    return [];
  }
}
