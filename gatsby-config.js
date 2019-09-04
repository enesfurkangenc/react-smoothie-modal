const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'React Smoothie Modal',
    description: 'react smoothie modal component 🦄',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        docgenConfig: {},
        menu: ['Getting Started', 'Components'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Smoothie Modal',
        description: 'react smoothie modal component 🦄',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site',
          templates:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/package.json',
          docz:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz',
          cache:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz/.cache',
          app:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz/app',
          appPublic:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz/public',
          appNodeModules:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/node_modules',
          appPackageJson:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/package.json',
          appYarnLock:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/gatsby-config.js',
          gatsbyBrowser:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/gatsby-browser.js',
          gatsbyNode:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/gatsby-node.js',
          gatsbySSR:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/gatsby-ssr.js',
          importsJs:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz/app/imports.js',
          rootJs:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz/app/root.jsx',
          indexJs:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz/app/index.jsx',
          indexHtml:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz/app/index.html',
          db:
            '/Users/olgay/Enes/Packages/react-smoothie-modal/docz-site/.docz/app/db.json',
        },
      },
    },
  ],
}

module.exports = merge(config, custom)
