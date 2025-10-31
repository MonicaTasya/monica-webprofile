import type { CollectionConfig } from "payload";

export const gambarProj: CollectionConfig = {
  slug: "gambarProj",
  access: {
    read: () => true, // Allow public read access to images
  },
  upload: {
    staticDir: "gambarProj",
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [],
};
