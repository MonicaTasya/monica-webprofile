import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";
import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { Experience } from "./src/collection/experience";
import { gambarExp } from "./src/collection/gambarExp";
import { Project } from "./src/collection/project";
import { gambarProj } from "./src/collection/gambarProj";
import { experienceNew } from "./src/collection/experienceNew";
import { imagesExp } from "./src/collection/imageExp";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    Experience,
    gambarExp,
    Project,
    gambarProj,
    experienceNew,
    imagesExp,
  ],

  // Payload Secret
  secret: process.env.PAYLOAD_SECRET || "",
  // Untuk koneksi ke Database
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: true,
        ca: process.env.SSL_CA,
      },
    },
  }),
  plugins: process.env.S3_ENDPOINT
    ? [
        // Untuk koneksi ke Amazon S3
        s3Storage({
          collections: {
        gambarExp: {
          prefix: "gambar-experience",
          signedDownloads: {
            shouldUseSignedURL: ({ collection, filename, req }) => {
              return filename.endsWith(".mp4");
            },
          },
        },
        gambarProj: {
          prefix: "gambar-project",
          signedDownloads: {
            shouldUseSignedURL: ({ collection, filename, req }) => {
              return filename.endsWith(".mp4");
            },
          },
        },
        imagesExp: {
          prefix: "gambar-images",
          signedDownloads: {
            shouldUseSignedURL: ({ collection, filename, req }) => {
              return filename.endsWith(".mp4");
            },
          },
        },
      },
      config: {
        endpoint: process.env.S3_ENDPOINT,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        region: process.env.S3_REGION || "",
        // Opsi ini penting agar URL yang dihasilkan oleh Payload benar
        forcePathStyle: true,
      },
      bucket: process.env.S3_BUCKET || "",
    }),
    ]
  : [],
  sharp,
});
