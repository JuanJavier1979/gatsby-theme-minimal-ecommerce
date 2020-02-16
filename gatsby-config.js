module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme: Minimal eCommerce',
    description: 'A minimal (minimalist?) theme to get started with Gatsby and eCommerce sites.',
    author: '@JuanJavier1979'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [require('tailwindcss')],
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Gatsby Minimal eCommerce",
        short_name: "GT eCommerce",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#222222",
        display: "standalone",
        icon: "static/logo-icon.png",
      }
    },
    'gatsby-plugin-offline',
  ]
}