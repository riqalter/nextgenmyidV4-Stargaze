'use strict'

require('dotenv').config({
  path: `.env`
})

module.exports = {
  pathPrefix: '/nexgenmyidv4',
  siteMetadata: {
    title: `mikailthoriq.my.id`,
    description: `mikail thoriq's website`,
    siteUrl: `https://mikailthoriq.my.id`,
    image: `/images/mikailthoriq_potrait_general.jpg`,
    author: {
      name: `Mikail Thoriq`,
      intro: `Hey, I am Thoriq 👋`,
      url: `https://mikailthoriq.my.id`,
      email: `ilmail@mail.com`
    },
    social: [
      {name: `GitHub`, 
      socialUrl: `https://github.com/thq642`
      },
      {
        name: `GitHub (experiment)`,
        socialUrl: `https://github.com/riqalter`
      },
      {
        name:  `Discord`,
        socialUrl: `https://discordapp.com/users/616254619584299012`
      },
      {name: `Instagram`, 
      socialUrl: `https://www.instagram.com/mikail.thoriq/`
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: [`alt`],
              markdownCaptions: true,
              backgroundColor: 'none',
              wrapperStyle: `border-bottom: none;`
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem; max-width: 600px; height: 400px; margin: auto;`
            }
          },
          {
            resolve: 'gatsby-remark-video',
            options: {
              width: 600,
              height: 'auto',
              preload: 'auto',
              muted: true,
              autoplay: true,
              playsinline: true,
              controls: true,
              loop: true
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              // eslint-disable-next-line max-len
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20" style="margin: 0 0 -0.2rem 0.7rem; "><path fill="white" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `autolink-headers`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: true,
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mikailthoriq.my.id`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mikail thoriq`,
        short_name: `mikailthoriq.my.id`,
        start_url: `/`,
        background_color: `#255799`,
        theme_color: `#255799`,
        display: `standalone`,
        icon: `static/images/favicon/orange.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-meta-redirect`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
