---
title: Nixos 手记
description: No Description
pubDate: 2024-10-24
author: chillcicada
draft: false
tags:
  - others
---

## Nixos 手记

> 先说结论，在我看来，很多 nix & nixos 问题其实是大差不差的。

~~Arch 用户可以优先考虑 CachyOS 而不是 NixOS~~

偶然的机会，今年三月中旬的时候，在 Tuna 的导引下参与了 [Towards Modern Distro](https://tuna.moe/event/2024/towards-modern-distro/) 的沙龙，也是在此次活动中，见识到了相当多的大佬，~~以及和苹果派的晚餐~~。

正如续本达所说，如果真正想学习一个 Linux 发行版，应该主动把自己置身于这样的工作环境中，才能得到成长。这个说法简直对极了，作为一位长期以来粗浅的 Linux 使用者，终于决定试试一款 Linux 发行版。

Why Nixos？

坦白讲，在此之前，我只有过一些 Ubuntu，CentOS 和 Arch 的使用经验，而且大多数时候是查表的 CV 工程师x。选择 Nixos 的原因，更多是出于兴趣，想要折腾，在参加沙龙之前，我就已经了解了一些 Nixos 的基础知识。

不过想法终究是想法，在此后的两个月，我大部分探索时间都在了解 Nix 的语法和看别人的搭建视频，时间一晃到六月末，趁着期末的间隙，我录了一张 nixos 的盘，正式给电脑刷上 Nixos。

---

说起 Nixos，就得先简单提一嘴 Nix。Nix 的语法不难，总体给我一种写 lua 的感觉，体验也和 Lua 很像，不过比起 Lua 脚本，Nix 性质强大不少，包括惰性求值等函数式语法，而作为 Nixos 的系统配置，完全是 Nixos 和传统 Linux 间的胶水。

Nixos 的坑比我想象的多不少，安装就花了我不少时间（具体的细节已经不记得了，实际是一个下午，但是含糊不清的文档真是折磨），到了晚上，因为前期翻阅了不少文档，nano 配置一下后就上了 vscode-fhs 和 flake，然后我就遇到了第一个恶性 [bug](https://github.com/chillcicada/nixos-config/issues/5)，除了某些应用内的文件树外，浏览文件树会造成 CPU hang out，有时甚至是直接 crash，因为使用华为的电脑，已经料想到了一些不兼容的问题（尽管事后来看更像是软件层次的 bug，硬件还有一些不兼容的地方x），于是退而求其次使用 neovim 作为 editor，neovim 不像 vscode，这里又有了一个新的问题，我的 neovim 是在 windows 配置的，lsp 需要语言环境，打上之后 neovim 一直没法把 lsp 编译好（事后来看是 lockfile ci 引入了一些 break changes），又是一星期不断在 nixos 和 windows 切换的调试中，终于忍无可忍，revert 到了早期版本一了百了。之后是暑假，总之就是很忙，加上没把 nixos 电脑带着，于是玩起了 nixos in wsl，这一部分倒是没什么好讲的，就是简单熟悉了系统级别的配置。暑假结束之后，花了点时间简单重构了一下配置，到现在基本已经能 cover 生活中大部分需求了，很多细碎的 bug 并不致命（比如没法使用指纹解锁x），捣腾的日子也就告一段落，接下来简单讲一些很多 Nixos 用户的问题共性和一些我自己的思考吧。

1. nix 本身没法控制输入输出，用 stable 来控制整个大版本，默认情况下使用 nix-channel 配置的数据源，没有任何版本锁定机制，实际无法确保系统的可复现性，于是 flake 就应运而生，flake 的本质是为系统加上了特定的源，类似于 lock 文件，机理上和 lazy.nvim 很像，这也同时说明为啥使用 git 来管理，因为它使用了 commit hash 来管理 flake 的变更。flake 是 nix 的实验性特性，这里同时也推荐启用 nix 的新特性。
2. home-manager 用来控制用户级别的管理，不过它使用了和 nixos 相同的部分语法，因而，在检索是需要注意使用的是 nixos search 还是 home-manager search。
3. 中文输入法。我的桌面环境是 gnome，开始直接捣腾了 fcitx5，不过没有生效，漫无目的过了很长时间后找到了一个 gnome 插件，这个问题倒是解决了，不过因为 locale 不是系统级的，还有很多问题，比如在 vscode 和 qqnt 等 electron 环境中会失效，于是翻来覆去找了官方 wiki，用的是 ibus（这是 gnome 中推荐的配置），ibus 倒是提供了系统级别的管理，但不幸的是 ibus 中的双拼（自然码）词库和 rime 词库已经没人维护了，以及 ibus 的双拼设计不太合我口味（逆天的 rollback 机理），最终我还是换回了 fcitx5，这里的自然码让我好受一点。
4. 字体，这部分其实翻文档就可以解决，我用的是 fontconfig，写起来也比较轻松，写 nerdfonts 就能 cover 大部分符号字体，但要想原子化字体配置还是等等吧，主要问题在于一些中文字体没有官方的维护，比如 wps（wps 是为数不多在 linux 环境中好用的 office 软件，比起 libreoffiice） 依赖的中文字体和数学字体，所幸的是在 nur 找到了包，steam 等 fhs 环境依赖字体倒是通过单独引入 fontconfig 解决，typora 等则是用 css 来外部引入字体。
5. 显驱，直接按官方的来了。
6. 游戏环境，steam + proton 直接 cover 了大部分，而我玩 gal 和 indie 是大头，因而没什么更高要求。
7. 代理，一些 proxy app 可以 cover 掉用户层次的问题，下载某些没有在 cache 中而是拉取的二进制文件时，如 discord，很可能会遇到网络问题，由于我在寝室不便搭建软路由（实质是不太会x），系统构建参照文档用的脚本来控制，timeout 直接 ctrl c 即可。
8. 虚拟机，qemu + quickemu，如果不追求某些 GPU 挂载的话，跑个 win xp 玩玩上古黄油体验比在 windows 折腾 vm 好。
9. 密码管理，TODO
10. 开发环境，用的 flakehub，疑似目前这个好像用的人不多，避免了自己手写大部分代码x，然后就是根据报错查依赖再导入的事。
11. 打包，TODO

上面这些基本是一个 Nixos 用户可能遇到的问题，更多的，就是参照 nixos wiki，forum 一些社区博客，以及向社区求助，不过依我来看，用心探索应该不至于出现严重问题，尽管一些小众应用在某些操作 crash 是常态（），不过我还没遇到真正急迫的 bug，多看些其他人的配置，基本上自己就能写七七八八了。

之前看过一个讲 “Why you should use nixos” 的视频，其中一点就是希望初学者都来用 Nixos，这个说法其实不无道理，Nixos 的特性真的非常适合一个流动的系统状态，在深入使用中不可避免地涉及打包，这也规训着使用着向函数式构建模式的方向靠拢，当然，这同时也意味着 Nixos 更大的门槛，但我觉得，只要你有兴趣去做，这些应该不成问题。

我的 nixos-config 配置在 <https://github.com/chillcicada/nixos-config>

---

20241208

原先我以为 Fcitx5 是无法用 Nix 管理的（尽管确实如此），不过一些不太会改的配置还是可以管理的。

目前存在的问题，在一些 electron 窗口中 fcitx5 会失效，详见 [#17](https://github.com/chillcicada/nixos-config/issues/17)。
