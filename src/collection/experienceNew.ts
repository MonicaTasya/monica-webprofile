import type { CollectionConfig } from "payload";

export const experienceNew: CollectionConfig = {
  slug: "experiencesNew", // endpoint: /api/experiences
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "description", type: "textarea" },
    {
      name: "src",
      type: "upload",
      relationTo: "imagesExp", // relasi ke koleksi media
      required: true,
    },
  ],
};
