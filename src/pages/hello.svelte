<script lang="ts">
import welcomeImg from "../assets/welcome.jpg";
import logoImg from "../assets/svelte.png";
import arrowImg from "../assets/arrow-down.png";
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

const nextStep = () => {
  dispatch("next", "hello");
};

const msg: string = "Svelte分享";
</script>

<section
  class="full-view bg-clip-border bg-auto bg-bottom"
  style="background-image:url({welcomeImg})">
  <img class="w-2/12 mx-auto mt-72" src="{logoImg}" alt="logo" />
  <h2
    class="mt-5 text-center text-primary-color text-3xl font-medium lg:text-8xl">
    {msg}
  </h2>
  <p
    on:click="{nextStep}"
    class="absolute bottom-1/3 left-1/2 -translate-x-1/2 text-center text-2xl text-white cursor-pointer">
    Here we go!
    <img
      class="inline-block w-6 ml-3 animate-bounce"
      src="{arrowImg}"
      alt="arrow" />
  </p>
</section>
