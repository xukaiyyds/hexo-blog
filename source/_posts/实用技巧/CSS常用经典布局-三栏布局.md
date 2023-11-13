title: CSS 常用经典布局 - 三栏布局
excerpt: 所谓三栏布局就是指页面分为左中右三部分，左右固定，中间部分自适应的一种布局方式。
categories:
  - 实用技巧
tags:
  - CSS
  - 布局
abbrlink: 1db87a14
date: 2023-02-11 14:44:00
updated: 2023-09-03 11:41:00
---
## 原始代码

### html 部分

```html
<div class="container">
    <div class="center">center</div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>
```

### css 部分

```css
body {
    min-width: 630px;
    margin: 0;
}

.center {
    height: 150px;
    background-color: #94E8FF;
}

.left {
    width: 100px;
    height: 150px;
    background-color: #FFB5BF;
}

.right {
    width: 200px;
    height: 150px;
    background-color: #8990D5;
}
```

## 效果展示

### 原始效果

![](https://cdn.xukaiyyds.cn/blog/img/posts/三栏布局1.png)

### 最终效果

![](https://cdn.xukaiyyds.cn/blog/img/posts/三栏布局2.png)

## 实现方法

### flex 布局

```css
.container {
    display: flex;
}

.center {
    flex-grow: 1;
}

.left {
    order: -1;
}
```

### 定位布局

```css
.container {
    position: relative;
}

.center {
    position: absolute;
    left: 100px;
    right: 200px;
}

.left {
    position: absolute;
    left: 0;
}

.right {
    position: absolute;
    right: 0;
}
```

### 圣杯布局

```css
.container {
    overflow: hidden;
    padding-left: 100px;
    padding-right: 200px;
}

.center,
.left,
.right {
    float: left;
}

.left {
    position: relative;
    left: -100px;
    margin-left: -100%;
}

.right {
    position: relative;
    right: -200px;
    margin-left: -200px;
}
```

### 双飞翼布局

```html
<div class="container">
    <div class="center-container">
        <div class="center">center</div>
    </div>
    <div class="left">left</div>
    <div class="right">right</div>
<div>
```

```css
.container {
    overflow: hidden;
}

.center-container,
.left,
.right {
    float: left;
}

.center-container {
    width: 100%;
}

.center-container .center {
    margin-left: 100px;
    margin-right: 200px;
}

.left {
    margin-left: -100%;
}

.right {
    margin-left: -200px;
}
```

### grid 布局

```html
<div class="container">
    <div class="left">left</div>
    <div class="center">center</div>
    <div class="right">right</div>
</div>
```

```css
.container {
    display: grid;
    grid-template-columns: 100px 1fr 200px;
}
```

### table 布局

```html
<div class="container">
    <div class="left">left</div>
    <div class="center">center</div>
    <div class="right">right</div>
</div>
```

```css
.container {
    display: table;
}
.center {
    display: table-cell;
}
```