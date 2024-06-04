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

    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementById("dropdown-menu");
  }
</script>

<div class="h-full w-full relative py-12">
  <div class="relative flex-col flex gap-5 text-center font-bold text-6xl">
    <div class="absolute transform-gpu blur-[68px]" aria-hidden="true">
      <div
        class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-[#ff8c66] to-[#ff4a0e] opacity-30"
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
  <div class="relative w-[700px] h-[470px] mx-auto mt-6">
    <div class="absolute inset-0">
      <img
        src="https://www.slazzer.com/static/images/sample/png/demo-001.jpg"
        alt="Before"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div
      class="absolute bg-white inset-0 overflow-hidden"
      style="width: {position}%;"
    >
      <img
        src="https://www.slazzer.com/static/images/sample/jpg/demo-001.jpg"
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

<div
  class="flex justify-center justify-items-center w-screen h-fit cursor-pointer"
>
  <button
    class="px-11 py-3 rounded-lg whitespace-nowrap flex items-center text-white bg-[#EB4F27]"
  >
    <svg
      class="mr-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
    >
      <g clip-path="url(#clip0_2475_490)">
        <path
          d="M29.6768 13.3935C29.0277 13.2757 28.3988 13.1151 27.8077 12.9163C23.4744 11.4591 21.0249 7.91868 20.2189 3.36096C20.1424 2.92919 19.5195 2.92913 19.443 3.36096C18.5063 8.65702 15.3889 12.4023 10.012 13.4002C9.58443 13.4796 9.58455 14.0958 10.0123 14.175C15.3395 15.1603 18.5115 18.8985 19.4449 24.1523C19.5037 24.4833 19.8532 24.485 19.8333 24.4773C20.0244 24.4771 20.1878 24.3396 20.2208 24.1515C20.6961 21.4422 22.0304 17.7613 25.6886 15.6122C26.8572 14.9263 28.1994 14.4407 29.6776 14.1686C29.8647 14.1342 30.0005 13.971 30.0003 13.7808C30.0001 13.5904 29.8639 13.4275 29.6768 13.3935Z"
          fill="url(#paint0_linear_2475_490)"
        />
        <path
          d="M29.6768 13.3935C29.0277 13.2757 28.3988 13.1151 27.8077 12.9163C23.4744 11.4591 21.0249 7.91868 20.2189 3.36096C20.1424 2.92919 19.5195 2.92913 19.443 3.36096C18.5063 8.65702 15.3889 12.4023 10.012 13.4002C9.58443 13.4796 9.58455 14.0958 10.0123 14.175C15.3395 15.1603 18.5115 18.8985 19.4449 24.1523C19.5037 24.4833 19.8532 24.485 19.8333 24.4773C20.0244 24.4771 20.1878 24.3396 20.2208 24.1515C20.6961 21.4422 22.0304 17.7613 25.6886 15.6122C26.8572 14.9263 28.1994 14.4407 29.6776 14.1686C29.8647 14.1342 30.0005 13.971 30.0003 13.7808C30.0001 13.5904 29.8639 13.4275 29.6768 13.3935Z"
          fill="url(#paint1_linear_2475_490)"
        />
        <path
          d="M12.3705 23.6141C10.8376 23.1058 9.82366 21.9634 9.33031 20.3847C9.24165 20.1013 8.94288 20.1044 8.95425 20.1083C8.78204 20.1083 8.62976 20.2202 8.57831 20.3845C8.10031 21.9104 7.09999 23.0778 5.53806 23.6126C5.18409 23.7338 5.18374 24.2366 5.53812 24.358C7.08991 24.8892 8.09673 26.0474 8.57878 27.5877C8.66773 27.8718 8.96597 27.8676 8.95548 27.864C9.12798 27.8637 9.28021 27.7512 9.33118 27.5864C9.68767 26.4334 10.3166 25.542 11.2004 24.9368L11.2004 24.9368C12.1667 24.2748 12.6411 24.4669 12.6404 23.9874C12.6402 23.8179 12.5315 23.6675 12.3705 23.6141Z"
          fill="url(#paint2_linear_2475_490)"
        />
        <path
          d="M7.09901 5.64148C5.56011 5.13112 4.55048 3.98439 4.05876 2.41202C3.97017 2.12861 3.67146 2.13177 3.68277 2.13564C3.51056 2.13564 3.35827 2.24755 3.30683 2.41179C2.82982 3.93446 1.83161 5.10388 0.266575 5.63995C-0.0873901 5.76118 -0.0877417 6.26403 0.266633 6.38538C1.82224 6.91794 2.82648 8.07892 3.3073 9.61507C3.39624 9.89913 3.6946 9.89503 3.68394 9.89134C3.85644 9.89105 4.00872 9.77855 4.0597 9.61384C4.64991 7.70503 5.83849 7.05382 5.92907 6.96423C6.89259 6.304 7.3696 6.49173 7.36896 6.01489C7.36866 5.84521 7.25991 5.69485 7.09901 5.64148Z"
          fill="url(#paint3_linear_2475_490)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2475_490"
          x1="19.8459"
          y1="3.03711"
          x2="19.8459"
          y2="24.4792"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.0001" stop-color="#FFFBE4" />
          <stop offset="1" stop-color="#FFFEFC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2475_490"
          x1="19.8459"
          y1="3.03711"
          x2="19.8459"
          y2="24.4792"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.0001" stop-color="#FFFBE4" />
          <stop offset="1" stop-color="#FFFEFC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2475_490"
          x1="8.95642"
          y1="20.1074"
          x2="8.95642"
          y2="27.8648"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.0001" stop-color="#FFFBE4" />
          <stop offset="1" stop-color="#FFFEFC" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2475_490"
          x1="3.68497"
          y1="2.13477"
          x2="3.68497"
          y2="9.89219"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.0001" stop-color="#FFFBE4" />
          <stop offset="1" stop-color="#FFFEFC" />
        </linearGradient>
        <clipPath id="clip0_2475_490">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg> Get started</button
  >
</div>

<div class="h-full w-full relative">
  <div
    class="relative flex-col flex gap-5 text-center py-24 font-bold text-6xl"
  >
    <div>
      <span
        class="from-red-500 to-orange-500 font-bold text-6xl bg-gradient-to-r bg-clip-text text-transparent"
        >Compatible</span
      > with
    </div>
    <div>most file types</div>
  </div>
</div>

<div
  class="mt-16 md:mt-0 flex flex-col items-center gap-12 max-w-7xl mx-auto w-full"
>
  <div
    class="w-full inline-flex flex-nowrap overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
  >
    <ul
      class="flex animate-infinite-scroll items-center justify-center [&_li]:mx-4 [&_li]:md:mx-8 [&_img]:max-w-none"
    >
      <li>
        <img src="/gif.png" alt="gif" class="w-20 h-20 opacity-25" />
      </li>
      <li>
        <img src="/heic.png" alt="heic" class="w-20 h-20 opacity-25" />
      </li>
      <li>
        <img src="/jpeg.png" alt="jpeg" class="w-20 h-20 opacity-25" />
      </li>
      <li>
        <img src="/png.png" alt="png" class="w-20 h-20 opacity-25" />
      </li>
      <li>
        <img src="/svg.png" alt="svg" class="w-20 h-20 opacity-25" />
      </li>
    </ul>
    <ul
      class="flex animate-infinite-scroll items-center justify-center [&_li]:mx-4 [&_li]:md:mx-8 [&_img]:max-w-none"
      aria-hidden="true"
    >
      <li>
        <img src="/gif.png" alt="gif" class="w-20 h-20 opacity-25" />
      </li>
      <li>
        <img src="/heic.png" alt="heic" class="w-20 h-20 opacity-25" />
      </li>
      <li>
        <img src="/jpeg.png" alt="jpeg" class="w-20 h-20 opacity-25" />
      </li>
      <li>
        <img src="/png.png" alt="png" class="w-20 h-20 opacity-25" />
      </li>
      <li>
        <img src="/svg.png" alt="svg" class="w-20 h-20 opacity-25" />
      </li>
    </ul>
  </div>
</div>

<div class="h-full w-full relative">
  <div
    class="relative flex-col flex gap-5 text-center py-24 font-bold text-6xl"
  >
    <div>
      <span
        class="from-red-500 to-orange-500 font-bold text-6xl bg-gradient-to-r bg-clip-text text-transparent"
        >Easy steps</span
      > to remove a
    </div>
    <div>image background</div>
    <p class="text-sm">
      Remove background from images of humans, animals or objects and <br /> download
      high-resolution images for free
    </p>
  </div>
</div>

<div
  class="flex flex-col lg:flex-row items-center mt-48 justify-center h-14 pb-48 pt-11"
>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <a
      href="/app"
      class="group hover:bg-[#EB4F27] transition-all hover:ring-[#EB4F27] h-64 rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:shadow-[0_3px_20px_0_rgb(166_163_239_/_50%)] hover:-translate-y-4"
    >
      <div class="flex items-center mb-11">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-upload mr-2 group-hover:stroke-white"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
        <h3 class="group-hover:text-white text-2xl font-bold">Upload image</h3>
      </div>
      <p class="group-hover:text-white text-gray-600 mb-11">
        For best results choose an image <br />
        where the subject has clear edges <br />
        with nothing overlapping.
      </p>
      <div
        class="bg-[#EB4F27] group-hover:bg-white rounded-full w-12 py-1 mt-auto flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right group-hover:stroke-black"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </a>

    <a
      href="/app"
      class="group hover:bg-[#EB4F27] transition-all hover:ring-[#EB4F27] h-64 rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:shadow-[0_3px_20px_0_rgb(166_163_239_/_50%)] hover:-translate-y-4"
    >
      <div class="flex items-center mb-11">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-badge-minus group-hover:stroke-white"
        >
          <path
            d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          />
          <line x1="8" x2="16" y1="12" y2="12" />
        </svg>
        <h3 class="group-hover:text-white text-2xl font-bold ml-2">
          Remove background
        </h3>
      </div>
      <p class="group-hover:text-white text-gray-600">
        Upload your image to automatically <br />
        remove the background in an <br />
        instant.
      </p>
      <div
        class="bg-[#EB4F27] group-hover:bg-white rounded-full w-12 py-1 mt-auto flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right group-hover:stroke-black"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </a>

    <a
      href="/app"
      class="group hover:bg-[#EB4F27] transition-all hover:ring-[#EB4F27] h-64 rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:drop-shadow-xl hover:-translate-y-4"
    >
      <div class="flex items-center mb-11">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-download group-hover:stroke-white"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        <h3 class="group-hover:text-white text-2xl font-bold ml-2">
          Download image
        </h3>
      </div>
      <p class="group-hover:text-white text-gray-600">
        Download your new image as a PNG <br />
        file with a transparent background <br />
        to save, share or keep editing.
      </p>
      <div
        class=" bg-[#EB4F27] group-hover:bg-white hover:bg-black rounded-full w-12 py-1 mt-auto flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="group-hover:stroke-black lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </a>
  </div>
</div>
