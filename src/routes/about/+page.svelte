<script>
  let position = 50; 
  let beforeImage = "bg-peoples.png";
  let afterImage = "people.png";
  let activeButton = 1; 

  function handleMouseMove(event) {
    const container = event.currentTarget;
    const boundingRect = container.getBoundingClientRect();
    const x = event.clientX - boundingRect.left;
    const containerWidth = boundingRect.width;
    position = (x / containerWidth) * 100;
  }

  function changeImage(imageSet) {
    activeButton = imageSet;

    switch (imageSet) {
      case 1:
        beforeImage = "bg-peoples.png";
        afterImage = "people.png";
        break;
      case 2:
        beforeImage = "bg-car.png";
        afterImage = "car.png";
        break;
      case 3:
        beforeImage = "bg-animals.png";
        afterImage = "animals.png";
        break;
      case 4:
        beforeImage = "bg-logo.png";
        afterImage = "logo.png";
        break;
      default:
        beforeImage = "bg-peoples.png";
        afterImage = "people.png";
    }
  }

  function toggleTextColor(event) {
    const summaryElement = event.currentTarget;
    summaryElement.classList.toggle('text-[#FFFF00]');
  }
</script>

<svelte:head>
  <title>Capture Quest | About</title>
  <meta name="description" content="About" />
  <meta
    name="keywords"
    content="Screenshot removal, background removal, image editing, image cleaning, About Capture Quest, "
  />
</svelte:head>




<div class="bg-gradient-to-b from-zinc-900 via-zinc-600 to-zinc-800 py-16 text-center">
  <div class="container mx-auto px-4">
    <div class="absolute transform-gpu blur-[68px] pointer-events-none" aria-hidden="true">
      <div
        class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-amber-200 to-yellow-500 opacity-30"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      />
    </div>
    <p class="text-[16px] lg:text-[20px] text-white">Revolutionizing Image Editing</p>
    <h1 class="text-[40px] md:text-[64px] lg:text-[82px] text-white font-bold my-4">Seamless Background <br> Removal for Every Image</h1>
    <p class="text-[16px] lg:text-[20px] text-white mb-8">Experience seamless and precise background removal <br> making your images stand out effortlessly</p>
    <div class="flex justify-center text-[14px] sm:text-[16px] gap-11 mb-4">
      <button
        on:click={() => changeImage(1)}
        class="cursor-pointer px-6 py-2 rounded-full font-semibold text-black hover:text-yellow-500"
        class:bg-[#EDF0F2]={activeButton === 1}
        class:bg-[#white]={activeButton !== 1}
      >
        People
      </button>
      <button
        on:click={() => changeImage(2)}
        class="cursor-pointer px-6 py-2 rounded-full font-semibold text-black hover:text-yellow-500"
        class:bg-[#EDF0F2]={activeButton === 2}
        class:bg-[#white]={activeButton !== 2}
      >
        Cars
      </button>
      <button
        on:click={() => changeImage(3)}
        class="cursor-pointer px-6 py-2 rounded-full font-semibold text-black hover:text-yellow-500"
        class:bg-[#EDF0F2]={activeButton === 3}
        class:bg-[#white]={activeButton !== 3}
      >
        Animals
      </button>
      <button
        on:click={() => changeImage(4)}
        class="cursor-pointer px-6 py-2 rounded-full font-semibold text-black hover:text-yellow-500"
        class:bg-[#EDF0F2]={activeButton === 4}
        class:bg-[#white]={activeButton !== 4}
      >
        Logo
      </button>
    </div>
    
    <div class="relative w-[450px] h-[250px] lg:w-[1000px] lg:h-[535px] md:w-[950px] md:h-[535px] sm:w-[724px] sm:h-[400px] mx-auto mt-6 shadow-lg rounded-lg">
      <div class="absolute inset-0">
        <img
          src={beforeImage}
          alt="Before"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div
        class="absolute bg-transparent inset-0 overflow-hidden"
        style="width: {position}%;"
      >
        <img
          src={afterImage}
          alt="After"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div
        class="absolute inset-0 flex items-center"
        on:mousemove={handleMouseMove}
      >
        <div
          class="w-0.5 h-full bg-white relative"
          style="left: {position}%;"
        ></div>
      </div>
    </div>
  </div>

 
<div class="max-w-screen-xl mx-auto px-5 ">
  <div class="flex flex-col items-center">
    <h2 class="font-bold text-white text-5xl mt-5 tracking-tight">
      FAQ
    </h2>
    <p class="text-white text-xl mt-3">
      Frequently asked questions
    </p>
  </div>
  <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
    <div class="py-5">
      <details class="group">
        <summary class="flex justify-between items-center text-white font-medium cursor-pointer list-none" on:click={toggleTextColor}>
          <span> What are the pricing options for CaptureQuest?</span>
          <span class="transition group-open:rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-white mt-3 group-open:animate-fadeIn">
          CaptureQuest offers a free plan with 3 free background removals per day, as well as a Pro plan for $15 per month that provides unlimited background removals.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary class="flex text-white justify-between items-center font-medium cursor-pointer list-none" on:click={toggleTextColor}>
          <span> How does billing work?</span>
          <span class="transition group-open:rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-white mt-3 group-open:animate-fadeIn">
          We offers a variety of billing options, including monthly subscription plans, Payment is typically made through a credit card or other secure online payment method.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary class="flex text-white justify-between items-center font-medium cursor-pointer list-none" on:click={toggleTextColor}>
          <span> Can I get a refund for my subscription?</span>
          <span class="transition group-open:rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-white mt-3 group-open:animate-fadeIn">
          We don't offer a refund, we give free trial to make sure your satisfied with your subscription.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary class="flex text-white justify-between items-center font-medium cursor-pointer list-none" on:click={toggleTextColor}>
          <span> How do I cancel my subscription?</span>
          <span class="transition group-open:rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-white mt-3 group-open:animate-fadeIn">
          To cancel your subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary class="flex text-white justify-between items-center font-medium cursor-pointer list-none" on:click={toggleTextColor}>
          <span> Can I try this platform for free?</span>
          <span class="transition group-open:rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-white mt-3 group-open:animate-fadeIn">
          Yes We offers a free trial of its platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.
        </p>
      </details>
    </div>

    <div class="py-5">
      <details class="group">
        <summary class="flex text-white justify-between items-center font-medium cursor-pointer list-none" on:click={toggleTextColor}>
          <span> How do I contact support?</span>
          <span class="transition group-open:rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-white mt-3 group-open:animate-fadeIn">
          If you need help with the platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@CaptureQuest.com.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary class="flex text-white justify-between items-center font-medium cursor-pointer list-none" on:click={toggleTextColor}>
          <span> Do you offer any discounts or promotions?</span>
          <span class="transition group-open:rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-white mt-3 group-open:animate-fadeIn">
          We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company's newsletter or follow us on social media.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary class="flex text-white justify-between items-center font-medium cursor-pointer list-none" on:click={toggleTextColor}>
          <span> How do we compare to other similar services?</span>
          <span class="transition group-open:rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-white mt-3 group-open:animate-fadeIn">
          This platform is a highly reliable and feature-rich service that offers a wide range of tools and functionality. It is competitively priced and offers a variety of billing options to suit different needs and budgets.
        </p>
      </details>
    </div>
  </div>
</div>
 
  
    

<div class="flex justify-center w-full pt-24">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-9 w-full max-w-6xl text-center">

    <div class="flex flex-col items-center md:border-r md:border-white md:pr-4">
      <h2 class="text-[40px] text-white font-bold">15k+</h2>
      <p class="text-white text-[20px]">Downloads</p>
      <p class="text-[16px] text-white">Thousands of users trust our background removal software.</p>
      <div class="block md:hidden w-[500px] h-[1px] mt-7 bg-white"></div>
    </div>

    <div class="flex flex-col items-center md:border-r md:border-white md:px-4">
      <h2 class="text-[40px] text-white font-bold">250+</h2>
      <p class="text-white text-[20px]">Satisfied clients</p>
      <p class="text-[16px] text-white">Professionals rely on our tool for their image editing needs</p>
      <div class="block md:hidden w-[500px] h-[1px] mt-7 bg-white"></div>
    </div>
  
    <div class="flex flex-col items-center md:pl-4">
      <h2 class="text-[40px] text-white font-bold">12k+</h2>
      <p class="text-white text-[20px]">Images processed</p>
      <p class="text-[16px] text-white">High volume processing with unmatched accuracy</p>
      <div class="block md:hidden w-[500px] h-[1px] mt-7 bg-white"></div>
    </div>
  </div>
</div>


<div class="text-black flex flex-col items-center lg:flex-row justify-center pb-48 pt-11 gap-24 mt-48">
  <div class="absolute transform-gpu blur-[68px] pointer-events-none" aria-hidden="true">
    <div
      class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-amber-200 to-yellow-500 opacity-30"
      style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
    />
  </div>
  <div class="text-center lg:text-left lg:flex lg:flex-col lg:justify-center">
    <h1 class="text-4xl font-bold leading-10 text-white tracking-tight mt-11">
      Remove image background <br /> automatically
    </h1>
    <p class="font-semibold text-base text-white mt-5">
      Upload image and get a clear transparent background
    </p>
  </div>
  <div class="hidden md:flex h-80 w-[500px] lg:w-4/12 rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:shadow-[0_3px_20px_0_rgb(166_163_239_/_50%)] transition-all ease-in-out hover:-translate-y-4 duration-500 flex-col items-center justify-center">
    <button class="inline-block px-5 py-4 rounded-full text-white text-xl bg-[#007BFF]">
      Upload Image
    </button>
    <p class="text-black mt-4">Or Drag and drop images</p>
  </div>
  <div class="md:hidden flex flex-col items-center justify-center">
    <button class="inline-block px-5 py-4 rounded-full text-white text-xl bg-[#007BFF]">
      Upload Image
    </button>
  </div>
</div>




  </div>
  



