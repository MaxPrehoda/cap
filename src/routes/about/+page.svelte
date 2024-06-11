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
  














  


  <div class="mx-auto  max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
    <div class="lg:grid lg:grid-cols-12 lg:gap-11">
      <div class="lg:col-span-5">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <p class="mt-4 text-base leading-7 text-gray-600">
          Can't find the answer you're looking for? Reach out to our <a
            href="#"
            class="font-semibold text-orange-500 hover:text-indigo-500"
            >customer support</a
          > team.
        </p>
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl>
          <div class="mb-6">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              What are the pricing options for CaptureQuest?
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              CaptureQuest offers a free plan with 3 free background removals
              per day, as well as a Pro plan for $15 per month that provides
              unlimited background removals
            </dd>
          </div>
        </dl>
        <dl>
          <div class="mb-6">
            <dt class="text-base font-semibold leading-7 text-gray-900 mt-3">
              What are the key features of CaptureQuest?
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              CaptureQuest is a powerful image editing tool that allows you to
              easily remove backgrounds from any image and replace them with a
              new background. Key features include fast and efficient background
              removal, free and paid pricing plans, competitive pricing compared
              to similar apps, and an easy-to-use interface.
            </dd>
          </div>
        </dl>
        <dl>
          <div class="mb-6">
            <dt class="text-base font-semibold leading-7 text-gray-900 mt-3">
              How accurate are the background removal results typically?
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              The accuracy of background removal can vary depending on the tool
              used and the complexity of the image. CaptureQuest is quite
              accurate, even handling tricky elements like hair or transparent
              objects. CaptureQuest is has a free plan so you can give it a try.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

