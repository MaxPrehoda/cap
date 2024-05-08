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

    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    
 
  }
  

</script>

<div class="h-full w-full relative py-12">
  <div class="relative flex-col flex gap-5 text-center font-bold text-6xl">
    <div class="absolute transform-gpu blur-[68px]" aria-hidden="true">
      <div
        class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-[#ff8c66] to-[#ff4a0e] opacity-30"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"/>
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





<div class="flex justify-center justify-items-center w-screen h-fit cursor-pointer">
  <Button size="sm">Get started</Button>
</div>

<div class="flex justify-center justify-items-center">
  <CardPlaceholder size="xxl" class="mt-8" />
</div>

<div class="h-full w-full relative">
  <div
    class="relative flex-col flex gap-5 text-center py-24 font-bold text-6xl"
  >
    <div> 
      <span style="color: #EB4F27; font-bold text-6xl">Easy steps</span> to remove a
    </div>
    <div>image background</div>
    <p class="text-sm">
      Remove background from images of humans, animals or objects and <br> download high-resolution images for free
    </p>
  </div>
</div>



<div class="flex flex-col lg:flex-row items-center justify-center h-96">
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <div class="p-4 border-2 rounded-md	 border-orange-400"> 
      <h3 class="text-2xl font-bold mb-2">Upload image</h3>
      <p class="text-gray-600">For best results choose an image <br> where the subject has clear edges <br> with nothing overlapping.</p>
    </div>
    
    <div class="p-4 border-2 rounded-md	 border-orange-400"> 
      <h3 class="text-2xl font-bold mb-2">Remove background</h3>
      <p class="text-gray-600">upload your image to automatically <br> remove the background in an <br> instant.</p>
    </div>
  
    <div class="p-4 border-2 rounded-md	 border-orange-400"> 
      <h3 class="text-2xl font-bold mb-2">Download image</h3>
      <p class="text-gray-600">Download your new image as a PNG <br> file with a transparent  background <br> to save,share or keep editing</p>
    </div>
  </div>
</div>




<div class="flex flex-col">
  <div class="flex-row flex">
    <div class="relative inline-block text-left">
      <div>
        <button id="dropdown-button" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Options
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <div id="dropdown-menu" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none invisible" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-0">Option 1</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-1">Option 2</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-2">Option 3</a>
        </div>
      </div>
    </div>
  </div>
</div>