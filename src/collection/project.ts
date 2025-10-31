import type { CollectionConfig } from "payload";

export const Project: CollectionConfig = {
  slug: "projects", // endpoint: /api/projects
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "href", type: "text", required: true, unique: true },
    { name: "description", type: "textarea" },
    {
      name: "src",
      type: "upload",
      relationTo: "gambarProj", // relasi ke koleksi media
      required: true,
    },
  ],
};
