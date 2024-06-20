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

  import axios from "axios";
  import { Dropzone } from "flowbite-svelte";

  let imageUrl = "";
  let processedImage = null;
  let value = [];
  let color = "#FFFFFF";
  const dropHandle = async (event) => {
    value = [];
    event.preventDefault();
    if (event.dataTransfer.items) {
      const file = event.dataTransfer.items[0].getAsFile();
      await handleImageUpload(file);
    } else {
      const file = event.dataTransfer.files[0];
      await handleImageUpload(file);
    }
  };
  const handleChange = async (event) => {
    const file = event.target.files[0];
    await handleImageUpload(file);
  };
  const handleImageUpload = async (file) => {
    value.push(file.name);
    value = value;
    imageUrl = URL.createObjectURL(file);
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("bg_color", color);
    formData.append("size", "auto");
    try {
      const response = await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": "JZbiQLGXMPXxpwiGnvJi7J6Q", // Replace with your remove.bg API key
          },
          responseType: "blob",
        }
      );
      processedImage = URL.createObjectURL(response.data);
    } catch (error) {
      console.error("Error removing background:", error);
    }
  };
  const downloadImage = () => {
    if (processedImage) {
      const link = document.createElement("a");
      link.href = processedImage;
      link.download = "processed_image.png";
      link.click();
    }
  };
  const showFiles = (files) => {
    if (files.length === 1) return files[0];
    let concat = "";
    files.map((file) => {
      concat += file;
      concat += ",";
      concat += " ";
    });
    if (concat.length > 40) concat = concat.slice(0, 40);
    concat += "...";
    return concat;
  };

  import { Card } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";

  function toggleTextColor(event) {
    const summaryElement = event.currentTarget;
    summaryElement.classList.toggle("text-indigo-500");
  }
</script>

<!-- <div class="  bg-gradient-to-b from-zinc-900 via-zinc-600 to-zinc-800 h-full w-full  relative py-12">
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


  <div class="py-16 scroll-smooth">
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
class="flex justify-center justify-items-center w-screen h-fit scroll-smooth cursor-pointer mt-9"
>
<button id="Explore" 
  class="px-10 py-3 rounded-full text-[20px] whitespace-nowrap scroll-smooth flex items-center text-white bg-black hover:bg-white hover:text-black hover:border-black border-white hover:border-2 cursor-pointer "
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
</div> -->

<div class="mt-11">
  <div
    class="absolute transform-gpu blur-[68px] pointer-events-none"
    aria-hidden="true"
  >
    <div
      class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-amber-200 to-yellow-500 opacity-30"
      style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
    />
  </div>
  <div
    class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6"
  >
    <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
      <div class="max-w-2xl md:mx-12 md:order-2">
        <h1 class="text-[72px] font-extrabold text-[#0F172A] md:text-[60px]">
          <span
            class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            >Remove Background</span
          > From Images For Free
        </h1>
        <p class="mt-4 text-[#94A3B8] text-lg">
          Introducing CaptureQuest, a platform designed to help you create
          stunning visuals, promote your product, and enhance your images.
        </p>
        <div class="mt-6">
          <a
            href="#"
            class="block px-3 py-2 font-semibold text-center duration-200 rounded-md md:inline text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >Try For Free</a
          >
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center w-full h-96 md:w-1/2">
      <div class="flex justify-center mt-20">
        <iframe
          class="flex justify-center w-[450px] h-[250px] rounded-3xl lg:w-[768px] lg:h-[548px] md:w-[768px] md:h-[548px] sm:w-[724px] sm:h-[400px]"
          width="768"
          height="548"
          src="https://www.youtube.com/embed/2vWh2kaeZkI?si=XvKXPSJfLdLSlo_t"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</div>

<div class="flex flex-col mt-36 py-4">
  <h1 class="text-center py-3">Screenshot Background Removal</h1>
  <Dropzone
    id="dropzone"
    on:drop={dropHandle}
    on:dragover={(event) => {
      event.preventDefault();
    }}
    on:change={handleChange}
    class="w-[960px] h-[500px] mx-auto"
  >
    <svg
      aria-hidden="true"
      class="mb-3 w-10 h-10 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
    <button
      class="inline-block px-16 py-2 my-4 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
    >
      Upload Image
    </button>
    {#if value.length === 0}
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span class="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p class="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    {:else}
      <p>{showFiles(value)}</p>
    {/if}
  </Dropzone>
  <div class="flex flex-row mx-auto justify-center py-6">
    {#if imageUrl}
      <div class="flex flex-col">
        <h2>Original Image</h2>
        <img class="w-48" src={imageUrl} alt="Uploaded Image" />
      </div>
    {/if}
    {#if processedImage}
      <div class="flex flex-col">
        <h2>Processed Image</h2>
        <img class="w-48" src={processedImage} alt="Processed Image" />
        <button on:click={downloadImage}>Download Processed Image</button>
      </div>
    {/if}
  </div>

  <div class="  ">
    <div
      id="Feautres"
      class="flex justify-center scroll-smooth text-black font-bold text-[60px] md:text-[48px] mt-20"
    >
      <h1>Uncover Something hidden</h1>
    </div>

    <div class="flex justify-center text-[14px] sm:text-[16px] gap-11 m-20">
      <button
        on:click={() => changeImage(1)}
        class="cursor-pointer px-6 py-2 rounded-full font-semibold text-black"
        class:bg-[#CBD5E1]={activeButton === 1}
        class:bg-[#white]={activeButton !== 1}
      >
        People
      </button>
      <button
        on:click={() => changeImage(2)}
        class="cursor-pointer px-6 py-2 rounded-full font-semibold text-black"
        class:bg-[#CBD5E1]={activeButton === 2}
        class:bg-[#white]={activeButton !== 2}
      >
        Cars
      </button>
      <button
        on:click={() => changeImage(3)}
        class="cursor-pointer px-6 py-2 rounded-full font-semibold text-black"
        class:bg-[#CBD5E1]={activeButton === 3}
        class:bg-[#white]={activeButton !== 3}
      >
        Animals
      </button>
      <button
        on:click={() => changeImage(4)}
        class="cursor-pointer px-6 py-2 rounded-full font-semibold text-black"
        class:bg-[#CBD5E1]={activeButton === 4}
        class:bg-[#white]={activeButton !== 4}
      >
        Logo
      </button>
    </div>
    <div class="flex justify-center">
      <hr class="w-5/12 border-t-2 mb-11" />
    </div>

    <div
      class="relative w-[450px] h-[250px] lg:w-[1000px] lg:h-[535px] md:w-[950px] md:h-[535px] sm:w-[724px] sm:h-[400px] mx-auto mt-6 shadow-lg rounded-lg"
    >
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
</div>

<div
  class="flex flex-col lg:flex-row items-center mt-24 justify-center pb-24 pt-11"
>
  <div id="howtouse" class="container mx-auto px-6">
    <h1 class="text-2xl lg:text-[60px] font-bold mb-14 text-center">
      Let's Get Started
    </h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-6 sm:px-8 max-w-[1200px] w-full mx-auto mb-8"
    >
      <!-- Box 1 -->
      <a
        href="/app"
        class="box group bg-gray-100 rounded-lg p-4 shadow-lg space-y-3 flex flex-col transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-indigo-500/40 cursor-pointer"
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          <div class="mr-2"></div>
          <h3 class="text-lg font-bold">Upload image</h3>
        </div>
        <p class="text-[16px] text-[#64748B]">
          For best results choose an image where the subject has clear edges
          with nothing overlapping.
        </p>
      </a>

      <!-- Box 2 -->
      <a
        href="/app"
        class="box group bg-gray-100 rounded-lg p-4 shadow-lg space-y-3 flex flex-col transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-indigo-500/40 cursor-pointer"
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <div class="mr-2"></div>
          <h3 class="text-lg font-bold">Remove background</h3>
        </div>
        <p class="text-[16px] text-[#64748B]">
          Upload your image to automatically remove the background in an
          instant.
        </p>
      </a>

      <!-- Box 3 -->
      <a
        href="/app"
        class="box group bg-gray-100 rounded-lg p-4 shadow-lg space-y-3 flex flex-col transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-indigo-500/40 cursor-pointer"
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <div class="mr-2"></div>
          <h3 class="text-lg font-bold">Download image</h3>
        </div>
        <p class="text-[16px] text-[#64748B]">
          Download your new image as a PNG file with a transparent background to
          save, share or keep editing.
        </p>
      </a>

      <!-- Box 4 -->
      <a
        href="/app"
        class="box group bg-gray-100 rounded-lg p-4 shadow-lg space-y-3 flex flex-col transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-indigo-500/40 cursor-pointer"
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
          <div class=" mr-2"></div>
          <h3 class="text-lg font-bold">Margins and Spaces</h3>
        </div>
        <p class="text-[16px] text-[#64748B]">
          Fine-tune the margins and spaces
        </p>
      </a>

      <!-- Box 5 -->
      <a
        href="/app"
        class="box group bg-gray-100 rounded-lg p-4 shadow-lg space-y-3 flex flex-col transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-indigo-500/40 cursor-pointer"
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
            />
          </svg>
          <div class="mr-2"></div>
          <h3 class="text-lg font-bold">Shadow</h3>
        </div>
        <p class="text-[16px] text-[#64748B]">
          Add a shadow and personalize its color, blur, offset x and y
        </p>
      </a>

      <!-- Box 6 -->
      <a
        href="/app"
        class="box group bg-gray-100 rounded-lg p-4 shadow-lg space-y-3 flex flex-col transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-indigo-500/40 cursor-pointer"
      >
        <div class="flex items-center">
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
            class="lucide lucide-rectangle-horizontal"
            ><rect width="20" height="12" x="2" y="6" rx="2" /></svg
          >
          <div class="mr-2"></div>
          <h3 class="text-lg font-bold">Rounded edge</h3>
        </div>
        <p class="text-[16px] text-[#64748B]">
          Round off the edges for a sleek look
        </p>
      </a>

      <!-- Box 7 -->
      <a
        href="/app"
        class="box group bg-gray-100 rounded-lg p-4 shadow-lg space-y-3 flex flex-col transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-indigo-500/40 cursor-pointer"
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <div class="mr-2"></div>
          <h3 class="text-lg font-bold">Fully private</h3>
        </div>
        <p class="text-[16px] text-[#64748B]">
          CaptureQuest runs 100% locally in your browser. We only keep your
          Images on our server when you save it.
        </p>
      </a>

      <!-- Box 8 -->
      <a
        href="/app"
        class="box group bg-gray-100 rounded-lg p-4 shadow-lg space-y-3 flex flex-col transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-indigo-500/40 cursor-pointer"
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          <div class="mr-2"></div>
          <h3 class="text-lg font-bold">Share</h3>
        </div>
        <p class="text-[16px] text-[#64748B]">
          Share* directly on your socials
        </p>
      </a>

      <!-- Box 9 -->
      <a
        href="/app"
        class="box group bg-gray-100 rounded-lg p-4 shadow-lg space-y-3 flex flex-col transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-indigo-500/40 cursor-pointer"
      >
        <div class="flex items-center">
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
            class="lucide lucide-save"
            ><path
              d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
            /><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" /><path
              d="M7 3v4a1 1 0 0 0 1 1h7"
            /></svg
          >
          <div class="mr-2"></div>
          <h3 class="text-lg font-bold">Save</h3>
        </div>
        <p class="text-[16px] text-[#64748B]">
          Save your designs for future editing sessions
        </p>
      </a>
      <div></div>

      <button
        class=" px-16 py-2 my-4 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
      >
        Upload Image
      </button>
    </div>
  </div>
</div>

<div id="pricing" class="h-full scroll-smooth w-full relative">
  <div
    class="relative flex-col flex gap-5 text-center py-24 font-bold text-6xl z-0"
  >
    <div class="absolute transform-gpu blur-[68px]" aria-hidden="true">
      <div
        class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-[#ff8c66] to-[#ff4a0e] opacity-30"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      />
    </div>
    <p class="text-indigo-500 font-medium text-[16px] mb-8">Pricing</p>
    <div>Elevate Your Photography <br /> with One Click</div>
    <p class="text-sm">
      Simplify your editing process, achieve professional-grade results, and
      enhance your images seamlessly.
    </p>
  </div>
</div>

<div class="flex justify-center justify-items-center w-screen h-screen">
  <div class="absolute transform-gpu blur-[68px]" aria-hidden="true">
    <div
      class="aspect-[1108/632] w-[35.25rem] bg-gradient-to-r from-[#ff8c66] to-[#ff4a0e] opacity-30"
      style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
    />
  </div>
  <div class="flex flex-col lg:flex-row gap-8 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto py-14">
      <Card class="h-fit relative border-indigo-500 border-2 " padding="xl">
        <div
          class=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute flex items-center gap-1 -top-0 -translate-y-1/2 left-8 studio-primary-gradient rounded py-1 px-2.5 text-xxs tracking-widest text-white"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </span>

          Popular
        </div>

        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Pro plan
        </h5>
        <div
          class="flex items-baseline text-gray-900 dark:text-white justify-content: center;"
        >
          <span class="text-3xl font-semibold">$</span>
          <span class="text-5xl font-extrabold tracking-tight">15</span>
          <span
            class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"
            >/month</span
          >
        </div>
        <!-- List -->
        <ul class="my-7 space-y-4">
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Advanced editing features
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              High quality exports
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Unlimited background removal
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Access to future updates and new features
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Priority support
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Advanced templates
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Batch processing
            </span>
          </li>
        </ul>
        <form action="?/subscribepro" method="POST">
          <div class="flex flex-row justify-center">
            <button
              class="px-32 rounded-xl py-2 text-white text-nowrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
              >Get Started</button
            >
          </div>
        </form>
      </Card>

      <Card class="h-fit" padding="xl">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Free plan
        </h5>
        <div
          class="flex items-baseline text-gray-900 dark:text-white justify-content: center;"
        >
          <span class="text-3xl font-semibold">$</span>
          <span class="text-5xl font-extrabold tracking-tight">0</span>
          <span
            class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"
            >/month</span
          >
        </div>
        <!-- List -->
        <ul class="my-7 space-y-4">
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Basic editing features
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Limited to 3 images for background removal
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-indigo-500 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Limited resolution download
            </span>
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >Priority support</span
            >
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >High quality exports</span
            >
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4  text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >Customizable presets</span
            >
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >24×7 phone & email support</span
            >
          </li>
        </ul>
        <a class="flex flex-row justify-center" href="">
          <button
            class="px-32 rounded-xl py-2 text-white text-nowrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >Get Started</button
          >
        </a>
      </Card>
    </div>
  </div>
</div>

<div id="faq" class="max-w-screen-xl mx-auto px-5">
  <div class="flex flex-col items-center">
    <h2 class="font-bold text-black text-5xl tracking-tight">FAQ</h2>
    <p class="text-black text-xl mt-3">Frequently asked questions</p>
  </div>
  <div class="grid divide-y divide-neutral-200 mb-11 max-w-xl mx-auto mt-8">
    <div class="py-5">
      <details class="group">
        <summary
          class="flex justify-between items-center text-black font-medium cursor-pointer list-none"
          on:click={toggleTextColor}
        >
          <span> What are the pricing options for CaptureQuest?</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-black mt-3 group-open:animate-fadeIn">
          CaptureQuest offers a free plan with 3 free background removals per
          day, as well as a Pro plan for $15 per month that provides unlimited
          background removals.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary
          class="flex text-black justify-between items-center font-medium cursor-pointer list-none"
          on:click={toggleTextColor}
        >
          <span> How does billing work?</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-black mt-3 group-open:animate-fadeIn">
          We offers a variety of billing options, including monthly subscription
          plans, Payment is typically made through a credit card or other secure
          online payment method.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary
          class="flex text-black justify-between items-center font-medium cursor-pointer list-none"
          on:click={toggleTextColor}
        >
          <span> Can I get a refund for my subscription?</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-black mt-3 group-open:animate-fadeIn">
          We don't offer a refund, we give free trial to make sure your
          satisfied with your subscription.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary
          class="flex text-black justify-between items-center font-medium cursor-pointer list-none"
          on:click={toggleTextColor}
        >
          <span> How do I cancel my subscription?</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-black mt-3 group-open:animate-fadeIn">
          To cancel your subscription, you can log in to your account and
          navigate to the subscription management page. From there, you should
          be able to cancel your subscription and stop future billing.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary
          class="flex text-black justify-between items-center font-medium cursor-pointer list-none"
          on:click={toggleTextColor}
        >
          <span> Can I try this platform for free?</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-black mt-3 group-open:animate-fadeIn">
          Yes We offers a free trial of its platform for a limited time. During
          the trial period, you will have access to a limited set of features
          and functionality, but you will not be charged.
        </p>
      </details>
    </div>

    <div class="py-5">
      <details class="group">
        <summary
          class="flex text-black justify-between items-center font-medium cursor-pointer list-none"
          on:click={toggleTextColor}
        >
          <span> How do I contact support?</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-black mt-3 group-open:animate-fadeIn">
          If you need help with the platform or have any other questions, you
          can contact the company's support team by submitting a support request
          through the website or by emailing support@CaptureQuest.com.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary
          class="flex text-black justify-between items-center font-medium cursor-pointer list-none"
          on:click={toggleTextColor}
        >
          <span> Do you offer any discounts or promotions?</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-black mt-3 group-open:animate-fadeIn">
          We may offer discounts or promotions from time to time. To stay
          up-to-date on the latest deals and special offers, you can sign up for
          the company's newsletter or follow us on social media.
        </p>
      </details>
    </div>
    <div class="py-5">
      <details class="group">
        <summary
          class="flex text-black justify-between items-center font-medium cursor-pointer list-none"
          on:click={toggleTextColor}
        >
          <span> How do we compare to other similar services?</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-black mt-3 group-open:animate-fadeIn">
          This platform is a highly reliable and feature-rich service that
          offers a wide range of tools and functionality. It is competitively
          priced and offers a variety of billing options to suit different needs
          and budgets.
        </p>
      </details>
    </div>
  </div>
</div>
