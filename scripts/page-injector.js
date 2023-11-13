hexo.extend.injector.register(
  "head_end",
  function () {
    return `
        <style>
        @media (max-width: 992px) {
            #canvas_sakura,
            #universe {
                display: none;
            }
        }
        @media (min-width: 992px) {
            [data-user-color-scheme="dark"] #canvas_sakura,
            [data-user-color-scheme="light"] #universe {
                display: none;
            }
        }
        </style>
        `;
  },
  "page"
);

hexo.extend.injector.register(
  "body_end",
  function () {
    return `
        <!-- 樱花背景 -->
        <script src="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/js/sakura-light.min.js"></script>
        <!-- 流星背景 -->
        <canvas id="universe"></canvas>
        <script src="https://jsd.onmicrosoft.cn/gh/xukaiyyds/hexo-blog-cdn@v1.0/js/universe-dark.min.js"></script>
        `;
  },
  "page"
);
