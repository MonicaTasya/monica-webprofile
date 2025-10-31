import type { CollectionConfig } from "payload";

export const gambarExp: CollectionConfig = {
  slug: "gambarExp",
  access: {
    read: () => true, // Allow public read access to images
  },
  upload: {
    staticDir: "gambarExp",
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [],
};
