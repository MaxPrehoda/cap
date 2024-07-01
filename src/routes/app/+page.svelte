<script>
  import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';

  let rgb = { r: 255, g: 0, b: 0, a: 1 }; // Example initial value
  let hsv = { h: 0, s: 100, v: 100, a: 1 }; // Example initial value
  let hex = '#ff0000'; // Example initial value

  let padding = 0;
  let inset = 0;
  let shadow = 0;
  let rounded = 0;
  let border = 0;

  function updateSlider(event) {
    const value = event.target.value;
    const percentage = (value - event.target.min) / (event.target.max - event.target.min) * 100;
    event.target.style.setProperty('--value', `${percentage}%`);
  }

  let imageSrc = '';
  let imageUploaded = false;
  let selectedBackground = '';
  let aspectRatio = 'auto'; // Default aspect ratio

  let showMore = false;

  function toggleText() {
    showMore = !showMore;
  }


  function setAspectRatio(ratio) {
    aspectRatio = ratio;
  }

 
  

  let showPopup = false;
      
      function togglePopup() {
        showPopup = !showPopup;
      }
    
      function handleOutsideClick(event) {
        if (event.target.classList.contains('popup-overlay')) {
          togglePopup();
        }
      }

      function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageSrc = e.target.result;
        imageUploaded = true;
      };
      reader.readAsDataURL(file);
    }
  }

  let files = [];
  let dragover = false;

  function handleDragEnter(e) {
    e.preventDefault();
    dragover = true;
  }

  function handleDragLeave(e) {
    e.preventDefault();
    dragover = false;
  }

  function handleDrop(e) {
    e.preventDefault();
    dragover = false;
    const droppedFiles = Array.from(e.dataTransfer.files);
    files = [...files, ...droppedFiles];
  }

  function handleFileInput(e) {
    const selectedFiles = Array.from(e.target.files);
    files = [...files, ...selectedFiles];
  }

  function uploadFiles() {
    // Implement your file upload logic here
    console.log("Uploading files:", files);
  }
  


</script>

<div class="flex h-screen ">
  
  <!-- Image adjustment menu -->
  <div class="flex flex-col p-4 space-y-6 overflow-y-auto">
    <div class="flex gap-3 justify-center">
      <button class="text-white  rounded-full text-sm font-bold px-5 py-3 bg-purple-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        New snap
      </button>
      <button class="rounded-full px-5 py-3 text-sm font-bold bg-purple-600 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        Change image
      </button>
    </div>
    <hr>
    <div class="space-y-3">
      <h3 class="font-bold text-sm">Watermark free</h3>
      <p class="text-sm">This feature is only available for CaptureQuest Pro.</p>
      <div class="flex justify-center ">
      <button class="bg-purple-600 px-16 py-1 text-sm font-bold rounded-full text-white" on:click={togglePopup}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
        
        Get CaptureQuest Pro</button>

      {#if showPopup}
        <div class="popup-overlay  fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50" on:click={handleOutsideClick}>
          <div class="popup-content bg-white rounded-3xl p-10 w-[612px] h-[748px] flex flex-col justify-center items-center text-center">
            <div class="flex justify-center rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-purple-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              
            </div>
            <h2 class="text-4xl font-bold mb-4">Get CaptureQuest Pro</h2>
            <p class="text-gray-600 mb-6">And you have all these benefits:</p>
            <ul class="text-center text-[17px]  space-y-2 mb-6">
              <li class="flex text-[#64748B] items-center justify-center"><svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-2 17.5l-5-5L6.5 11l3.5 3.5L17.5 7l1.5 1.5z"/></svg> Save infinite snaps</li>
              <li class="flex text-[#64748B] items-center justify-center"><svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-2 17.5l-5-5L6.5 11l3.5 3.5L17.5 7l1.5 1.5z"/></svg> Remove watermark</li>
              <li class="flex text-[#64748B] items-center justify-center"><svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-2 17.5l-5-5L6.5 11l3.5 3.5L17.5 7l1.5 1.5z"/></svg> Personalize watermark</li>
              <li class="flex text-[#64748B] items-center justify-center"><svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-2 17.5l-5-5L6.5 11l3.5 3.5L17.5 7l1.5 1.5z"/></svg> Create personalized presets</li>
              <li class="flex text-[#64748B] items-center justify-center"><svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-2 17.5l-5-5L6.5 11l3.5 3.5L17.5 7l1.5 1.5z"/></svg> Priority support</li>
            </ul>
            <p class="text-gray-600 mb-6">
              Sign up for free and then get the CaptureQuest Pro <br> for only $14.99, with a 7 day free trial.
            </p>
            <button class="cta-button bg-purple-600 text-white py-3 px-6 rounded-full mb-4" on:click={togglePopup}>Sign up for free</button>
            <button class="cancel-button bg-transparent text-purple-600 py-2 px-4 rounded-full" on:click={togglePopup}>Cancel</button>
          </div>
        </div>
      {/if}
      

      </div>
    </div>

    <div class="w-11 bg-gray-300"></div>



    <hr>
    <div>
      <h3 class="text-sm font-bold mb-2">Position</h3>
      <select class="bg-white text-black border-1 rounded-full w-full">
        <option>Top left</option>
        <option>Top center</option>
        <option>Top right</option>
        <option>Middle left</option>
        <option>Middle center</option>
        <option>Middle right</option>
        <option>Bottom left</option>
        <option>Bottom center</option>
        <option>Bottom right</option>
      </select>
    </div>
    <hr>

      <div class="slider-container">
        <div class="flex justify-between items-center">
          <span class="label-text">Padding</span>
          <span class="label-text-alt">{padding}px</span>
        </div>
        <input type="range" min="0" max="300" bind:value={padding} class="slider" on:input={updateSlider} />
      </div>
      <hr>
      <div class="slider-container">
        <div class="flex justify-between items-center">
          <span class="label-text">Inset</span>
          <span class="label-text-alt">{inset}px</span>
        </div>
        <input type="range" min="0" max="100" bind:value={inset} class="slider" on:input={updateSlider} />
      </div>
      <hr>
      <div class="slider-container">
        <div class="flex justify-between items-center">
          <span class="label-text">Shadow</span>
          <span class="label-text-alt">{shadow}px</span>
        </div>
        <input type="range" min="0" max="100" bind:value={shadow} class="slider" on:input={updateSlider} />
      </div>
      <hr>
      <div class="slider-container">
        <div class="flex justify-between items-center">
          <span class="label-text">Rounded</span>
          <span class="label-text-alt">{rounded}px</span>
        </div>
        <input type="range" min="0" max="100" bind:value={rounded} class="slider" on:input={updateSlider} />
      </div>
      <hr>
      <div class="slider-container">
        <div class="flex justify-between items-center">
          <span class="label-text">Border</span>
          <span class="label-text-alt">{border}px</span>
        </div>
        <input type="range" min="0" max="100" bind:value={border} class="slider" on:input={updateSlider} />
      </div>
    
   

  

   
    <div class="max-w-md mx-auto mt-20">
      <h1 class="py-2 font-bold text-xl">Background</h1>
      <div class="grid grid-cols-5 gap-y-4 gap-3">
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/1.jpg" alt="">
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/2.jpg" alt="">
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/3.jpg" alt="">
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/4.jpg" alt="">
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/5.jpg" alt="">
        
      </div>
    
      
  
        {#if showMore}
          <span class="grid grid-cols-5  gap-3">
            <img class="w-[60px] h-[60px]  bg-cover rounded-lg cursor-pointer mt-3" src="Background/6.jpg" alt="">
            <img class="w-[60px] h-[60px]  bg-cover rounded-lg cursor-pointer mt-3" src="Background/7.jpg" alt="">
            <img class="w-[60px] h-[60px]  bg-cover rounded-lg cursor-pointer mt-3" src="Background/8.jpg" alt="">
            <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer  mt-3" src="Background/9.jpg" alt="">
            <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer  mt-3" src="Background/10.jpg" alt="">
            <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/11.jpg" alt="">
            <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/12.jpg" alt="">
            <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/13.jpg" alt="">
            <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/14.jpg" alt="">
            <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/15.jpg" alt="">




          </span>
        {/if}
      <div class="flex justify-center">
        <button on:click={toggleText} class="mt-4 text-[#64748B] focus:outline-none">
          {showMore ? 'Show less' : 'Load more'}
        </button>
      </div>
    
    </div>


    <div class="ml-7">
      <ColorPicker
      bind:rgb
      bind:hsv
      bind:hex
      components={ChromeVariant}
      sliderDirection="horizontal"
      isDialog={false}
      
    />

    </div>
   



    <div class="aspect-ratio-selector">
      <h3 class="text-sm font-bold mb-2">Aspect Ratio</h3>
      <div class="flex gap-2">
        <button class="aspect-ratio-button" on:click={() => setAspectRatio('auto')}>Auto</button>
        <button class="aspect-ratio-button" on:click={() => setAspectRatio('4:3')}>4:3</button>
        <button class="aspect-ratio-button" on:click={() => setAspectRatio('3:2')}>3:2</button>
        <button class="aspect-ratio-button" on:click={() => setAspectRatio('16:9')}>16:9</button>
        <button class="aspect-ratio-button" on:click={() => setAspectRatio('1:1')}>1:1</button>
      </div>
    </div>





</div>

  <div class="vertical-divider w-1 bg-[#e2e8f0] h-full"></div>

  <div class="relative order-first md:order-last h-28 md:h-auto flex-1 flex justify-center items-center border-4 border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
    <span class="text-gray-400 opacity-75 flex flex-col items-center justify-center">
      <p class="text-black font-black text-4xl mb-7">Drag and drop an image</p>
      <div class="flex flex-col items-center ">
        <svg class="w-14 h-14 mb-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <button class="text-white bg-[#5c5ce0] px-5 py-3 rounded-full font-semibold mb-7">Upload your photo</button>
        
      </div>
    </span>
  </div>




</div>







<style>

  
  

  .slider-container {
    margin-bottom: 20px;
  }

  .label-text, .label-text-alt {
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }

  hr {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 15px 0;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    margin: 10px 0;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }

  .slider::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #000000 var(--value, 0%), #d3d3d3 var(--value, 0%));
    border-radius: 3px;
  }

  .slider::-moz-range-track {
    background: linear-gradient(to right, #000000 var(--value, 0%), #d3d3d3 var(--value, 0%));
    border-radius: 3px;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 25px;
    z-index: 10000;
  }

  .dropzone {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 2px dashed #cccccc;
    border-radius: 10px;
    background: #f9f9f9;
    cursor: pointer;
  }

  .dropzone:hover {
    background: #e0e0e0;
  }

  .btn-upload {
    background: #1a73e8;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-upload:hover {
    background: #155ab6;
  }

  .grid {
    display: grid;
    gap: 8px;
  }

  .background-thumbnail {
    width: 60px;
    height: 60px;
    background-size: cover;
    border-radius: 10px;
    cursor: pointer;
  }

  .background-thumbnail:hover {
    border: 2px solid #000;
  }



  .aspect-ratio-selector {
    margin-top: 16px;
  }

  .aspect-ratio-button {
    background: #e0e0e0;
    border: none;
    border-radius: 16px;
    padding: 8px 12px;
    cursor: pointer;
    transition:  0.2s ease;
  }

  .aspect-ratio-button:hover {
    background: #cccccc;
  }

  .aspect-ratio-button:focus {
    background: #bbbbbb;
    outline: none;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .image-container img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .image-grid {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }


  
</style>



