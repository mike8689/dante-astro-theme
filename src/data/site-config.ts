export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://www.quietlypure.com', // 确保包含协议（https://）
    title: 'QUIETLYPURE',
    description: 'QUIETLYPURE 是一家专注于香薰蜡烛、精油及健康睡眠的生活方式品牌，致力于打造疗愈的生活体验。',
    headerNavLinks: [
        {
            text: '首页',
            href: '/'
        },
        {
            text: '产品系列',
            href: '/projects'
        },
        {
            text: '博客',
            href: '/blog'
        },
        {
            text: '关于我们',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: '关于我们',
            href: '/about'
        },
        {
            text: '联系我们',
            href: '/contact'
        },
        {
            text: '隐私政策',
            href: '/privacy'
        },
        {
            text: '使用条款',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/quietlypure_official'
        },
        {
            text: 'Pinterest',
            href: 'https://pinterest.com/quietlypure'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/quietlypure'
        }
    ],
    hero: {
        title: '欢迎来到 QUIETLYPURE 的世界', // 修改为大写
        text: "我们致力于通过自然的香气与温柔的质感，打造疗愈的生活方式。探索我们的香薰蜡烛、精油及健康睡眠产品，让每一天都充满仪式感与平静。",
        image: {
            src: 'https://fontanacandlecompany.com/cdn/shop/files/Fontana_April24_0041.jpg?v=1740155647&width=1200',
            alt: '一盏点燃的香薰蜡烛，散发着温暖的光芒'
        },
        actions: [
            {
                text: '探索我们的产品',
                href: '/blog'
            }
        ]
    },
    subscribe: {
        title: '订阅 QUIETLYPURE 新闻', // 修改为大写
        text: '每周一次更新，将最新的博客和产品资讯直接发送到您的邮箱。',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;


