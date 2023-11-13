title: 使用 FastGithub 稳定的访问 GitHub
excerpt: GitHub 在国内访问时经常会出现无法打开的情况，针对这个问题我有个不错的解决方案。
categories:
  - 常见问题
tags:
  - GitHub
  - FastGithub
abbrlink: c741a9aa
date: 2023-08-04 12:03:00
updated: 2023-08-07 12:03:58
---
{% note success %}
这是我目前正在使用的解决方案，墙裂推荐！
{% endnote %}

## 安装使用教程

项目地址：[dotnetcore/FastGithub: github加速神器，解决github打不开、用户头像无法加载、releases无法上传下载、git-clone、git-pull、git-push失败等问题](https://github.com/dotnetcore/FastGithub)

建议下载[最新版本](https://github.com/dotnetcore/FastGithub/releases)，如果 GitHub 一点都访问不了的话也没关系，这里同样也准备了 Gitee 的[最新版本](https://gitee.com/XingYuan55/FastGithub/releases)，国内一般都可以正常访问。

选择你需要下载的安装包然后进行解压，我选择的是[fastgithub\_win-x64.zip](https://github.com/dotnetcore/FastGithub/releases/download/2.1.4/fastgithub_win-x64.zip)，解压完成后，`CMD`进入该文件夹运行`fastgithub.exe start`命令或双击打开`FastGithub.UI.exe`即可安装并启动服务，不出意外的话你的 GitHub 就可以正常访问了。

## 遇见的小问题

最近在做项目时，发现我的 XAMPP 出了点问题，我 MySQL 的 Admin 网址打不开了，显示404未找到，根据报错信息我发现居然是 FastGithub 搞的鬼，难道是因为 FastGithub 更改了 XAMPP 的本地代理？因为我不知道是什么原因造成的，更不知道它的底层是什么原理，所以我就先尝试着`fastgithub.exe stop`终止并卸载了服务，结果发现 Admin 网址居然能够神奇的正常访问了。

不过卸载了服务就代表我的 GitHub 又将无法正常访问，就在我苦恼的寻找解决办法时无意中发现 FastGithub 的2.1.4版本介绍中有提到：*修复windows平台拦截了非回环IP的Tcp80和443端口的问题*，虽然不太懂，但我发现我的 Apache 默认端口号居然就是80和443，难道是因为端口冲突了？于是我就尝试着下载了它的最新版本，结果发现我的问题仍然无法得到解决。

但我还是不死心，于是在`httpd.conf`和`httpd-ssl.conf`的两个配置文件中分别更改了它们的端口号为8088和4438，然后重启了 XAMPP。

纳尼！居然还不行？！好吧……我决定向它妥协了，遇事不决问百度🙂

度娘是这么说的：*把网址后面加上:apache的端口号*就可以了，我试了一下8088可以，但4438不行，不过问题总算是解决了👏，终于可以专心的搞项目了。

## 其它解决办法

* [rmbgame/SteamTools](https://gitee.com/rmbgame/SteamTools)【Gitee】
* [BeyondDimension/SteamTools](https://github.com/BeyondDimension/SteamTools)【GitHub】
* [docmirror/dev-sidecar](https://github.com/docmirror/dev-sidecar)【GitHub】