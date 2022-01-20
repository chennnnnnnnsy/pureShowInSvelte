<script>
import MarkText from "../components/MarkText.svelte";
import Content from "../components/Content.svelte";

import startRealImg from '../assets/startup-realworld.png'

const info = {
  className: "left-[100vw] top-[100vh]",
  title: "与其他框架的比较",
  ch: 1330,
};
</script>

<Content {...info}>

  <p class="text-t-color text-xl pt-4">
    既然比较就要放在同一规则下，这里介绍两个业界都很出名比较工具。
  </p>

  <p class="text-t-color text-xl pt-4 pl-2">
    1. <MarkText name="js-framework-benchmark" n="2"/><span class="mx-2"></span>：这是针对多个javascript框架的简单基准测试。Github 上 4.3K ✨ 。
  </p>
  <p class="text-t-color text-xl pb-4 pt-2 pl-2">
    2. <MarkText name="realworld" n="3"/><span class="mx-2"></span>：这是针对多个javascript框架的简单基准测试。Github 上 4.3K ✨ 。
  </p>
  <div class="h-60 shadow rounded overflow-hidden cursor-pointer relative">
    <div style="background-size: cover;background-image:url({startRealImg});background-color:rgba(255,255,255,0.8)" class="ring-white ring-opacity-80 blur-[6px] absolute top-0 left-0 w-[100%] h-[100%]"></div>
    <div  class="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center text-white text-2xl hover:text-primary-color">首次渲染</div>
  </div>
  <p class="text-2xl text-t-color pt-4 font-medium">首次渲染</p>
</Content>
