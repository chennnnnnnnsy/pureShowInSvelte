<script lang="ts">
import {createEventDispatcher } from "svelte";
import MarkText from "../components/MarkText.svelte";
import githubImg from "../assets/github.png";
import rank2019 from "../assets/rank-2019.png";
import rank2020 from "../assets/rank-2020.png";
import rank2021 from "../assets/rank-2021.png";
import arrowRight from "../assets/arrow-right.png";

import {contentWidth,scaleStyle} from '../store'

const title: string = "Sveltes是什么？";
const dispatch = createEventDispatcher()

const imgList = [
  { name: "2019年度前端框架流行排行", img: rank2019 },
  { name: "2020年度前端框架流行排行", img: rank2020 },
  { name: "2021年度前端框架流行排行", img: rank2021 },
];

function nextStep() {
  dispatch('next')
}
</script>

<section class="full-view pt-header absolute left-[100vw] top-0">
  <div class="context-scroll">
    <div class="pb-8 mx-auto relative" style="width: {$contentWidth}px;{$scaleStyle}">
      <h1 class="text-t-color font-medium text-4xl">
        {title}
      </h1>
      <p class="text-t-color text-xl pt-4">
        它是一个前端的框架，如 vue，react。它的作者是前端轮子哥，也是 rollup
        的作者 rich harris，在2019年弄出来的 。
      </p>

      <img src="{githubImg}" alt="githubimg" class="block mt-4" />

      <p class="text-t-color text-xl pt-3">
        可以看到 54.6k star 和 2.6k fork
        ，这是很热门的一个项目了。再来看看它近几年在前端技术流行度排行怎样？看排行榜可以到
        <MarkText name="bestofjs" n="1" />
      </p>
      <div>
        {#each imgList as vo}
          <div class="pt-4 text-center">
            <img src="{vo.img}" alt="rank" />
            <p class="text-xs text-gray-400 pt-1">{vo.name}</p>
          </div>
        {/each}
      </div>

      <p class="text-t-color text-xl pt-3">
        2019年被做出来，至2021年，就一直保持在前五，出道即巅峰！我们也应该了解它，究竟是怎样的框架，它有什么样的特点？
      </p>

      <p class="text-t-color text-xl pt-3">
        Svelte 在<a class="text-blue-500" href="https://svelte.dev/">官网</a
        >主要宣传特点，如下三点
      </p>

      <ul class="pt-4 pl-4">
        <li class="text-xl text-t-color">
          - <i>Write less code</i> (更少的代码)
        </li>
        <li class="text-xl text-t-color">
          - <i>No virtual Dom </i> (没有虚拟Dom)
        </li>
        <li class="text-xl text-t-color">
          - <i>Truly reactive</i> (真实地响应性)
        </li>
      </ul>

      <p class="text-t-color text-xl pt-3">
        上面三个点后面再展开说，现在请带着这三个特点往下看。
      </p>

      <div class="text-right">
        <div on:click="{nextStep}" class="inline-block border-b cursor-pointer border-[#FF3E00] text-[#FF3E00]">
          <i>Next</i><img
            src="{arrowRight}"
            class="ml-2 w-4 inline-block"
            alt="arrow" />
        </div>
      </div>
    </div>
  </div>
</section>
