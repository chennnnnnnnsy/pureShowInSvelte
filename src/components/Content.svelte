<script lang="ts">
import arrowRight from "../assets/arrow-right.png";
import {currentPageIndex,pagesNum, toStep, contentWidth, scale } from "../store";

export let className: string = "";
export let title: string = "";
export let ch: number;

let mStyle: string = "";

function getScale(node) {
  const topStyle = "top:" + (($scale.radio - 1) * (+ch / 2.055) + 30) + "px";
  mStyle = `width:${$contentWidth}px;${$scale.style};${topStyle}`;
}

function nextStep() {
  $toStep();
}
</script>

<section class="full-view pt-header absolute {className}">
  <div class="context-scroll">
    <div use:getScale class="pb-8 mx-auto relative" style="{mStyle}">
      <h1 class="text-t-color font-medium text-4xl">{title}</h1>

      <slot />
      
      {#if $currentPageIndex !== $pagesNum - 1 }
        <div class="text-right pt-4">
          <div
            on:click="{nextStep}"
            class="inline-block border-b-2  cursor-pointer border-primary-color text-primary-color">
            <i>Next</i><img
              src="{arrowRight}"
              class="ml-2 w-4 inline-block"
              alt="arrow" />
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
