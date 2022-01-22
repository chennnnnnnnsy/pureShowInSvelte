<script lang="ts">
import logoImg from "../assets/svelte.png";
import { currentPageIndex } from "../store";

let currentIndex: number;

currentPageIndex.subscribe((val: number) => {
  currentIndex = val;
});

/** title的style */
const themeNameStyles = [
  "top-[20%] text-8xl text-center",
  "top-0 bg-[#D0DCC4] mx-0 shadow-md text-xl",
];
</script>

<div
  class="z-10 absolute w-screen transition-all half-second-transition  px-6 py-2  {currentIndex ===
  0
    ? themeNameStyles[0]
    : themeNameStyles[1]}">
  <img
    class="align-middle half-second-transition transition-all inline-block {currentIndex ===
    0
      ? 'w-40'
      : 'w-9'}"
    src="{logoImg}"
    alt="logo" />
  <h2 class="inline-block align-middle text-priamry-color font-medium">
    Svelte分享
  </h2>
</div>
