title: CSS 常用经典布局 - 两栏布局
excerpt: 所谓两栏布局就是指页面分为左右两部分，一栏固定宽度，一栏自适应的一种布局方式。
categories:

- 实用技巧
  tags:
- CSS
- 布局
  abbrlink: edc505a4
  date: 2023-02-11 13:45:00
  updated: 2023-09-03 11:41:00

---

## 原始代码

### html 部分

```html
<div class="container">
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

.left {
  width: 100px;
  height: 100px;
  background-color: #ffb5bf;
}

.right {
  height: 100px;
  background-color: #94e8ff;
}
```

## 效果展示

### 原始效果

![](https://cdn.xukaiyyds.cn/img/posts/两栏布局1.png)

### 最终效果

![](https://cdn.xukaiyyds.cn/img/posts/两栏布局2.png)

## 实现方法

### 使用 float

**第一种方法**

```css
.container {
  overflow: hidden;
}

.left {
  float: left;
}

.right {
  margin-left: 100px;
}
```

**第二种方法**

```css
.container {
  overflow: hidden;
}

.left {
  float: left;
}

.right {
  overflow: auto;
}
```

**第三种方法**

```css
.container {
  overflow: hidden;
}

.left {
  float: left;
}

.right {
  float: left;
  width: calc(100% - 100px);
}
```

### 使用 inline-block

```css
.container {
  font-size: 0;
}

.left,
.right {
  display: inline-block;
}

.right {
  width: calc(100% - 100px);
}
```

### 使用 absolute

```css
.container {
  position: relative;
}

.left {
  position: absolute;
}

.right {
  margin-left: 100px;
}
```

### 使用 flex

```css
.container {
  display: flex;
}

.right {
  flex: 1;
}
```

### 使用 grid

```css
.container {
  display: grid;
  grid-template-columns: 100px auto;
}
```

### 使用 table

```css
.container {
  display: table;
  width: 100%;
}

.left,
.right {
  display: table-cell;
}
```
