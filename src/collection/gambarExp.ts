import type { CollectionConfig } from "payload";

export const gambarExp: CollectionConfig = {
  slug: "gambarExp",
  access: {
    read: () => true, // Allow public read access to images
    create: () => true, // Allow anyone to upload (change to auth logic later)
    update: () => true,
    delete: () => true,
  },
  upload: {
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [],
};
