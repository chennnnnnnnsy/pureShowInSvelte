<style>
#scroll {
  width: 300vw;
  height: 200vh;
  position: relative;
  overflow: hidden;
  transition-property: translate;
}
</style>

<script lang="ts">
import { onMount } from "svelte";
import { toStep, globalPosition } from "./store";

import Header from "./components/Header.svelte";
import Hello from "./pages/hello.svelte";
import Introduction from "./pages/introduction.svelte";
import Usage from "./pages/usage.svelte";
import Point from "./pages/point.svelte";
import Comparision from "./pages/comparision.svelte";
import Result from './pages/result.svelte'

onMount(() => {
  $toStep();
});
</script>

<main class="full-view relative">
  <Header />

  <div id="scroll" class="half-second-transition" style="{$globalPosition}">
    <Hello />
    <Introduction />
    <Usage />
    <Point />
    <Comparision />
    <Result />
  </div>
</main>
