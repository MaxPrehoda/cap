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
      <a href="/">
        <div class=" font-semibold text-xl cursor-pointer">CaptureQuest</div>
      </a>
    </a>

    <!-- Navigation Links for Large Screens -->
    <nav
      class="hidden md:flex flex-wrap items-center gap-6 scroll-smooth text-base cursor-pointer justify-center space-x-5"
    >
      <a
        href="#Feautres"
        class="hover:text-gray-900 scroll-smooth cursor-pointer">Features</a
      >
      <a
        href="#howtouse"
        class="hover:text-gray-900 scroll-smooth cursor-pointer">How to use</a
      >
      <a
        href="#pricing"
        class="hover:text-gray-900 scroll-smooth cursor-pointer">Pricing</a
      >
      <a href="#faq" class="hover:text-gray-900 scroll-smooth cursor-pointer"
        >Faqs</a
      >
    </nav>

    <!-- Get Started Button and Hamburger Menu Icon -->
    <div class="flex items-center space-x-3">
      <a href="/app">
        <button
          class=" flex justify-center items-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer md:mt-0"
          >Get Started</button
        >
      </a>
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
    class={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#E2E8F0CC] border-4 border-spacing-8 w-full`}
  >
    <nav class="flex flex-col items-center">
      <a
        href="#Feautres"
        class="py-2 w-full text-center cursor-pointer scroll-smooth hover:text-gray-900"
        >Features</a
      >
      <a
        href="#howtouse"
        class="py-2 w-full text-center cursor-pointer scroll-smooth hover:text-gray-900"
        >How to use</a
      >
      <a
        href="#pricing"
        class="py-2 w-full text-center cursor-pointer scroll-smooth hover:text-gray-900"
        >Pricing</a
      >
      <a
        href="#faq"
        class="py-2 w-full text-center cursor-pointer scroll-smooth hover:text-gray-900"
        >Faqs</a
      >
    </nav>
  </div>
</header>

<slot></slot>

<div class="mx-auto">
  <footer class="p-4 bg-[#E2E8F0CC] shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center justify-center mb-4 sm:mb-0">
        <div class="lg:ml-[140px]  "><img class="w-9 h-9 inline-block" src="/icon.png" alt="" /></div>
        <span class="self-center text-xl font-semibold cursor-pointer whitespace-nowrap text-black">CaptureQuest</span>
      </div>
      <ul class="flex flex-wrap justify-center sm:justify-start items-center mb-6 sm:mb-0">
        <li>
          <a href="#Feautres" class="mr-4 text-sm hover:underline md:mr-6 text-black">Features</a>
        </li>
        <li>
          <a href="#howtouse" class="mr-4 text-sm text-black hover:underline md:mr-6">How to use</a>
        </li>
        <li>
          <a href="#pricing" class="mr-4 text-sm text-black hover:underline md:mr-6">Pricing</a>
        </li>
        <li>
          <a href="#faq" class="text-sm text-black hover:underline">Faqs</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm hover:underline cursor-pointer text-black text-center sm:text-center">© 2024 CaptureQuest™. All Rights Reserved.</span>
  </footer>
</div>
