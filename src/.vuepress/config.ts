import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: '/',

    lang: 'zh-CN',
    title: "Joker Xin's Blog",
    description: '基于 vuepress-theme-hope 的博客',

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});
