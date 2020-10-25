module.exports = {
  title: "TypeGraphQL",
  tagline: "Modern framework for GraphQL API in Node.js",
  url: "https://typegraphql.com",
  projectName: "type-graphql",
  organizationName: "MichalLytek",
  baseUrl: "/",
  // cname: "typegraphql.com",
  favicon: "img/favicon.png",
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-117093147-1",
    },
    gtag: {
      trackingID: "UA-117093147-1",
    },
    algolia: {
      apiKey: "2cf66434100c0e30ca9ff499830e7b77",
      indexName: "typegraphql",
    },
    navbar: {
      items: [
        {
          doc: "introduction",
          label: "Docs",
        },
        {
          doc: "examples",
          label: "Examples",
        },
        {
          doc: "faq",
          label: "FAQ",
        },
        {
          href: "https://opencollective.com/typegraphql",
          label: "Donate",
        },
        {
          href: "https://github.com/MichalLytek/type-graphql",
          label: "GitHub",
        },
        {
          blog: true,
          label: "Blog",
        },
        {
          search: true,
        },
      ],
      // headerIcon: "img/logo.png",
      // footerIcon: "img/logo.png",
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Michał Lytek`,
    },
    scripts: ["https://buttons.github.io/buttons.js"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          admonitions: {
            sidebarPath: require.resolve("./sidebars.json"),
            editUrl: "https://github.com/MichalLytek/type-graphql/edit/master/website/",
          },
          // theme: {
          //   customCss: require.resolve("./src/css/custom.css"),
          // },
        },
      },
    ],
  ],
};
