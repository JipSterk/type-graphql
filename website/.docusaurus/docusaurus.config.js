export default {
  "title": "TypeGraphQL",
  "tagline": "Modern framework for GraphQL API in Node.js",
  "url": "https://typegraphql.com",
  "projectName": "type-graphql",
  "organizationName": "MichalLytek",
  "baseUrl": "/",
  "favicon": "img/favicon.png",
  "themeConfig": {
    "googleAnalytics": {
      "trackingID": "UA-117093147-1"
    },
    "gtag": {
      "trackingID": "UA-117093147-1"
    },
    "algolia": {
      "apiKey": "2cf66434100c0e30ca9ff499830e7b77",
      "indexName": "typegraphql",
      "contextualSearch": false,
      "appId": "BH4D9OD16A",
      "searchParameters": {}
    },
    "navbar": {
      "items": [
        {
          "doc": "introduction",
          "label": "Docs",
          "position": "left"
        },
        {
          "doc": "examples",
          "label": "Examples",
          "position": "left"
        },
        {
          "doc": "faq",
          "label": "FAQ",
          "position": "left"
        },
        {
          "href": "https://opencollective.com/typegraphql",
          "label": "Donate",
          "position": "left"
        },
        {
          "href": "https://github.com/MichalLytek/type-graphql",
          "label": "GitHub",
          "position": "left"
        },
        {
          "blog": true,
          "label": "Blog",
          "position": "left"
        },
        {
          "search": true,
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "copyright": "Copyright © 2020 Michał Lytek",
      "style": "light",
      "links": []
    },
    "scripts": [
      "https://buttons.github.io/buttons.js"
    ],
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "admonitions": {
            "sidebarPath": "/Users/jipsterk/Repos/type-graphql/website/sidebars.json",
            "editUrl": "https://github.com/MichalLytek/type-graphql/edit/master/website/"
          }
        }
      }
    ]
  ],
  "onBrokenLinks": "throw",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};