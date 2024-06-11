<script>
  let position = 50; 
  let beforeImage = "bg-peoples.png";
  let afterImage = "people.png";
  let activeButton = 1; 

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

<div class=" bg-gradient-to-b from-zinc-900 via-zinc-600 to-zinc-800 h-full w-full  relative py-12">
  <div class="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"></div>
  <div class="relative flex-col flex  text-center font-bold text-[40px] md:text-[64px] lg:text-[82px]">
    <div class="absolute transform-gpu blur-[68px] pointer-events-none" aria-hidden="true">
      <div
        class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-amber-200 to-yellow-500 opacity-30"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      />
    </div>
    <div class="text-white" >Remove Background</div>
    <div class="text-white">From Images For
      <span
      class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#FFFF00] relative inline-block text-white font-bold text-[40px] md:text-[64px] lg:text-[82px] bg-gradient-to-r bg-clip-text text-transparent">
      <span class="relative text-black">Free</span>
    </span>
      
    </div>
    
    <p class="text-[16px] lg:text-[20px] text-white  mt-5">
      Introducing CaptureQuest, a platform designed to help you create stunning visuals, <br> promote your product, and enhance your images.
    </p>
  </div>

  <div
  class="flex justify-center justify-items-center w-screen h-fit cursor-pointer mt-9"
>
  <button 
    class="px-11 py-3 rounded-full whitespace-nowrap flex items-center text-black bg-white hover:bg-black hover:text-white hover:border-white border-white hover:border-2 cursor-pointer "
  >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
   Get started</button
  >
</div>



  <div class="flex justify-center mt-20 ">
    <iframe class="flex justify-center w-[450px] h-[250px] lg:w-[1155px] lg:h-[700px] md:w-[950px] md:h-[535px] sm:w-[724px] sm:h-[400px]  "   width="1155" height="700" src="https://www.youtube.com/embed/2vWh2kaeZkI?si=XvKXPSJfLdLSlo_t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

 
  <div class="flex justify-center text-white text-[32px] md:text-[48px] mt-20">
    <h1>Uncover Something hidden</h1>
  </div>

  <div class="flex justify-center text-[14px] sm:text-[16px] gap-11 m-20">
    <button
      on:click={() => changeImage(1)}
      class="cursor-pointer px-6 py-2 rounded-full font-semibold  text-white hover:text-[#FFFF00]"
      class:bg-[#000000] = {activeButton === 1}
      class:bg-[#white]={activeButton !== 1}
    >
      People
    </button>
    <button
      on:click={() => changeImage(2)}
      class="cursor-pointer px-6 py-2 rounded-full font-semibold text-white hover:text-[#FFFF00]"
      class:bg-[#000000]= {activeButton === 2}
      class:bg-[#white]={activeButton !== 2}
    >
      Cars
    </button>
    <button
      on:click={() => changeImage(3)}
      class="cursor-pointer px-6 py-2 rounded-full font-semibold text-white hover:text-[#FFFF00]"
      class:bg-[#000000]= {activeButton === 3}
      class:bg-[#white]={activeButton !== 3}
    >
      Animals
    </button>
    <button
      on:click={() => changeImage(4)}
      class="cursor-pointer px-6 py-2 rounded-full font-semibold text-white hover:text-[#FFFF00]"
      class:bg-[#000000]= {activeButton === 4}
      class:bg-[#white]={activeButton !== 4}
    >
      Logo
    </button>
    
  </div>
  <div class="flex justify-center">
    <hr class="w-5/12 border-t-2  mb-11" />

  </div>
 
  
  <div class="relative  w-[450px] h-[250px] lg:w-[1000px] lg:h-[535px] md:w-[950px] md:h-[535px] sm:w-[724px] sm:h-[400px]        mx-auto mt-6 shadow-lg rounded-lg">
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


  <div class="py-16">
    <div class="container mx-auto flex flex-col md:flex-row justify-around items-start space-y-12 md:space-y-0 md:space-x-6">
      <div class="text-center text-white w-full md:w-1/3 relative">
        <div class="absolute top-0 w-full h-[1px] bg-white"></div>
        <h2 class="text-[64px] font-bold mt-4 mb-4 relative z-10">Precision</h2>
        <p class="text-[14px]">Achieve flawless background removal with our robust software. Perfect for professional designers and photographers.</p>
      </div>
      <div class="text-center text-white w-full md:w-1/3 relative">
        <div class="absolute top-0 w-full h-[1px] bg-white"></div>
        <h2 class="text-[64px] font-bold mt-4 mb-4 relative z-10">Seamless</h2>
        <p class="text-[14px">Seamlessly integrate our background removal solution into your workflow. No hassle, just results.</p>
      </div>
      <div class="text-center text-white w-full md:w-1/3 relative">
        <div class="absolute top-0 w-full h-[1px] bg-white"></div>
        <h2 class="text-[64px] font-bold mt-4 mb-4 relative z-10">Reliable</h2>
        <p class="text-[14px]">Dependable and consistent – our software ensures precise background removal every time.
        </p>
      </div>
    </div>
  </div>
</div>


<div
class="flex justify-center justify-items-center w-screen h-fit cursor-pointer mt-9"
>
<button  
  class="px-10 py-3 rounded-full text-[20px] whitespace-nowrap flex items-center text-white bg-black hover:bg-white hover:text-black hover:border-black border-white hover:border-2 cursor-pointer "
>
 Explore CaptureQuest</button
>
</div>


<div class="h-full w-full relative">
  <div
    class="relative flex-col flex gap-5 text-center py-24 font-bold text-6xl"
  >
    <div>

      <div class="absolute transform-gpu blur-[68px] pointer-events-none" aria-hidden="true">
        <div
          class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-amber-200 to-yellow-500 opacity-30"
          style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
        />
      </div>
      <span
        class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#FFFF00] relative inline-block text-white font-bold text-[50px] lg:text-[64px] bg-gradient-to-r bg-clip-text text-transparent">
        <span class="relative text-black ">Compatible </span>
        </span>
        <p class="inline-block text-[50px] lg:text-[64px] ">with</p>
    </div>
    <div class="text-[50px] lg:text-[64px]">most file types</div>
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




















<div class="flex flex-col lg:flex-row items-center mt-24 justify-center pb-24 pt-11 bg-[#FFFF00]">
  <div class="container mx-auto px-6">
    <h1 class="text-[50px] lg:text-[64px] font-semibold mb-8 text-center">Let's Get Started</h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Box 1 -->
      <a href="/app" class="group duration-500 ease-in hover:bg-black transition-all hover:ring-black h-[400px] rounded-lg p-6 bg-transparent ring-1 ring-black shadow-lg space-y-3 hover:shadow-[0_3px_20px_0_rgb(166_163_239_/_50%)] hover:-translate-y-4 flex flex-col justify-between">
        <div class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload mb-4 group-hover:stroke-[#FFFF00]">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </svg>
          <h3 class="group-hover:text-[#FFFF00] text-4xl sm:text-4xl font-bold text-center">Upload image</h3>
        </div>
        <p class="group-hover:text-[#FFFF00] text-black text-xl sm:text-xl text-center">For best results choose an image where the subject has clear edges with nothing overlapping.</p>
        <div class="bg-black group-hover:bg-[#FFFF00] rounded-full w-10 sm:w-12 py-1 mt-auto flex justify-center items-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right stroke-white group-hover:stroke-black">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </a>
      <!-- Box 2 -->
      <a href="/app" class="group duration-500 ease-in hover:bg-black transition-all hover:ring-black h-[400px] rounded-lg p-6 bg-transparent ring-1 ring-black shadow-lg space-y-3 hover:shadow-[0_3px_20px_0_rgb(166_163_239_/_50%)] hover:-translate-y-4  flex flex-col justify-between">
        <div class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-minus mb-4 group-hover:stroke-[#FFFF00]">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <line x1="8" x2="16" y1="12" y2="12" />
          </svg>
          <h3 class="group-hover:text-[#FFFF00] text-4xl sm:text-4xl font-bold text-center">Remove background</h3>
        </div>
        <p class="group-hover:text-[#FFFF00] text-black text-xl sm:text-xl text-center">Upload your image to automatically remove the background in an instant.</p>
        <div class="bg-black group-hover:bg-[#FFFF00] rounded-full w-10 sm:w-12 py-1 mt-auto flex justify-center items-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right stroke-white group-hover:stroke-black">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </a>
      <!-- Box 3 -->
      <a href="/app" class="group duration-500 ease-in hover:bg-black transition-all hover:ring-black h-[400px] rounded-lg p-6 bg-transparent ring-1 ring-black shadow-lg space-y-3 hover:shadow-[0_3px_20px_0_rgb(166_163_239_/_50%)] hover:-translate-y-4 flex flex-col justify-between">
        <div class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download mb-4 group-hover:stroke-[#FFFF00]">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          <h3 class="group-hover:text-[#FFFF00] text-4xl sm:text-4xl font-bold text-center">Download image</h3>
        </div>
        <p class="group-hover:text-[#FFFF00] text-black text-xl sm:text-xl text-center">Download your new image as a PNG file with a transparent background to save, share or keep editing.</p>
        <div class="bg-black group-hover:bg-[#FFFF00] rounded-full w-10 sm:w-12 py-1 mt-auto flex justify-center items-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right stroke-white group-hover:stroke-black">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </a>
    </div>
  </div>
</div>











