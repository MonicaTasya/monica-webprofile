import type { CollectionConfig } from "payload";

export const gambarProj: CollectionConfig = {
  slug: "gambarProj",
  access: {
    read: () => true, // Allow public read access to images
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  upload: {
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [],
};
