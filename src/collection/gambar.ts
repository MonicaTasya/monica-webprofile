import type { CollectionConfig } from "payload";

export const Gambar: CollectionConfig = {
  slug: "gambar",
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [],
};
