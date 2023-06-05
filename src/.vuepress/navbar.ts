import { navbar } from "vuepress-theme-hope";

export default navbar([
    '/',
    {
        text: '区块链',
        icon: 'edit',
        prefix: '/Blockchain/',
        children: [
            {
                text: '比特币',
                icon: 'edit',
                link: 'Bitcoin/',
            },
            {
                text: '以太坊',
                icon: 'edit',
                link: 'Ethereum/',
            },
            {
                text: '超级账本',
                icon: 'edit',
                link: 'Fabric/',
            },
        ],
    },
    {
        text: '编程语言',
        icon: 'edit',
        prefix: '/Program/',
        children: [
            {
                text: 'Markdown',
                icon: 'edit',
                link: 'Markdown/',
            },
            {
                text: 'Python',
                icon: 'edit',
                link: 'Python/',
            },
        ],
    },
    {
        text: '系统相关',
        icon: 'edit',
        prefix: '/System/',
        children: [
            {
                text: 'Linux',
                icon: 'edit',
                link: 'Linux/',
            },
            {
                text: 'MacOS',
                icon: 'edit',
                link: 'MacOS/',
            },
        ],
    },
    {
        text: '开发工具',
        icon: 'edit',
        prefix: '/Tool/',
        children: [
            {
                text: 'Docker',
                icon: 'edit',
                link: 'Docker/',
            },
            {
                text: 'Git',
                icon: 'edit',
                link: 'Git/',
            },
        ],
    },
]);
