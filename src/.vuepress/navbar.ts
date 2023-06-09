import { navbar } from "vuepress-theme-hope";

export default navbar([
    '/',
    {
        text: '开发',
        icon: 'edit',
        prefix: '/Development/',
        children: [
            {
                text: 'Python',
                icon: 'edit',
                link: 'Python/',
            },
            {
                text: 'Markdown',
                icon: 'edit',
                link: 'Markdown/',
            },
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
    {
        text: '系统',
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
]);
