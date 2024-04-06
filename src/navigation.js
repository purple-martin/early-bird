import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Our Offering',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'The Team',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Login', href: '/accounts/signup' }],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'Purple Martin', href: '#' },
        { text: 'Mission', href: '#' },
        { text: 'Culture', href: '#' },
      ],
    },
    {
      title: 'Ethical',
      links: [
        { text: 'Saftey & Transparency', href: '#' },
        { text: 'Anti-Trafficking Policy', href: '#' },
        { text: 'Age Verification', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: '#' },
        { text: 'Privacy Policy', href: '#' },
        { text: 'Cookies', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Subscribers', href: '#' },
        { text: 'Creators', href: '#' },
        { text: 'Complaints', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/virgosdesign/secure_athlete' },
  ],
  footNote: `
    © 2024 <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://purplemartin.app/">Purple Martin</a> · All rights reserved.
  `,
};
