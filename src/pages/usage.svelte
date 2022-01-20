<script lang="ts">
import code1Img from "../assets/code1.png";
import code2Img from "../assets/code2.png";
import usage1Img from "../assets/usage1.png";
import usage2Img from "../assets/usage2.png";
import usage3Img from "../assets/usage3.png";
import usage4Img from "../assets/usage4.png";

import Content from "../components/Content.svelte";

let usageList = [
  { label: "最基本用法", img: usage1Img },
  {
    label: "循环数组生成 Element、if 条件显示内容、form 表单运用",
    img: usage2Img,
  },
  {
    label:
      "生命周期、父子组件通信、双向绑定、过渡动画、父级下所有子组件共享上下文、use:action",
    img: usage3Img,
  },
  { label: "Svelte自带的 Store", img: usage4Img },
];

let title = "Svelte怎样使用？";
</script>

<Content title="{title}" className="left-[100vw] top-0" ch="{2486.97}">
  <p class="text-t-color text-xl pt-4 pb-4">
    Vue 这样的框架是可以在 html 中引入使用，如下
  </p>
  <img src="{code1Img}" class="rounded shadow" alt="code" />
  <p class="text-t-color text-xl pt-4">
    但是 Svelte 3.x 却不行，以前版本可以的。只能用 SFC(Simgle File Component ) +
    loader + 构建工具(webpack、rollup、vite)，这样方式。文件格式是 .svelte 。
  </p>
  <p class="text-t-color text-xl pb-4 pt-4">这里用 Vite 快捷生成一个项目。</p>
  <img src="{code2Img}" class="rounded shadow" alt="code" />

  {#each usageList as vo}
    <p class="text-2xl text-t-color pt-4 pb-4 font-medium">{vo.label}</p>
    <img src="{vo.img}" class="rounded shadow" alt="usage" />
  {/each}
</Content>
