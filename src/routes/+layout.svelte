<script>
  import "../app.pcss";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="bg-white sticky top-0 shadow z-50">
  <div
    class="container mx-auto flex p-5 flex-row md:flex-row items-center justify-between"
  >
    <!-- Logo and Title -->
    <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
      <div>
        <img class="w-9 h-9 inline-block" src="/icon.png" alt="" />
      </div>

      <span class="ml-3 text-xl">CaptureQuest</span>
    </a>

    <!-- Navigation Links for Large Screens -->
    <nav
      class="hidden md:flex flex-wrap items-center gap-6 scroll-smooth text-base justify-center space-x-5"
    >
      <a id="" href="#Feautres" class="hover:text-gray-900 scroll-smooth"
        >Features</a
      >
      <a href="#howtouse" class="hover:text-gray-900 scroll-smooth"
        >How to use</a
      >
      <a href="#faq" class="hover:text-gray-900 scroll-smooth">Faqs</a>
      <a href="#pricing" class="hover:text-gray-900 scroll-smooth">Pricing</a>
    </nav>

    <!-- Get Started Button and Hamburger Menu Icon -->
    <div class="flex items-center space-x-3">
      <button
        class=" flex justify-center items-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer md:mt-0"
        >Get Started</button
      >
      <button
        class="md:hidden ml-3 p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        on:click={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  <div
    class={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#FFFF00] w-full`}
  >
    <nav class="flex flex-col items-center">
      <a
        href="/"
        class="py-2 w-full text-center cursor-pointer scroll-smooth hover:text-gray-900"
        >Home</a
      >
      <a
        href="/about"
        class="py-2 w-full text-center cursor-pointer scroll-smooth hover:text-gray-900"
        >About</a
      >
      <a
        href="/pricing"
        class="py-2 w-full text-center cursor-pointer scroll-smooth hover:text-gray-900"
        >Pricing</a
      >
    </nav>
  </div>
</header>

<slot></slot>

<div class=" mx-auto">
  <footer class="p-4 bg-[#E2E8F0CC] shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="#" target="_blank" class="flex items-center mb-4 sm:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-camera ml-11 mr-3 inline stroke-black"
        >
          <path
            d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
          />
          <circle cx="12" cy="13" r="3" />
        </svg>
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-black"
          >CaptureQuest</span
        >
      </a>
      <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
        <li>
          <a href="#" class="mr-4 text-sm hover:underline md:mr-6 text-black"
            >Home</a
          >
        </li>
        <li>
          <a href="#" class="mr-4 text-sm text-black hover:underline md:mr-6"
            >About</a
          >
        </li>
        <li>
          <a href="#" class="mr-4 text-sm text-black hover:underline md:mr-6"
            >Pricing</a
          >
        </li>
        <li>
          <a href="#" class="text-sm text-black hover:underline">Contact</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-black sm:text-center"
      >© 2024 <a href="/" target="_blank" class="hover:underline"
        >CaptureQuest™</a
      >. All Rights Reserved.
    </span>
  </footer>
</div>
