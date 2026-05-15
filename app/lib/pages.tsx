import { cookieBasedClient } from "./amplify-server-utils";

const client = cookieBasedClient as any;

export interface PageContentData {
  id: string;
  slug: string;
  // About page
  aboutIntro?: string | null;
  aboutPhilosophyBalance?: string | null;
  aboutPhilosophyMindfulness?: string | null;
  aboutPhilosophyGrowth?: string | null;
  aboutJourney?: string | null;
  // Contact page
  contactIntro?: string | null;
  contactEmail?: string | null;
  contactEmailDescription?: string | null;
  contactInstagram?: string | null;
  contactInstagramDescription?: string | null;
  contactNewsletterText?: string | null;
  contactNewsletterLink?: string | null;
}

/**
 * Fetch page content by slug
 * @param slug - The page slug (e.g., "about", "contact")
 * @returns Page content or null if not found
 */
export async function getPageContent(slug: string): Promise<PageContentData | null> {
  try {
    const { data } = await client.models.PageContent.list({
      filter: { slug: { eq: slug } },
    });

    if (!data || data.length === 0) {
      return null;
    }

    return data[0] as PageContentData;
  } catch (error) {
    console.error("Error fetching page content:", error);
    return null;
  }
}
