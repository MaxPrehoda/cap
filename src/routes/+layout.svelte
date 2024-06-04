<script>
  import "../app.pcss";

  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
  } from "flowbite-svelte";

  import { Footer, FooterCopyright } from "flowbite-svelte";
</script>

<div class="flex flex-col min-h-screen">
  <!-- Navbar -->
  <Navbar class="sticky top-0 z-50 shadow-lg shadow-[#d1d1d1] bg-white">
    <NavBrand href="/">
      <span
        class="self-center sticky whitespace-nowrap text-xl font-semibold dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EB4F27"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-camera inline -mt-1.5 mr-0.5"
        >
          <path
            d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
          />
          <circle cx="12" cy="13" r="3" />
        </svg>
        CaptureQuest
      </span>
    </NavBrand>
    <div class="flex md:order-2">
      <Button href="/app" size="sm">Get started</Button>
      <NavHamburger />
    </div>
    <NavUl class="order-1">
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
    </NavUl>
  </Navbar>

  <slot></slot>

  <!-- Footer -->
  <Footer footerType="socialmedia" class=" text-black">
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span
        class="self-center ml-[124px] whitespace-nowrap text-xl font-semibold dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EB4F27"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-camera inline -mt-1.5 mr-0.5"
        >
          <path
            d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
          />
          <circle cx="12" cy="13" r="3" />
        </svg>
        CaptureQuest
      </span>
      <FooterCopyright href="/" by="CaptureQuest™" />
    </div>
  </Footer>
</div>
