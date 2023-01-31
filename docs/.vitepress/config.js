export default {
    lang: 'zh-CN',
    appearance: true,
    title: '学习日记',
    description: 'Just playing around.',
    themeConfig: {
        siteTitle: '学习日记',
        nav: [
            { text: 'Guide', link: '/guide' },
            { text: 'Configs', link: '/configs' },
            { text: 'Changelog', link: 'https://github.com/...' }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' }
                ]
            }
        ],
        editLink: {
            text: 'Edit this page on GitHub',
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
        }
    },
    lastUpdated: true,
    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2019-present Evan You'
    }

}
