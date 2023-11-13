hexo.extend.injector.register(
  "head_end",
  function () {
    return `
    <!-- Mac代码框 -->
    <link rel="stylesheet" href="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/css/mac-code.min.css">
    <!-- 返回顶部 -->
    <link rel="stylesheet" href="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/css/to-top.min.css">
    <!-- 订阅博客 -->
    <link rel="stylesheet" href="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/css/reward-button.min.css">
    <!-- 分享按钮 -->
    <link rel="stylesheet" href="https://cdn.staticfile.org/social-share.js/1.0.16/css/share.min.css">
    <link rel="stylesheet" href="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/css/wechat-qrcode.min.css">
    <!-- 标签插件 -->
    <link rel="stylesheet" href="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/css/volantis-details.min.css">
    <link rel="stylesheet" href="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/css/volantis-timenode.min.css">
    `;
  },
  "post"
);

hexo.extend.injector.register(
  "body_end",
  function () {
    /* 折叠栏 */
    ("use strict");
    function postFolding(args, content) {
      if (/::/g.test(args)) {
        args = args.join(" ").split("::");
      } else {
        args = args.join(" ").split(",");
      }
      let style = "";
      let title = "";
      if (args.length > 1) {
        style = args[0].trim();
        title = args[1].trim();
      } else if (args.length > 0) {
        title = args[0].trim();
      }
      if (style != undefined) {
        return `<details ${style}><summary> ${title} </summary>
              <div class='content'>
              ${hexo.render
                .renderSync({ text: content, engine: "markdown" })
                .split("\n")
                .join("")}
              </div>
            </details>`;
      }
      return `<details><summary> ${title} </summary>
              <div class='content'>
              ${hexo.render
                .renderSync({ text: content, engine: "markdown" })
                .split("\n")
                .join("")}
              </div>
            </details>`;
    }
    hexo.extend.tag.register("folding", postFolding, {
      ends: true,
    });

    /* 时间线 */
    ("use strict");
    function postTimeline(args, content) {
      if (args.length > 0) {
        return `<div class="timeline"><p class='p h2'>${args}</p>${content}</div>`;
      }
      return `<div class="timeline">${content}</div>`;
    }
    function postTimenode(args, content) {
      if (/::/g.test(args)) {
        args = args.join(" ").split("::");
      } else {
        args = args.join(" ").split(",");
      }
      var time = args[0];
      return `<div class="timenode"><div class="meta"><p>${hexo.render.renderSync(
        { text: time, engine: "markdown" }
      )}</p></div><div class="body">${hexo.render
        .renderSync({ text: content, engine: "markdown" })
        .split("\n")
        .join("")}</div></div>`;
    }
    hexo.extend.tag.register("timeline", postTimeline, {
      ends: true,
    });
    hexo.extend.tag.register("timenode", postTimenode, {
      ends: true,
    });

    /* 订阅博客 */
    const { enable, btn_icon, btn_text, comment, qrcodes } =
      hexo.config.reward_button;
    if (!enable) {
      return null;
    }

    return `
  <!-- 阅读进度 -->
  <script src="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/js/reading-progress.min.js"></script>
  <script>
      new ProgressIndicator();
  </script>
  <!-- 隐藏导航 -->
  <script src="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/js/no-nav.min.js"></script>
  <!-- 返回顶部 -->
  <div id="toTop" class="toTop">
      <i class="iconfont icon-top"></i>
  </div>
  <script src="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/js/to-top.min.js"></script>
  <script>
      var topElement = document.getElementById("toTop");
      var toTop = new ScrollToTop(topElement, {
          showWhen: 360,
          speed: 100
      })
  </script>
  <!-- 订阅博客 -->
  <script src="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/js/reward-button.min.js"></script>
  <script>
      new RewardButton({
          btnIcon: ${btn_icon ? `"${btn_icon}"` : "null"},
          btnText: "${btn_text}",
          comment: "${comment}",
          qrcodes: ${JSON.stringify(qrcodes)}
      }).init();
  </script>
  <!-- 分享按钮 -->
  <script src="https://cdn.staticfile.org/social-share.js/1.0.16/js/social-share.min.js"></script>
  `;
  },
  "post"
);
