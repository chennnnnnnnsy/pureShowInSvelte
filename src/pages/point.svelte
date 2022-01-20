<script lang="ts">
import Content from "../components/Content.svelte";

import reactive1Img from "../assets/reactive1.png";
import reactive2Img from "../assets/reactive2.png";
import reactive3Img from "../assets/reactive3.png";

const info = {
  className: "left-0 top-[100vh]",
  title: "三个特点",
  ch: 1396,
};
</script>

<Content {...info}>
  <p class="text-t-color text-xl pt-4">
    看完例子之后，大家对 svelte 的写法都大致了解了。现在结合例子说下三个特点。
  </p>
  <p class="text-2xl text-t-color pt-4 font-medium">Write less code</p>
  <p class="text-t-color text-xl pt-4">
    Svelte 和 Vue 一样是使用模版语言(html、css、js)，而不是 React 使用
    jsx。就都使用了模版语言的前两者比较，写同样的页面 Svelte
    所写的代码少很多。这就是提高工作效率的呀！
  </p>
  <p class="text-2xl text-t-color pt-4 font-medium">No virtual Dom</p>
  <p class="text-t-color text-xl pt-4">
    从上面看构建后文件，可以看到 Svelte 是直接操作
    Dom。回到最开始的方式，所谓武功到达最高境界是返璞归真。所以 runtime code
    的体积很小。运行项目不用保存一份虚拟 Dom ，简洁
  </p>
  <p class="text-t-color text-xl pt-4">
    这时候会有人疑问直接操作 Dom 性能会好吗？那先想一想，而且虚拟 Dom
    真的快吗？虚拟 Dom 的主要作用是与真实 Dom
    进行对比，找出需要被修改的节点，快不快主要是看 Dom diff
    的算法。下面会有对比图。
  </p>
  <p class="text-2xl text-t-color pt-4 font-medium">Truly reactive</p>
  <p class="text-t-color text-xl pt-4 pb-4">
    真实的反应能力。怎样去理解这句话呢。看代码
  </p>
  <img src="{reactive1Img}" class="shadow rounded" alt="reactive" />
  <p class="text-t-color text-xl pt-4 pb-4">
    现在说的反应性，就是 c 依赖的变量变了， 它也跟着变呢。Vue 用到
    defineProperty 或 Proxy。除了这两个呢？如下
  </p>
  <img src="{reactive2Img}" class="shadow rounded" alt="reactive" />
  <p class="text-t-color text-xl pt-4 pb-4">
    每次依赖的变量改变，就执行一个 update函数 。虽然很蠢，但 Svelte
    就是做这样的事。但不是我们去写，在编译时会帮我们处理好的。写 Svelte
    时是这样的：
  </p>
  <img src="{reactive3Img}" class="shadow rounded" alt="reactive" />
  <p class="bg-[#76B8C4] px-4 py-2 rounded mt-4 text-white">
    : 其实也是 js 的合法语法 - <a
      href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label"
      class="underline hover:text-primary-color">Label MDN</a>
  </p>
  <p class="text-t-color text-xl pt-4 pb-4">
    上面说到没有虚拟 Dom ，UI 的变化更新就是像这样会有一个这样的 update函数
    去操作真实 Dom。
  </p>
  <p class="text-t-color text-xl pt-4 pb-4">
    Svelte 就是编译的时候，收集了依赖，实现这些反应性。
  </p>
</Content>
