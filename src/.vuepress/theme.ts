import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: 'https://jxpro.github.io',

    author: {
        name: 'Joker Xin',
        url: 'https://jxpro.github.io',
    },

    iconAssets: 'fontawesome-with-brands',

    logo: '/logo.svg',

    docsDir: 'src',

    // navbar
    navbar,

    // sidebar
    sidebar,

    displayFooter: true,

    blog: {
        description: '爱好编程的在读研究生',
        medias: {
            Email: 'mailto:jxpro@qq.com',
            GitHub: 'https://github.com/Jxpro',
            Gitee: 'https://gitee.com/jxprog',
        },
    },

    plugins: {
        blog: true,

        // all features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ['ts', 'vue'],
            },
            presentation: {
                plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
            },
            stylize: [
                {
                    matcher: 'Recommended',
                    replacer: ({ tag }) => {
                        if (tag === 'em')
                            return {
                                tag: 'Badge',
                                attrs: { type: 'tip' },
                                content: 'Recommended',
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },
    },
});
