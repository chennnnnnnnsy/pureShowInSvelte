<script lang="ts">
import Content from "../components/Content.svelte";

const info = {
  className: "left-0 top-0",
  title: "Svelte的适用场景",
  ch: 772,
};

const links = [
  { label: "Svelte 中文官网", url: "https://www.sveltejs.cn/" },
  {
    label: "Svelte Github Repository",
    url: "https://github.com/sveltejs/svelte",
  },
  {
    label: "2021 JavaScript Rising Stars",
    url: "https://risingstars.js.org/2021/en",
  },
  {
    label: "A RealWorld Comparison of Front-End Frameworks 2020 - 中文译文",
    url: "https://zhuanlan.zhihu.com/p/135823505",
  },
  {
    label: "Results for js web frameworks benchmark - official run",
    url: "https://krausest.github.io/js-framework-benchmark/current.html",
  },
  {
    label: "vue-svelte-size-analysis by 尤雨奚",
    url: "https://github.com/yyx990803/vue-svelte-size-analysis",
  },
  {
    label: "我对Svelte的看法 by Randy",
    url: "https://lutaonan.com/blog/svelte/",
  },
  {
    label: "Best Svelte UI Library 2022",
    url: "https://themeselection.com/best-svelte-ui-library/",
  },
];

const footnotes = [
  {
    label: "Bestofjs",
    url: "https://github.com/bestofjs",
    msg: "The best of JavaScript and the web platform.",
  },
  {
    label: "js-framework-benchmark",
    url: "https://github.com/krausest/js-framework-benchmark",
    msg: "This is a simple benchmark for several javascript frameworks. The benchmarks creates a large table with randomized entries and measures the time for various operations including rendering duration.",
  },
  {
    label: "realworld",
    url: "https://github.com/gothinkster/realworld",
    msg: "用不同的技术实现相同功能的应用。常用来练手 Demo。",
  },
];
</script>

<Content {...info}>
  <p class="text-t-color text-xl pt-4">
    先讲下 Svelte 的一些生态，没有官方的路由库，有个社区版 <a
      href="https://github.com/ItalyPaleAle/svelte-spa-router"
      target="_blank"
      class="text-blue-500">svelte-spa-router</a> ， UI组件库挺多，状态管理自带。用它做一个项目，肯定是没问题的。
  </p>
  <p class="text-t-color text-xl pt-4">
    从上面的比较，可以看得出 Svelte
    不太合适做大型项目，合适做一些官网、活动页之类的小页面，性能杠杠的。同时在客户端做
    SEO 不行，现流行框架的通病，可以用 Svelte 的 SSR。
  </p>

  <h1 class="text-t-color font-medium text-4xl pb-4 pt-10">参考</h1>

  {#each links as item, i}
    <p class="text-t-color text-xl pl-2">
      {i + 1}.
      <a
        href="{item.url}"
        target="_blank"
        class="text-blue-500">{item.label}</a>
    </p>
  {/each}

  <h1 class="text-t-color font-medium text-4xl pb-4 pt-10">脚注</h1>
  {#each footnotes as item, i}
    <p class="text-t-color text-xl pl-2">
      {i + 1}.
      <a
        href="{item.url}"
        target="_blank"
        class="text-blue-500">{item.label}</a>
        - {item.msg}
    </p>
  {/each}
</Content>
