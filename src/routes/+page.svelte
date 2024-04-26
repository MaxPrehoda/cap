<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
    Input,
  } from "flowbite-svelte";
  import { CardPlaceholder } from "flowbite-svelte";
</script>

<div class="h-full w-full relative">
  <div
    class="relative flex-col flex gap-5 text-center py-24 font-bold text-6xl"
  >
    <div class="absolute transform-gpu blur-[68px]" aria-hidden="true">
      <div
        class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#ff8c66] to-[#ff4a0e] opacity-30"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      />
    </div>
    <div>Effortlessly Take</div>
    <div>Beautiful Screenshots</div>
    <p class="text-sm">
      Effortlessly create transparent images, maximize efficiency, and elevate
      your creative output with ease
    </p>
  </div>
</div>

<div class="flex justify-center justify-items-center w-screen h-fit">
  <Button href="/">Get Started</Button>
</div>

<div class="flex justify-center justify-items-center">
  <CardPlaceholder size="xxl" class="mt-8" />
</div>
