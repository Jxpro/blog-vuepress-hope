import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    '/Development/': [
        {
            text: 'Python',
            icon: 'creative',
            prefix: 'Python/',
            link: 'Python/',
            children: 'structure',
        },
        {
            text: 'Markdown',
            icon: 'creative',
            prefix: 'Markdown/',
            link: 'Markdown/',
            children: 'structure',
        },
        {
            text: 'Docker',
            icon: 'creative',
            prefix: 'Docker/',
            link: 'Docker/',
            children: 'structure',
        },
        {
            text: 'Git',
            icon: 'creative',
            prefix: 'Git/',
            link: 'Git/',
            children: 'structure',
        },
    ],
    '/System/': [
        {
            text: 'Linux',
            icon: 'creative',
            prefix: 'Linux/',
            link: 'Linux/',
            children: 'structure',
        },
        {
            text: 'MacOS',
            icon: 'creative',
            prefix: 'MacOS/',
            link: 'MacOS/',
            children: 'structure',
        },
    ],
    '/Blockchain/': [
        'turing_complete',
        {
            text: '比特币',
            icon: 'creative',
            prefix: 'Bitcoin/',
            link: 'Bitcoin/',
            children: 'structure',
        },
        {
            text: '以太坊',
            icon: 'creative',
            prefix: 'Ethereum/',
            link: 'Ethereum/',
            children: 'structure',
        },
        {
            text: '超极账本',
            icon: 'creative',
            prefix: 'Fabric/',
            link: 'Fabric/',
            children: 'structure',
        },
    ],
});
