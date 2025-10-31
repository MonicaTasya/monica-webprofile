import type { CollectionConfig } from "payload";

export const Experience: CollectionConfig = {
  slug: "experiences", // endpoint: /api/experiences
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
      relationTo: "gambarExp", // relasi ke koleksi media
      required: true,
    },
  ],
};
