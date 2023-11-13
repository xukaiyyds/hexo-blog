title: Hexo 常用组件汇总
excerpt: Fluid 和 Volantis 主题内置了许多 Tag 组件，我们可以使用这些组件来丰富自己的文章内容。
categories:
  - 使用指南
tags:
  - Hexo
  - 演示
abbrlink: 430a879f
date: 2021-10-16 21:45:32
updated: 2023-09-03 11:41:00
---
## Fluid 组件

### 标签

```markdown
{% label primary @text %}
```

或者

```html
<span class="label label-primary">text</span>
```

{% label primary @primary %}
{% label default @default %}
{% label info @info %}
{% label success @success %}
{% label warning @warning %}
{% label danger @danger %}

### 便签

```markdown
{% note primary %}
text
{% endnote %}
```

或者

```html
<p class="note note-primary">text</p>
```

{% note primary %}
primary
{% endnote %}
{% note secondary %}
secondary
{% endnote %}
{% note success %}
success
{% endnote %}
{% note danger %}
danger
{% endnote %}
{% note warning %}
warning
{% endnote %}
{% note info %}
info
{% endnote %}
{% note light %}
light
{% endnote %}

### 组图

```markdown
{% gi 5 3-2 %}
  ![风景](https://pic1.imgdb.cn/item/636e733b16f2c2beb1a86832.jpg)
  ![风景](https://pic1.imgdb.cn/item/636e733b16f2c2beb1a86832.jpg)
  ![风景](https://pic1.imgdb.cn/item/636e733b16f2c2beb1a86832.jpg)
  ![星空](https://pic1.imgdb.cn/item/636e736816f2c2beb1a93fba.jpg)
  ![星空](https://pic1.imgdb.cn/item/636e736816f2c2beb1a93fba.jpg)
{% endgi %}
```

{% gi 5 3-2 %}
  ![风景](https://pic1.imgdb.cn/item/636e733b16f2c2beb1a86832.jpg)
  ![风景](https://pic1.imgdb.cn/item/636e733b16f2c2beb1a86832.jpg)
  ![风景](https://pic1.imgdb.cn/item/636e733b16f2c2beb1a86832.jpg)
  ![星空](https://pic1.imgdb.cn/item/636e736816f2c2beb1a93fba.jpg)
  ![星空](https://pic1.imgdb.cn/item/636e736816f2c2beb1a93fba.jpg)
{% endgi %}

更多主题配置请参考：[Hello Fluid](https://hexo.fluid-dev.com/posts/hello-fluid/)

## Volantis 组件

### tab切换

```markdown
{% tabs First unique name %}

<!-- tab First unique name 1 @ri:home-4-line -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab Icon Test @ri:cloud-line -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
```

{% tabs First unique name %}

<!-- tab First unique name 1 @ri:home-4-line -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab Icon Test @ri:cloud-line -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}

### 折叠框

```markdown
{% folding blue open::默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding cyan::默认关闭的折叠框 %}

这是一个默认关闭的折叠框。

{% endfolding %}

{% folding red::查看列表测试 %}

- 你好
- hello

{% endfolding %}

{% folding green::查看列表测试 %}

- 你好
- hello

{% endfolding %}

{% folding yellow::查看列表测试 %}

- 你好
- hello

{% endfolding %}
```

{% folding blue open::默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding cyan::默认关闭的折叠框 %}

这是一个默认关闭的折叠框。

{% endfolding %}

{% folding red::查看列表测试 %}

- 你好
- hello

{% endfolding %}

{% folding green::查看列表测试 %}

- 你好
- hello

{% endfolding %}

{% folding yellow::查看列表测试 %}

- 你好
- hello

{% endfolding %}

### 时间线

```markdown
{% timeline 大标题 %}

{% timenode 时间节点（小标题） %}

正文内容

{% endtimenode %}

{% timenode 时间节点（小标题） %}

正文内容

{% endtimenode %}

{% timenode 时间节点（小标题） %}

正文内容

{% endtimenode %}

{% endtimeline %}
```

{% timeline 大标题 %}

{% timenode 时间节点（小标题） %}

正文内容

{% endtimenode %}

{% timenode 时间节点（小标题） %}

正文内容

{% endtimenode %}

{% timenode 时间节点（小标题） %}

正文内容

{% endtimenode %}

{% endtimeline %}

更多标签配置请查看：[标签插件 - Volantis](https://volantis.js.org/v5/tag-plugins/)