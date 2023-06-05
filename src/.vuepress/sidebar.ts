import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    '/Blockchain/': [
        {
            text: '比特币',
            icon: 'creative',
            prefix: 'Bitcoin/',
            link: 'bitcoin/',
            children: 'structure',
        },
        {
            text: '以太坊',
            icon: 'creative',
            prefix: 'Ethereum/',
            link: 'ethereum/',
            children: 'structure',
        },
        {
            text: '超极账本',
            icon: 'creative',
            prefix: 'Fabric/',
            link: 'fabric/',
            children: 'structure',
        },
    ],
    '/Program/': [
        {
            text: 'Markdown',
            icon: 'creative',
            prefix: 'Markdown/',
            link: 'markdown/',
            children: 'structure',
        },
        {
            text: 'Python',
            icon: 'creative',
            prefix: 'Python/',
            link: 'python/',
            children: 'structure',
        },
    ],
    '/System/': [
        {
            text: 'Linux',
            icon: 'creative',
            prefix: 'Linux/',
            link: 'linux/',
            children: 'structure',
        },
        {
            text: 'MacOS',
            icon: 'creative',
            prefix: 'MacOS/',
            link: 'macos/',
            children: 'structure',
        },
    ],
    '/Tool/': [
        {
            text: 'Docker',
            icon: 'creative',
            prefix: 'Docker/',
            link: 'docker/',
            children: 'structure',
        },
        {
            text: 'Git',
            icon: 'creative',
            prefix: 'Git/',
            link: 'git/',
            children: 'structure',
        },
    ],
});
