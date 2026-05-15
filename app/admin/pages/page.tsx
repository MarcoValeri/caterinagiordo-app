"use client";

import "@/app/utils/configureAmplify";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import AdminLayout from "../components/AdminLayout/AdminLayout";
import AdminButtonSubmit from "../components/AdminButtonSubmit/AdminButtonSumit";
import AdminButtonCancel from "../components/AdminButtonCancel/AdminButtonCancel";
import AdminInputText from "../components/AdminInputText/AdminInputText";
import TiptapEditor from "../components/Tiptap/TiptapEditor/TiptapEditor";

const client = generateClient<Schema>();

interface PageContent {
  id: string;
  slug: string;
  aboutIntro?: string | null;
  aboutPhilosophyBalance?: string | null;
  aboutPhilosophyMindfulness?: string | null;
  aboutPhilosophyGrowth?: string | null;
  aboutJourney?: string | null;
  contactIntro?: string | null;
  contactEmail?: string | null;
  contactEmailDescription?: string | null;
  contactInstagram?: string | null;
  contactInstagramDescription?: string | null;
  contactNewsletterText?: string | null;
  contactNewsletterLink?: string | null;
}

const pages = [
  { slug: "about", label: "About Page" },
  { slug: "contact", label: "Contact Page" },
];

const AdminPagesPage = () => {
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [pageData, setPageData] = useState<PageContent | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // About form
  const [aboutForm, setAboutForm] = useState({
    aboutIntro: "",
    aboutPhilosophyBalance: "",
    aboutPhilosophyMindfulness: "",
    aboutPhilosophyGrowth: "",
    aboutJourney: "",
  });

  // Contact form
  const [contactForm, setContactForm] = useState({
    contactIntro: "",
    contactEmail: "",
    contactEmailDescription: "",
    contactInstagram: "",
    contactInstagramDescription: "",
    contactNewsletterText: "",
    contactNewsletterLink: "",
  });

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const fetchPageContent = async (slug: string) => {
    try {
      const { data } = await client.models.PageContent.list({
        filter: { slug: { eq: slug } },
      });

      if (data && data.length > 0) {
        const content = data[0] as unknown as PageContent;
        setPageData(content);

        if (slug === "about") {
          setAboutForm({
            aboutIntro: content.aboutIntro || "",
            aboutPhilosophyBalance: content.aboutPhilosophyBalance || "",
            aboutPhilosophyMindfulness: content.aboutPhilosophyMindfulness || "",
            aboutPhilosophyGrowth: content.aboutPhilosophyGrowth || "",
            aboutJourney: content.aboutJourney || "",
          });
        } else if (slug === "contact") {
          setContactForm({
            contactIntro: content.contactIntro || "",
            contactEmail: content.contactEmail || "",
            contactEmailDescription: content.contactEmailDescription || "",
            contactInstagram: content.contactInstagram || "",
            contactInstagramDescription: content.contactInstagramDescription || "",
            contactNewsletterText: content.contactNewsletterText || "",
            contactNewsletterLink: content.contactNewsletterLink || "",
          });
        }
      } else {
        setPageData(null);
      }
    } catch (error) {
      console.error("Error fetching page content:", error);
    }
  };

  const handleEdit = async (slug: string) => {
    setEditingPage(slug);
    await fetchPageContent(slug);
  };

  const handleSaveAbout = async () => {
    setIsSaving(true);
    try {
      if (pageData) {
        await client.models.PageContent.update({
          id: pageData.id,
          ...aboutForm,
        });
      } else {
        await client.models.PageContent.create({
          slug: "about",
          ...aboutForm,
        });
      }
      showNotification("success", "About page updated successfully!");
      setEditingPage(null);
    } catch (error) {
      console.error("Error saving about page:", error);
      showNotification("error", "Error saving. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveContact = async () => {
    setIsSaving(true);
    try {
      if (pageData) {
        await client.models.PageContent.update({
          id: pageData.id,
          ...contactForm,
        });
      } else {
        await client.models.PageContent.create({
          slug: "contact",
          ...contactForm,
        });
      }
      showNotification("success", "Contact page updated successfully!");
      setEditingPage(null);
    } catch (error) {
      console.error("Error saving contact page:", error);
      showNotification("error", "Error saving. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AdminLayout>
      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Page Management</h2>

        {!editingPage && (
          <div className="space-y-4">
            {pages.map((page) => (
              <div
                key={page.slug}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {page.label}
                  </h3>
                  <p className="text-sm text-gray-500">/{page.slug}</p>
                </div>
                <AdminButtonSubmit
                  onClick={() => handleEdit(page.slug)}
                  content="Edit Content"
                  type="button"
                />
              </div>
            ))}
          </div>
        )}

        {/* About Page Editor */}
        {editingPage === "about" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold mb-6">Edit About Page</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Intro Section
                </h4>
                <label className="block text-sm font-medium text-gray-700 mb-2">About Intro Text</label>
                <TiptapEditor
                  content={aboutForm.aboutIntro}
                  onChange={(content) =>
                    setAboutForm({ ...aboutForm, aboutIntro: content })
                  }
                  placeholder="Write about Caterina..."
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Philosophy Section
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Balance Description</label>
                    <TiptapEditor
                      content={aboutForm.aboutPhilosophyBalance}
                      onChange={(content) =>
                        setAboutForm({
                          ...aboutForm,
                          aboutPhilosophyBalance: content,
                        })
                      }
                      placeholder="Description for Balance..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mindfulness Description</label>
                    <TiptapEditor
                      content={aboutForm.aboutPhilosophyMindfulness}
                      onChange={(content) =>
                        setAboutForm({
                          ...aboutForm,
                          aboutPhilosophyMindfulness: content,
                        })
                      }
                      placeholder="Description for Mindfulness..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Growth Description</label>
                    <TiptapEditor
                      content={aboutForm.aboutPhilosophyGrowth}
                      onChange={(content) =>
                        setAboutForm({
                          ...aboutForm,
                          aboutPhilosophyGrowth: content,
                        })
                      }
                      placeholder="Description for Growth..."
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  My Journey Section
                </h4>
                <label className="block text-sm font-medium text-gray-700 mb-2">Journey Text</label>
                <TiptapEditor
                  content={aboutForm.aboutJourney}
                  onChange={(content) =>
                    setAboutForm({ ...aboutForm, aboutJourney: content })
                  }
                  placeholder="Write about your yoga journey..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <AdminButtonSubmit
                  onClick={handleSaveAbout}
                  content={isSaving ? "Saving..." : "Save Changes"}
                  type="button"
                  disabled={isSaving}
                />
                <AdminButtonCancel
                  onClick={() => setEditingPage(null)}
                  content="Cancel"
                />
              </div>
            </div>
          </div>
        )}

        {/* Contact Page Editor */}
        {editingPage === "contact" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold mb-6">Edit Contact Page</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Intro Section
                </h4>
                <label className="block text-sm font-medium text-gray-700 mb-2">Intro Text</label>
                <TiptapEditor
                  content={contactForm.contactIntro}
                  onChange={(content) =>
                    setContactForm({
                      ...contactForm,
                      contactIntro: content,
                    })
                  }
                  placeholder="Intro text for the contact page..."
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Email Section
                </h4>
                <div className="space-y-4">
                  <AdminInputText
                    id="contactEmail"
                    name="contactEmail"
                    label="Email Address"
                    value={contactForm.contactEmail}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        contactEmail: e.target.value,
                      })
                    }
                    placeholder="hello@caterinagiordo.com"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Description</label>
                    <TiptapEditor
                      content={contactForm.contactEmailDescription}
                      onChange={(content) =>
                        setContactForm({
                          ...contactForm,
                          contactEmailDescription: content,
                        })
                      }
                      placeholder="Short description for the email card..."
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Instagram Section
                </h4>
                <div className="space-y-4">
                  <AdminInputText
                    id="contactInstagram"
                    name="contactInstagram"
                    label="Instagram Handle (e.g. @caterinagiordo)"
                    value={contactForm.contactInstagram}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        contactInstagram: e.target.value,
                      })
                    }
                    placeholder="@caterinagiordo"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instagram Description</label>
                    <TiptapEditor
                      content={contactForm.contactInstagramDescription}
                      onChange={(content) =>
                        setContactForm({
                          ...contactForm,
                          contactInstagramDescription: content,
                        })
                      }
                      placeholder="Short description for the Instagram card..."
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Newsletter Section
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Newsletter Description</label>
                    <TiptapEditor
                      content={contactForm.contactNewsletterText}
                      onChange={(content) =>
                        setContactForm({
                          ...contactForm,
                          contactNewsletterText: content,
                        })
                      }
                      placeholder="Description for the newsletter section..."
                    />
                  </div>
                  <AdminInputText
                    id="contactNewsletterLink"
                    name="contactNewsletterLink"
                    label="Newsletter Link (Mailchimp URL)"
                    value={contactForm.contactNewsletterLink}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        contactNewsletterLink: e.target.value,
                      })
                    }
                    placeholder="https://mailchimp.com/..."
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <AdminButtonSubmit
                  onClick={handleSaveContact}
                  content={isSaving ? "Saving..." : "Save Changes"}
                  type="button"
                  disabled={isSaving}
                />
                <AdminButtonCancel
                  onClick={() => setEditingPage(null)}
                  content="Cancel"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminPagesPage;
