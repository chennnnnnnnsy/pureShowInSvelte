<style>
#scroll {
  width: 100vw;
  height: 200vh;
  position: relative;
  overflow: hidden;
  transition-property: translate;
}
</style>

<script lang="ts">
import { onMount, onDestroy } from "svelte";
import { currentPageIndex } from "./store";

import Header from './components/Header.svelte'
import Hello from "./pages/hello.svelte";
import Introduction from "./pages/introduction.svelte";

/** 当前展示页面的下标 */
let currentIndex: number; // 
// 订阅currentPageIndex，并与本组件的 currenIndex 关联起来
const unsubscribe = currentPageIndex.subscribe((val: number) => {
  currentIndex = val;
});

currentPageIndex.set(0)

/** 当前页面的坐标 */
let scrollPostion: string = "";

/** 下一个页面顺序 */
const stepList: Array<string> = ["hello", "introduction"];

/**
 * 页面矩阵
 * [
 *   [ 'introduction', ],
 *   [ 'hello' ],
 * ]
 */
const viewMap: Array<Array<string>> = [["introduction"], ["hello"]];

/**
 * 去到下一个页面
 * @param event event.detail:forwrad or back.
 */
const nextStep = (event: any) => {
  const type = event.detail || "forward";
  let nextPage: string = "";
  let index = 0;

  if (type === "forward") {
    index = currentIndex + 1;
    if (index > stepList.length) return;
  } else {
    index = currentIndex - 1;
    if (index < 0) return;
  }
  currentPageIndex.set(index);
  nextPage = stepList[index];

  for (let i = 0, len = viewMap.length; i < len; i++) {
    const vo = viewMap[i];

    for (let j = 0, length = vo.length; j < length; j++) {
      const one = vo[j];

      if (one === nextPage) {
        scrollPostion = `translate:${j * 100}vw -${i * 100}vh`;
        return;
      }
    }
  }
};

onMount(() => {
  nextStep({ detail: "forward" });
});

onDestroy(() => {
  // 使用这个退订，currentPageIndex值更新再不会给currentIndex赋值了。
  // 如果是最后一个退订，则会打印 "全部退订"
  unsubscribe();
});
</script>

<main class="full-view">
  <Header />

  <div id="scroll" class="half-second-transition" style="{scrollPostion}">
    <Introduction />
    <Hello on:next="{nextStep}" />
  </div>
</main>
