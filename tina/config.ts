import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      {
        name: "about",
        label: "About",
        path: "src/content/sections",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "image",
            name: "profileImageSrc",
            label: "Profile Image",
          },
          {
            type: "object",
            name: "aboutItems",
            label: "About Items",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label"
              },
              {
                type: "string",
                name: "text",
                label: "Text"
              },
              {
                type: "string",
                name: "icon",
                label: "Icon",
              },
              // Note: Icons might need to be handled differently, depending on how they are implemented
            ],
          },
        ],
      },

      {
        label: 'Home',
        name: 'home',
        path: 'content/pages', // Adjust based on your content directory structure
        format: 'json',
        fields: [
          {
            name: 'blocks',
            label: 'Blocks',
            type: 'object',
            list: true,
            templates: [
              {
                name: "about",
                label: "About",
                fields: [
                  {
                    type: "image",
                    name: "profileImageSrc",
                    label: "Profile Image",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "About Title",
                  },
                  {
                    type: "object",
                    name: "aboutItems",
                    label: "About Items",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "label",
                        label: "Label",
                      },
                      {
                        type: "string",
                        name: "text",
                        label: "Text",
                      },
                      {
                        type: "string",
                        name: "icon",
                        label: "Icon",
                      },
                      // Note: Icons might need to be handled differently, depending on how they are implemented
                    ],
                  },
                ],
              },
            ]

          },
        ]
      },
    ]
  },
});
