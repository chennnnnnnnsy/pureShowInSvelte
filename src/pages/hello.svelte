<script lang="ts">
import welcomeImg from "../assets/welcome.jpg";
import arrowImg from "../assets/arrow-down.png";
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

const nextStep = () => {
  dispatch("next");
};

</script>

<section
  class="full-view bg-clip-border bg-auto bg-bottom absolute left-[100vw] top-[100vh]"
  style="background-image:url({welcomeImg})">
  <p
    on:click="{nextStep}"
    class="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-2xl text-white cursor-pointer">
    Here we go!
    <img
      class="inline-block w-6 ml-3 animate-bounce"
      src="{arrowImg}"
      alt="arrow" />
  </p>
</section>
