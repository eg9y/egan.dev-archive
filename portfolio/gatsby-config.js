module.exports = {
    siteMetadata: {
        title: 'Egan Bisma',
        author: 'Egan Bisma',
        imageUrl: 'https://i.imgur.com/Vz81GEl.png',
        description: 'Portfolio site',
        keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
        github: `https://github.com/VVNoodle`,
        siteUrl: `https://www.egan.dev`
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Makefolio',
                short_name: 'Makefolio',
                start_url: '/',
                background_color: '#2980b9',
                theme_color: '#2980b9',
                display: 'standalone',
                orientation: 'portrait'
            }
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-XXXXXXXX-X',
                // Setting this parameter is optional (requried for some countries such as Germany)
                anonymize: true
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        // {
        //     resolve: `gatsby-plugin-favicon`,
        //     options: {
        //         logo: "./src/components/images/logo.svg",

        //         // WebApp Manifest Configuration
        //         appName: null, // Inferred with your package.json
        //         appDescription: null,
        //         developerName: null,
        //         developerURL: null,
        //         dir: 'auto',
        //         lang: 'en-US',
        //         background: '#fff',
        //         theme_color: '#fff',
        //         display: 'standalone',
        //         orientation: 'any',
        //         start_url: '/?homescreen=1',
        //         version: '1.0',

        //         icons: {
        //             android: true,
        //             appleIcon: true,
        //             appleStartup: true,
        //             coast: false,
        //             favicons: true,
        //             firefox: true,
        //             yandex: false,
        //             windows: false
        //         }
        //     }
        // }
    ],
}



