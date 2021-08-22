module.exports = {
  siteMetadata: {
    title: `Anthony Carrick | Software Developer | Writer`,
    siteUrl: `https://condescending-bhabha-3da034.netlify.app`,
    description: `A site of personal and professional IT, photography and technology.`,
    topics: [],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: "What I'm Doing These Days",
        path: '/now'
      },
      {
        name: "Weekend Notes Articles",
        path: '/weekend-notes'
      },
      {
        name: "Tools I Use",
        path: '/tools-i-use'
      },
    ],
    footerMenu: [
      {
        name: "Weekend Notes Articles",
        path: '/weekend-notes'
      }
    ],
    search: true,
    author: {
      name: `Anthony Carrick`,
      description: `Hi. I'm Anthony Carrick &mdash; a software developer, amateur writer and hobbyist photographer.`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/anthc`,
        linkedin: ``,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/anthx`,
        twitch: ``
      }
    }
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      },
    },
    `gatsby-plugin-netlify-headers`,
    {
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        headers: {
          "/*": [
            "X-Robots-Tag: noindex",
          ]
        },                                  // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [],                           // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true,                   // boolean to turn off the default security headers
        mergeLinkHeaders: false,                      // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
        mergeCachingHeaders: true,                    // boolean to turn off the default caching headers
      }
    }
  ]
};
