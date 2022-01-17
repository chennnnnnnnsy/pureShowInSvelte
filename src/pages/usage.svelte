<script>
// import { onMount } from "svelte";
import { contentWidth, scaleStyle } from "../store";
</script>

<section class="full-view pt-header absolute left-0 top-0">
  <div class="context-scroll">
    <div
      class=" pb-8 mx-auto relative"
      style="width: {$contentWidth}px;{$scaleStyle}">
      <h1 class="text-t-color font-medium text-4xl">Svelte怎样使用？</h1>
    </div>
  </div>
</section>
