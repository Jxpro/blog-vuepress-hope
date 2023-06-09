import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hotReload: true,

    hostname: 'https://blog.xin127.me',

    author: {
        name: 'Joker Xin',
        url: 'https://blog.xin127.me',
    },

    iconAssets: 'iconfont',

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
        articleInfo: ['Author', 'Date', 'PageView', 'ReadingTime', 'Tag'],
    },

    pageInfo: ['Author', 'Date', 'PageView', 'ReadingTime', 'Tag'],

    plugins: {
        // 设置的star: true这个frontmatter不起作用（resolved）
        autoCatalog: {
            // 如果是第一级目录，设置为文章，这样就可以在文章列表中显示
            frontmatter: path =>
                path.split('/').length === 3 ? { star: true } : {},
        },

        blog: {
            // 默认情况下，所有从 Markdown 源文件中生成的非主页页面，会被作为文章。
            // 所以由autoCatalog插件生成的目录不会作为文章，这里需要通过filter将其设置为文章，这样上面通过frontmatter添加的star: true才会生效
            // 需要注意的是，设置为文章不意味着会在文章列表中显示，文章列表的过滤使用的是另外的方法
            // 文具体来说，章列表的显示需要通过frontmatter中的article来控制，必须有对应的markdown文件，且home: false
            filter: () => true,
            // excerpt: false,
        },

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
