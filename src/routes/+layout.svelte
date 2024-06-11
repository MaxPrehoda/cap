<script>
  import { onMount } from "svelte";
  import "../app.pcss";

  import {
    Navbar,
    NavBrand,
    NavUl,
    NavHamburger,
    NavLi,
  } from "flowbite-svelte";

  import { Footer, FooterCopyright } from "flowbite-svelte";
</script>

<header class="bg-[#FFFF00] sticky top-0 z-50 ">
  <nav class="flex justify-between items-center w-[92%]  mx-auto">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera inline -mt-1.5 mr-0.5">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
        CaptureQuest
      </div>
      <div
          class="nav-links duration-500 md:static absolute bg-[#FFFF00] md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
          <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                  <a class="text-black cursor-pointer" href="/">Home</a>
              </li>
              <li>
                  <a class="text-black cursor-pointer" href="/about">About</a>
              </li>
              <li>
                  <a class="text-black cursor-pointer" href="/pricing">Pricing</a>
              </li>
              
          </ul>
      </div>
      <div class="flex items-center gap-6">
          <button class="px-6 py-3 rounded-full font-medium text-black bg-transparent border-2 border-black hover:bg-black hover:text-white cursor-pointer">Get started</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 md:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
      </div>
    </header>







  <slot></slot>

  <!-- Footer -->
  <Footer footerType="socialmedia" class="text-white bg-black">
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="self-center ml-[124px] whitespace-nowrap text-xl font-semibold text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EB4F27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera inline -mt-1.5 mr-0.5 fill-black stroke-white">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
        CaptureQuest
      </span>
      <FooterCopyright href="/" by="CaptureQuest™"/>
    </div>
  </Footer>


