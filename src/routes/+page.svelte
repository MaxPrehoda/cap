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
  let position = 50;

  function handleMouseMove(event) {
    const container = event.currentTarget;
    const boundingRect = container.getBoundingClientRect();
    const x = event.clientX - boundingRect.left;
    const containerWidth = boundingRect.width;
    position = (x / containerWidth) * 100;
  }
</script>

<div class="h-full w-full relative py-12">
  <div class="relative flex-col flex gap-5 text-center font-bold text-6xl">
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
  <div class="relative w-[600px] h-[370px] mx-auto mt-6">
    <div class="absolute inset-0">
      <img
        src="/before.png"
        alt="Before"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div
      class="absolute bg-white inset-0 overflow-hidden"
      style="width: {position}%;"
    >
      <img
        src="/after.png"
        alt="After"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div
      class="absolute inset-0 flex items-center"
      on:mousemove={handleMouseMove}
    >
      <div class="w-0.5 h-full bg-white relative" style="left: {position}%;">
        <div
          class="absolute top-1/2 -translate-y-1/2 -ml-3 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="flex justify-center justify-items-center w-screen h-fit">
  <Button href="/">Get Started</Button>
</div>

<div class="flex justify-center justify-items-center">
  <CardPlaceholder size="xxl" class="mt-8" />
</div>
