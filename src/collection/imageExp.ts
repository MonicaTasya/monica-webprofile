import type { CollectionConfig } from "payload";

export const imagesExp: CollectionConfig = {
  slug: "imagesExp",
  access: {
    read: () => true, // Allow public read access to images
  },
  upload: {
    staticDir: "imagesExp",
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [],
};
