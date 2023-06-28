import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,

    config: (md) => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-footnote"));
    },
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
      title: "NixOS & Flakes Book",
      description: "An unofficial and opinionated book for beginners",

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/" },
          { text: "Get Started", link: "/introduction/index.md" },
          { text: "Best Practices", link: "/best-practices/intro.md" },
        ],

        sidebar: [
          {
            text: "Get Started",
            items: [
              { text: "Introduction", link: "/introduction/index.md" },
              {
                text: "Advantages and Disadvantages",
                link: "/introduction/advantages-and-disadvantages.md",
              },
              {
                text: "Installation",
                link: "/introduction/installation.md",
              },
            ],
          },
          {
            text: "The Nix Language",
            items: [{ text: "Basics", link: "/the-nix-language/index.md" }],
          },
          {
            text: "NixOS with Flakes",
            items: [
              {
                text: "Get Started with NixOS",
                link: "/nixos-with-flakes/get-started-with-nixos.md",
              },
              {
                text: "Introduction to Flakes",
                link: "/nixos-with-flakes/introduction-to-flakes.md",
              },
              {
                text: "NixOS with Flakes Enabled",
                link: "/nixos-with-flakes/nixos-with-flakes-enabled.md",
              },
              {
                text: "Getting Started with Home Manager",
                link: "/nixos-with-flakes/start-using-home-manager.md",
              },
              {
                text: "Modularize the Configuration",
                link: "/nixos-with-flakes/modularize-the-configuration.md",
              },
              {
                text: "Updating the System",
                link: "/nixos-with-flakes/update-the-system.md",
              },
              {
                text: "Downgrading or Upgrading Packages",
                link: "/nixos-with-flakes/downgrade-or-upgrade-packages.md",
              },
              {
                text: "Other useful Tips",
                link: "/nixos-with-flakes/other-useful-tips.md",
              },
            ],
          },
          {
            text: "Nixpkgs's Advanced Usage",
            items: [
              { text: "Introduction", link: "/nixpkgs/intro.md" },
              { text: "callPackage", link: "/nixpkgs/callpackage.md" },
              { text: "Overridding", link: "/nixpkgs/overriding.md" },
              { text: "Overlays", link: "/nixpkgs/overlays.md" },
            ],
          },
          {
            text: "Best Practices",
            items: [
              { text: "Introduction", link: "/best-practices/intro.md" },
              {
                text: "Run downloaded binaries on NixOS",
                link: "/best-practices/run-downloaded-binaries-on-nixos.md",
              },
              {
                text: "Simplify NixOS-related Commands",
                link: "/best-practices/simplify-nixos-related-commands.md",
              },
              {
                text: "Debug with nix repl",
                link: "/best-practices/debug-with-nix-repl.md",
              },
            ],
          },

          {
            text: "Other Usage of Flakes",
            items: [
              { text: "Introduction", link: "/other-usage-of-flakes/intro.md" },
              {
                text: "Flake Inputs",
                link: "/other-usage-of-flakes/inputs.md",
              },
              {
                text: "Flake Outputs",
                link: "/other-usage-of-flakes/outputs.md",
              },
              {
                text: "The New CLI",
                link: "/other-usage-of-flakes/the-new-cli.md",
              },
            ],
          },
          {
            text: "Dev Environemnts on NixOS",
            items: [
              { text: "Introduction", link: "/development/intro.md" },
              {
                text: "Dev Environments",
                link: "/development/dev-environments.md",
              },
              {
                text: "Packaging 101",
                link: "/development/packaging-101.md",
              },
              {
                text: "Cross-platform Compilation",
                link: "/development/cross-platform-compilation.md",
              },
              {
                text: "Distribution Building",
                link: "/development/distributed-building.md",
              },
              {
                text: "Kernel Development",
                link: "/development/kernel-development.md",
              },
            ],
          },
          {
            text: "Advanced Topics",
            items: [{ text: "Links", link: "/advanced-topics/index.md" }],
          },
        ],

        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/ryan4yin/nixos-and-flakes-book",
          },
        ],
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      title: "NixOS 与 Flakes",
      description: "一份非官方的新手指南",

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "开始使用", link: "/zh/introduction/index.md" },
          { text: "最佳实践", link: "/zh/best-practices/intro.md" },
        ],

        sidebar: [
          {
            text: "开始使用",
            items: [
              { text: "简介", link: "/zh/introduction/index.md" },
              {
                text: "优缺点",
                link: "/zh/introduction/advantages-and-disadvantages.md",
              },
              {
                text: "安装",
                link: "/zh/introduction/installation.md",
              },
            ],
          },
          {
            text: "Nix 语言",
            items: [
              { text: "快速入门", link: "/zh/the-nix-language/index.md" },
            ],
          },

          {
            text: "NixOS 与 Flakes",
            items: [
              {
                text: "开始使用 NixOS",
                link: "/zh/nixos-with-flakes/get-started-with-nixos.md",
              },
              {
                text: "Flakes 简介",
                link: "/zh/nixos-with-flakes/introduction-to-flakes.md",
              },
              {
                text: "使用 Flakes 管理 NixOS",
                link: "/zh/nixos-with-flakes/nixos-with-flakes-enabled.md",
              },
              {
                text: "安装使用 Home Manager",
                link: "/zh/nixos-with-flakes/start-using-home-manager.md",
              },
              {
                text: "模块化系统配置",
                link: "/zh/nixos-with-flakes/modularize-the-configuration.md",
              },
              {
                text: "更新系统",
                link: "/zh/nixos-with-flakes/update-the-system.md",
              },
              {
                text: "降级或升级软件包",
                link: "/zh/nixos-with-flakes/downgrade-or-upgrade-packages.md",
              },
              {
                text: "其他杂七杂八的内容",
                link: "/zh/nixos-with-flakes/other-useful-tips.md",
              },
            ],
          },
          {
            text: "Nixpkgs 高级用法",
            items: [
              { text: "简介", link: "/zh/nixpkgs/intro.md" },
              { text: "callPackage", link: "/zh/nixpkgs/callpackage.md" },
              { text: "Overridding", link: "/zh/nixpkgs/overriding.md" },
              { text: "Overlays", link: "/zh/nixpkgs/overlays.md" },
            ],
          },
          {
            text: "NixOS 最佳实践",
            items: [
              { text: "简介", link: "/zh/best-practices/intro.md" },
              {
                text: "运行非 NixOS 的二进制文件",
                link: "/zh/best-practices/run-downloaded-binaries-on-nixos.md",
              },
              {
                text: "使用 Makefile 简化常用命令",
                link: "/zh/best-practices/simplify-nixos-related-commands.md",
              },
              {
                text: "使用 nix repl 查看源码、调试配置",
                link: "/zh/best-practices/debug-with-nix-repl.md",
              },
            ],
          },
          {
            text: "Flakes 的其他玩法",
            items: [
              { text: "简介", link: "/zh/other-usage-of-flakes/intro.md" },
              {
                text: "Flake Inputs",
                link: "/zh/other-usage-of-flakes/inputs.md",
              },
              {
                text: "Flake Outputs",
                link: "/zh/other-usage-of-flakes/outputs.md",
              },
              {
                text: "The New CLI",
                link: "/zh/other-usage-of-flakes/the-new-cli.md",
              },
            ],
          },
          {
            text: "在 NixOS 上进行开发工作",
            items: [
              { text: "简介", link: "/zh/development/intro.md" },
              {
                text: "各语言的开发环境",
                link: "/zh/development/dev-environments.md",
              },
              {
                text: "软件打包",
                link: "/zh/development/packaging-101.md",
              },
              {
                text: "跨平台编译",
                link: "/zh/development/cross-platform-compilation.md",
              },
              {
                text: "分布式构建",
                link: "/zh/development/distributed-building.md",
              },
              {
                text: "内核开发",
                link: "/zh/development/kernel-development.md",
              },
            ],
          },
          {
            text: "其他进阶话题",
            items: [{ text: "简介", link: "/zh/advanced-topics/index.md" }],
          },
        ],

        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/ryan4yin/nixos-and-flakes-book",
          },
        ],
      },
    },
  },
});
