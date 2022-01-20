<script>
import MarkText from "../components/MarkText.svelte";
import Content from "../components/Content.svelte";

import startRealImg from "../assets/startup-realworld.png";
import startImg from "../assets/startup.png";
import sizeImg from "../assets/size.png";
import durationImg from "../assets/duration.png";
import memoryImg from "../assets/memory.png";
import vue3VsSvelteImg from "../assets/vue3vsSvelte.png";

const info = {
  className: "left-[100vw] top-[100vh]",
  title: "与其他框架的比较",
  ch: 4182.88,
};

const tipBgColor = "bg-[#76B8C4]";
</script>

<Content {...info}>
  <p class="text-t-color text-xl pt-4">
    既然比较就要放在同一规则下，这里介绍两个业界都很出名比较工具。
  </p>

  <li class="text-t-color text-xl pt-4 ml-4">
    <MarkText name="js-framework-benchmark" n="2" /><span class="mx-2"></span
    >：这是针对多个javascript框架的简单基准测试。Github 上 4.3K ✨ 。
  </li>
  <li class="text-t-color text-xl ml-4">
    <MarkText name="realworld" n="3" /><span class="mx-2"></span
    >：这是针对多个javascript框架的简单基准测试。Github 上 4.3K ✨ 。
  </li>

  <!-- 首次渲染 -->
  <p class="text-2xl text-t-color pt-4 font-medium">首次渲染</p>
  <p class="text-t-color text-xl pt-4 pb-2"><i>js-framework-benchmark</i></p>
  <div class="relative">
    <img src="{startImg}" alt="comparision" class="rounded shadow" />
    <div
      class="absolute right-6 top-1/3 px-4 py-2 {tipBgColor} rounded text-white">
      <p class="text-l">
        1. consistently interactive - 首次渲染至用户可以操作的时间
      </p>
      <p class="text-l">2. total kilobyte weight - 网络请求渲染到页面的时间</p>
    </div>
  </div>
  <p class="text-t-color text-xl pt-4 pb-2"><i>realworld</i></p>
  <img src="{startRealImg}" alt="comparision" class="rounded shadow" />
  <li class="text-gray-600 text-l pt-2 ml-4">
    分数越高，首次渲染越好。依据：首次渲染至用户可以操作的时间。
  </li>

  <!-- 尺寸大小  -->
  <p class="text-2xl text-t-color pt-4 font-medium">尺寸大小</p>
  <p class="text-t-color text-xl pt-4 pb-2"><i>realworld</i></p>
  <img src="{sizeImg}" alt="comparision" class="rounded shadow" />
  <li class="text-gray-600 text-l pt-2 ml-4">行数越少，工作效率就高。</li>

  <!-- Dom的一些操作耗时 -->
  <p class="text-2xl text-t-color pt-4 font-medium">Dom的一些操作耗时</p>
  <p class="text-t-color text-xl pt-4 pb-2"><i>js-framework-benchmark</i></p>
  <div class="relative">
    <img src="{durationImg}" alt="comparision" class="rounded shadow" />
    <div
      class="absolute top-[20rem] right-48 text-white px-4 py-2 {tipBgColor} rounded">
      <p class="text-l">1. 创建 1000 行</p>
      <p class="text-l">2. 更新/替换 1000 行</p>
      <p class="text-l">3. 有 1000 行，每10行更新</p>
      <p class="text-l">4. 选中某一行高亮</p>
      <p class="text-l">5. 在1000行的表中，交换2行位置</p>
      <p class="text-l">6. 移除一行</p>
      <p class="text-l">7. 创建10000行</p>
      <p class="text-l">8. 向有1000行的表加入1000行</p>
      <p class="text-l">9. 清除有1000行的表</p>
    </div>
  </div>

  <!-- 内存使用 -->
  <p class="text-2xl text-t-color pt-4 font-medium">内存使用</p>
  <p class="text-t-color text-xl pt-4 pb-2"><i>js-framework-benchmark</i></p>
  <div class="relative">
    <img src="{memoryImg}" alt="comparision" class="rounded shadow" />
    <div
      class="absolute top-1/3  right-16 px-4 py-2 rounded text-white {tipBgColor}">
      <p class="text-l">1. 页面加载后的内存使用</p>
      <p class="text-l">2. 加入1000行后的内存使用</p>
      <p class="text-l">3. 有1000行，每10行更新5次后内存使用</p>
      <p class="text-l">4. 创建和清除 1000 行，执行5次后的内存使用</p>
    </div>
  </div>

  <!-- Vue3 vs Svelte -->
  <p class="text-2xl text-t-color pt-4 font-medium">Vue3 vs Svelte</p>
  <p class="text-t-color text-xl pb-4 pt-4">
    Evan You
    也亲自下场，用它们去实现规范标准的功能，然后构建，压缩，得出尺寸大小比较
  </p>
  <img src="{vue3VsSvelteImg}" alt="comparision" class="rounded shadow" />
  <p class="text-t-color text-xl pt-4">
    从上图看可以看出，框架运行时的代码，Svelte真的很小，但单个组件的尺寸会比较大。
  </p>
  <p class="text-t-color text-xl pt-4">
    如果把框架的尺寸看成常量，那么组件的数量有个阀值 Vue3 和 Svelte
    的尺寸大致一样；组件数量超过阀值，Svelte 总体的尺寸会大；反之，Vue3 的大。
  </p>
  <p class="text-t-color text-xl pt-4">
    Svelte 是注重编译环节的，运行时的代码是很小很小。而 Vue
    是注重运行时，所以运行时代码很大。相对的，但Svelte单页面的文件会比 Vue
    的大。这两种框架实现方式并没有谁好谁坏，是两个不同分支走向。
  </p>
</Content>
