<style>
#app {
  width: 100vw;
  height: 200vh;
  position: relative;
  overflow: hidden;
}
</style>

<script lang="ts">
import Hello from "./pages/hello.svelte";
import Introduction from "./pages/introduction.svelte";

let currentPage: string = "";

// position 在矩阵的坐标
const pages = {
  hello: "1-0",
  introduction: "0-0",
};

/**
 * 页面矩阵
 * [
 *   [ 'introduction', ],
 *   [ 'hello' ],
 * ]
 */
const viewMap: Array<Array<string>> = [["introduction"]["hello"]];

const nextStep = (event: any) => {
  console.log("event", event);
};
</script>

<main id="app">
  <Introduction />
  <Hello on:next="{nextStep}" />
</main>
