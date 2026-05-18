"use client";

import "@/app/utils/configureAmplify";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import AdminLayout from "../components/AdminLayout/AdminLayout";
import AdminButtonSubmit from "../components/AdminButtonSubmit/AdminButtonSumit";
import AdminButtonCancel from "../components/AdminButtonCancel/AdminButtonCancel";
import AdminInputText from "../components/AdminInputText/AdminInputText";
import AdminInputSelect from "../components/AdminInputSelect/AdminInputSelect";
import AdminInputCheckbox from "../components/AdminInputCheckbox/AdminInputCheckbox";
import AdminInputTextArea from "../components/AdminInputTextArea/AdminInputTextArea";
import AdminTable from "../components/AdminTable/AdminTable";

const client = generateClient<Schema>();

interface YogaClass {
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
  ctaText?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

const AdminClassesPage = () => {
  const [classes, setClasses] = useState<YogaClass[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingClass, setEditingClass] = useState<YogaClass | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dateTime: "",
    linkType: "INTERNAL" as "INTERNAL" | "EXTERNAL",
    link: "",
    address: "",
    map: "",
    classType: "IN_PERSON" as "ONLINE" | "IN_PERSON",
    published: false,
    ctaText: "",
  });

  useEffect(() => {
    fetchClasses();
  }, []);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.dateTime) newErrors.dateTime = "Date & time is required";
    if (!formData.link) newErrors.link = "Link is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fetchClasses = async () => {
    try {
      const { data } = await client.models.YogaClass.list();
      const sortedData = (data as unknown as YogaClass[]).sort((a, b) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return dateB - dateA;
      });
      setClasses(sortedData);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSaving(true);

    const classData = {
      title: formData.title,
      description: formData.description,
      dateTime: formData.dateTime,
      linkType: formData.linkType,
      link: formData.link,
      address: formData.address || null,
      map: formData.map || null,
      classType: formData.classType,
      published: formData.published,
      ctaText: formData.ctaText || null,
    };

    try {
      if (editingClass) {
        await client.models.YogaClass.update({
          id: editingClass.id,
          ...classData,
        });
        showNotification("success", "Class updated successfully!");
      } else {
        await client.models.YogaClass.create(classData);
        showNotification("success", "Class created successfully!");
      }
      fetchClasses();
      closeForm();
    } catch (error) {
      console.error("Error saving class:", error);
      showNotification("error", "Error saving class. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this class?")) {
      try {
        await client.models.YogaClass.delete({ id });
        fetchClasses();
        showNotification("success", "Class deleted successfully!");
      } catch (error) {
        console.error("Error deleting class:", error);
        showNotification("error", "Error deleting class.");
      }
    }
  };

  const openForm = (yogaClass?: YogaClass) => {
    if (yogaClass) {
      setEditingClass(yogaClass);
      setFormData({
        title: yogaClass.title,
        description: yogaClass.description,
        dateTime: yogaClass.dateTime,
        linkType: yogaClass.linkType,
        link: yogaClass.link,
        address: yogaClass.address || "",
        map: yogaClass.map || "",
        classType: yogaClass.classType || "IN_PERSON",
        published: yogaClass.published,
        ctaText: yogaClass.ctaText || "",
      });
    } else {
      setEditingClass(null);
      setFormData({
        title: "",
        description: "",
        dateTime: "",
        linkType: "INTERNAL",
        link: "",
        address: "",
        map: "",
        classType: "IN_PERSON",
        published: false,
        ctaText: "",
      });
    }
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingClass(null);
    setErrors({});
    setFormData({
      title: "",
      description: "",
      dateTime: "",
      linkType: "INTERNAL",
      link: "",
      address: "",
      map: "",
      classType: "IN_PERSON",
      published: false,
      ctaText: "",
    });
  };

  const columns = [
    {
      key: "title",
      label: "Title",
      render: (item: YogaClass) => (
        <div className="max-w-xs">
          <div className="font-medium truncate">{item.title}</div>
          <div className="text-gray-500 text-xs truncate mt-1">
            {item.description}
          </div>
        </div>
      ),
      className: "px-6 py-4 text-sm text-gray-900",
    },
    {
      key: "dateTime",
      label: "Date & Time",
      render: (item: YogaClass) => item.dateTime,
      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
    },
    {
      key: "classType",
      label: "Type",
      render: (item: YogaClass) => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            item.classType === "ONLINE"
              ? "bg-sky-100 text-sky-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {item.classType === "ONLINE" ? "Online" : "In Person"}
        </span>
      ),
      className: "px-6 py-4 whitespace-nowrap",
    },
    {
      key: "linkType",
      label: "Link Type",
      render: (item: YogaClass) => (
        <span className="text-xs text-gray-600">
          {item.linkType === "INTERNAL" ? "Internal" : "External"}
        </span>
      ),
      className: "px-6 py-4 whitespace-nowrap text-sm",
    },
    {
      key: "published",
      label: "Status",
      render: (item: YogaClass) => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            item.published
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {item.published ? "Published" : "Draft"}
        </span>
      ),
      className: "px-6 py-4 whitespace-nowrap",
    },
  ];

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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Class Management</h2>
          <AdminButtonSubmit
            onClick={() => openForm()}
            content="Add Class"
            type="button"
          />
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="text-lg font-bold mb-4">
                {editingClass ? "Edit Class" : "Add New Class"}
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <AdminInputText
                    id="title"
                    name="title"
                    label="Title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    error={!!errors.title}
                    errorMessage={errors.title}
                    placeholder="e.g. Morning Vinyasa Flow"
                    required
                  />
                </div>

                <div className="mb-4">
                  <AdminInputTextArea
                    id="description"
                    name="description"
                    label="Description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    error={!!errors.description}
                    errorMessage={errors.description}
                    placeholder="Brief description of the class..."
                    rows={3}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Date & Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="dateTime"
                    type="datetime-local"
                    value={formData.dateTime}
                    onChange={(e) =>
                      setFormData({ ...formData, dateTime: e.target.value })
                    }
                    required
                    className={`w-full py-2 px-4 rounded-[10px] border outline-none transition-colors focus:ring-2 focus:ring-offset-1 ${
                      errors.dateTime
                        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                        : "border-[#171C32] focus:border-[#171C32] focus:ring-blue-200 hover:border-gray-400"
                    }`}
                  />
                  {errors.dateTime && (
                    <span className="text-sm text-red-500">{errors.dateTime}</span>
                  )}
                </div>

                <div className="mb-4">
                  <AdminInputSelect
                    id="classType"
                    name="classType"
                    label="Class Type"
                    value={formData.classType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        classType: e.target.value as "ONLINE" | "IN_PERSON",
                      })
                    }
                    options={[
                      { value: "IN_PERSON", label: "In Person" },
                      { value: "ONLINE", label: "Online" },
                    ]}
                  />
                </div>

                <div className="mb-4">
                  <AdminInputSelect
                    id="linkType"
                    name="linkType"
                    label="Link Type"
                    value={formData.linkType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        linkType: e.target.value as "INTERNAL" | "EXTERNAL",
                      })
                    }
                    options={[
                      { value: "INTERNAL", label: "Internal" },
                      { value: "EXTERNAL", label: "External" },
                    ]}
                  />
                </div>

                <div className="mb-4">
                  <AdminInputText
                    id="link"
                    name="link"
                    label="Link"
                    value={formData.link}
                    onChange={(e) =>
                      setFormData({ ...formData, link: e.target.value })
                    }
                    error={!!errors.link}
                    errorMessage={errors.link}
                    placeholder="e.g. /book or https://booking.example.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <AdminInputText
                    id="address"
                    name="address"
                    label="Address (optional)"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="e.g. The Yoga Space, 12 Camden Road, London NW1"
                  />
                </div>

                <div className="mb-4">
                  <AdminInputText
                    id="map"
                    name="map"
                    label="Map Link (optional)"
                    value={formData.map}
                    onChange={(e) =>
                      setFormData({ ...formData, map: e.target.value })
                    }
                    placeholder="e.g. https://maps.google.com/..."
                  />
                </div>

                <div className="mb-4">
                  <AdminInputText
                    id="ctaText"
                    name="ctaText"
                    label="CTA Button Text (optional)"
                    value={formData.ctaText}
                    onChange={(e) =>
                      setFormData({ ...formData, ctaText: e.target.value })
                    }
                    placeholder="e.g. Book this class, Join now, Register here"
                  />
                </div>

                <div className="mb-6">
                  <AdminInputCheckbox
                    id="published"
                    name="published"
                    label="Published"
                    checked={formData.published}
                    onChange={(e) =>
                      setFormData({ ...formData, published: e.target.checked })
                    }
                  />
                </div>

                <div className="flex gap-3">
                  <AdminButtonSubmit
                    type="submit"
                    content={
                      isSaving
                        ? "Saving..."
                        : editingClass
                        ? "Update Class"
                        : "Create Class"
                    }
                    disabled={isSaving}
                  />
                  <AdminButtonCancel
                    onClick={closeForm}
                    content="Cancel"
                  />
                </div>
              </form>
            </div>
          </div>
        )}

        <AdminTable
          data={classes}
          columns={columns}
          searchFields={["title", "description"]}
          searchPlaceholder="Search by title or description..."
          itemName="classes"
          onEdit={openForm}
          onDelete={(item) => handleDelete(item.id)}
          getItemId={(item) => item.id}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminClassesPage;
