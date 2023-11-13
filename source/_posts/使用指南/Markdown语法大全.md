title: Markdown 语法大全
excerpt: 本文主要介绍 Markdown 的基本语法与扩展语法，让你在写作的过程中深深地爱上 Markdown！
categories:
  - 使用指南
tags:
  - Markdown
  - 演示
abbrlink: f3b61b38
date: 2022-04-20 18:01:00
updated: 2023-09-03 11:41:00
---
## 基本语法

### 标题

{% note success %}
要创建标题的话只需使用井号`#`开头，井号的数量对应标题的级别。比如如果你想要创建一个`<h3></h3>`则可以通过用三个`#`来代替。
{% endnote %}

```markdown
### 标题内容
```

{% note danger %}
注意：
- 标题的井号后面务必要记得加上一个空格。
- 段落之间的 ATX 标题最好使用空行分隔。因为有的 Markdown 引擎不识别缺少前后空行的标题。
{% endnote %}

### 段落

{% note success %}
直接使用空行分隔文本即可。
{% endnote %}

```text
这是一个普通段落
```

这是一个普通段落

{% note info %}
中文传统排版上段落开头有着“空两格”的习惯，可以使用全角空格或者 HTML 实体`&emsp;`。
{% endnote %}

### 加粗和斜体

**加粗**

{% note success %}
要加粗文本可以使用两个星号`**`或者两个下划线`__`包裹待加粗的文本来实现。
{% endnote %}

```markdown
把文本 **加粗** 一下
把文本 __加粗__ 一下
```

把文本 **加粗** 一下
把文本 __加粗__ 一下

{% note danger %}
注意：加粗用星号和用下划线的不同之处在于星号用法前后可以不加空格，但下划线必须要加。
{% endnote %}

```markdown
把文本**加粗**一下
把文本__加粗__一下
```

把文本**加粗**一下
把文本__加粗__一下

**斜体**

{% note success %}
要使文本斜体，可以使用一个星号`*`或者一个下划线`_`包裹待斜体的文本。
{% endnote %}

```markdown
这两个字是 *斜体* 着的
这两个字是 _斜体_ 着的
```

这两个字是 *斜体* 着的
这两个字是 _斜体_ 着的

{% note danger %}
注意：和加粗类似，星号用法前后可以不加空格，但下划线必须要加。
{% endnote %}

### 加粗并斜体

{% note success %}
如果你需要加粗的同时使文本斜体，可以使用三个星号`***`或者三个下划线`___`包裹待斜体的文本。
{% endnote %}

```markdown
同时 ***加粗并斜体*** 的示例
同时 ___加粗并斜体___ 的示例
```

同时 ***加粗并斜体*** 的示例
同时 ___加粗并斜体___ 的示例

### 分割线

{% note success %}
可以通过三个星号`***`、三个短横线`---`或者三个下划线`___`来创建分隔线。
{% endnote %}

```markdown
***
---
___
```

***
---
___

### 删除线

{% note success %}
可以通过删除线划掉文本，创建删除线可以通过一个波浪线`~`或两个波浪线`~~`包裹待删除的文本。
{% endnote %}

```markdown
~我觉得我很帅！~
~~因为我是普信男。~~
```

~我觉得我很帅！~
~~因为我是普信男。~~

### 超链接

{% note success %}
可以通过`[链接文本](URL)`来创建超链接。
{% endnote %}

**普通超链接**

```markdown
推荐阅读：[Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html)
```

推荐阅读：[Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html)

**带有提示标题的超链接**

```markdown
推荐阅读：[Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html "菜鸟教程")
```

推荐阅读：[Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html "菜鸟教程")

### 自动链接

{% note success %}
自动链接是由尖括号`<...>`包裹的绝对 URI 与 Email 地址。它将解析为链接，以 URL 或 Email 地址作为链接标签。
{% endnote %}

```markdown
<https://www.xukaiyyds.cn>
```

<https://www.xukaiyyds.cn>

### 禁止链接

{% note success %}
大部分 Markdown 引擎都是默认开启自动链接的，所以当我们想把一个链接渲染为纯文本时，需要把它变成代码。
{% endnote %}

```markdown
`https://www.xukaiyyds.cn`
```

`https://www.xukaiyyds.cn`

### 图片

{% note success %}
使用感叹号`!`后跟超链接`[]()`就可以渲染图片了。
{% endnote %}

```markdown
![Logo](https://pic.imgdb.cn/item/6279e4a9094754312967c8b0.png)
```

![Logo](https://pic.imgdb.cn/item/6279e4a9094754312967c8b0.png)

## 扩展语法

### 列表

**有序列表**

{% note success %}
有序列表可以通过阿拉伯数字后跟`.`或者`)`来创建，数字不必递增连续。
{% endnote %}

```markdown
1. 列表项一
1. 列表项一
1) 列表项二
1) 列表项二
```

1. 列表项一
1. 列表项一
1) 列表项二
1) 列表项二

**无序列表**

{% note success %}
无序列表可以通过星号`*`、短横线`-`或者加号`+`来开头，后面需要跟一个空格来分隔文本内容。
{% endnote %}

```markdown
* 列表项一
- 列表项二
+ 列表项三
```

* 列表项一
- 列表项二
+ 列表项三

**任务列表**

{% note success %}
通过在普通列表项中添加`[x]`或者`[ ]`来渲染任务列表项。
{% endnote %}

```markdown
- [x] 待办事项一
- [ ] 待办事项二
```

- [x] 待办事项一
- [ ] 待办事项二

### 代码块

{% note success %}
推荐使用围栏代码块语法来排版代码块，即使用<code>```</code>来包裹代码块，并且指定语法高亮语言。
{% endnote %}

**html语法高亮**

````html
```html
<html>
  <head>
  </head>
</html>
```
````

**json语法高亮**

````json
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

{% note success %}
如果需要展示代码块原文 Markdown（就像上面展示的例子那样），可以在最外层使用更多数量的反引号开始，闭合的反引号数量等于开始的数量即可。
{% endnote %}

`````markdown
````
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````
`````

### 表格

**表格排版**

{% note success %}
使用短横线`-`来分隔表头和表身，使用竖线`|`来分隔列，每行开头和结尾的竖线是可选的。
{% endnote %}

```markdown
| Syntax      | Description |
| ---         | ---         |
| Header      | Title       |
| Paragraph   | Text        |
```

| Syntax      | Description |
| ---         | ---         |
| Header      | Title       |
| Paragraph   | Text        |

{% note warning %}
表格中的内容也可以进行排版，比如加粗、强调文本，插入超链接等。但仅限于使用“行级元素”进行排版，不能使用“块级元素”，比如不能使用标题、块引用、列表、分隔线等。
{% endnote %}

**表格对齐**

{% note success %}
如果需要左对齐、居中对齐或者右对齐表格内容，可以通过在`---`中添加冒号`:`实现。冒号仅出现在左边表示左对齐，出现在两边表示居中对齐，仅出现在右边表示右对齐。
{% endnote %}

```markdown
| Syntax      | Description | Test Text     |
| :---        | :---:       | ---:          |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```

| Syntax      | Description | Test Text     |
| :---        | :---:       | ---:          |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

{% note warning %}
如果需要在表格内容中使用竖线`|`，那就需要对其进行转义。可以使用`\|`转义，但更稳妥的做法是写竖线的 HTML实体`&#124;`表示，因为有的 Markdown 引擎不能正确处理表格内容中的`\|`。
{% endnote %}

### 块引用

**块引用的使用**

{% note success %}
要创建块引用的话仅需在段落前加上大于号`>`。
{% endnote %}

```markdown
> 原谅我这一生不羁放纵爱自由，也会怕有一天会跌倒
> 背弃了理想 ，谁人都可以
> 哪会怕有一天只你共我
```

> 原谅我这一生不羁放纵爱自由，也会怕有一天会跌倒
> 背弃了理想 ，谁人都可以
> 哪会怕有一天只你共我

**块引用分段**

{% note success %}
如果需要分段的话可以在分段空行前加上一个`>`。
{% endnote %}

```markdown
> 原谅我这一生不羁放纵爱自由，也会怕有一天会跌倒
> 背弃了理想 ，谁人都可以
>
> 哪会怕有一天只你共我
```

> 原谅我这一生不羁放纵爱自由，也会怕有一天会跌倒
> 背弃了理想 ，谁人都可以
>
> 哪会怕有一天只你共我

**块引用嵌套**

{% note success %}
块引用可以嵌套使用，在段落前添加两个大于号`>>`表示两层嵌套。
{% endnote %}

```markdown
> 原谅我这一生不羁放纵爱自由，也会怕有一天会跌倒
> 背弃了理想 ，谁人都可以
>
>> 哪会怕有一天只你共我
```

> 原谅我这一生不羁放纵爱自由，也会怕有一天会跌倒
> 背弃了理想 ，谁人都可以
>
>> 哪会怕有一天只你共我

**块引用包含其它元素**

{% note success %}
块引用能够包含其他大部分语法元素。CommonMark 规范将块引用定义为容器块，容器块可以包含任意块级元素和行级元素，也就是说块引用可以包含其他任意元素。
{% endnote %}

```markdown
> 段落是块级元素
>
> **加粗**和*强调*是行级元素
```

> 段落是块级元素
>
> **加粗**和*强调*是行级元素

### 脚注的使用

{% note success %}
脚注允许你添加注释和引用，而不会使文档正文混乱。当你创建脚注时，带有链接的上标数字会出现在你引用脚注的位置。 读者可以单击链接以跳转至页面底部的脚注内容处。
{% endnote %}

```
本文参考了 [Markdown 指南中文版](https://www.markdown.xyz/) 的 Markdown基本语法[^1] 和 Markdown扩展语法[^2]。

[^1]: [Markdown 基本语法](https://www.markdown.xyz/basic-syntax/)

[^2]: [Markdown 扩展语法](https://www.markdown.xyz/extended-syntax/)
```

本文参考了 [Markdown 指南中文版](https://www.markdown.xyz/) 的 Markdown基本语法[^1] 和 Markdown扩展语法[^2]。

### 转义字符

{% note success %}
几乎所有 ASCII 标点符号都可以使用反斜杠`\`进行转义。
{% endnote %}

```markdown
\\（反斜杠）\`（反引号）\*（星号）\_（下划线）\{}（花括号）\[]（方括号）\()（圆括号）
```

\\（反斜杠）\`（反引号）\*（星号）\_（下划线）\{}（花括号）\[]（方括号）\()（圆括号）

### 嵌入 HTML

{% note success %}
这在需要设置图片大小、字体颜色时会比较有用，但我并不建议过多使用 HTML 来进行排版，一来是因为这样做实际上并不通用，因为有的 Markdown 引擎因为安全原因会过滤部分标签或者属性；二来是因为这样做太不 Markdown 了！
{% endnote %}

```markdown
**Markdown** 和 <em>HTML</em> 混合排版
```

**Markdown** 和 <em>HTML</em> 混合排版

{% note danger %}
另外，请勿在 HTML 中嵌入 Markdown，这样的话它并不会工作。
{% endnote %}

```markdown
<p>**粗体**不会生效</p>
```

<p>**粗体**不会生效</p>

### 语法规范

{% note success %}
Markdown 语法规范目前尚未形成标准，如下列出的几种语法规范较为主流，其中 CommonMark 和 GFM 是目前最有可能进行标准化的，GFM 是 GitHub 基于 CommonMark 进行的扩展，它几乎已经是事实标准了。
{% endnote %}

- [CommonMark](https://commonmark.org/)
- [GitHub Flavored Markdown ( GFM )](https://github.github.com/gfm/)
- [Markdown Extra](https://michelf.ca/projects/php-markdown/extra/)
- [MultiMarkdown](https://fletcherpenney.net/multimarkdown/)
- [R Markdown](https://rmarkdown.rstudio.com/)

### 参考资料

[^1]: [Markdown 基本语法](https://www.markdown.xyz/basic-syntax/)
[^2]: [Markdown 扩展语法](https://www.markdown.xyz/extended-syntax/)