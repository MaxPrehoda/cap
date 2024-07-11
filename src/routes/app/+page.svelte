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

let aspectRatio = 'auto'; // Default aspect ratio
let showMore = false;
let showPopupDownload = false;
let showPopupPro = false;
let showPaddingAdvanced = false;
let showInsetAdvanced = false;
let showShadowAdvanced = false;
let showRoundedAdvanced = false;
let showBorderAdvanced = false;
let showAdvancedBackground = false;

let imageFile = null;
let isDragging = false;

function updateSlider(event) {
  const value = event.target.value;
  const percentage = (value - event.target.min) / (event.target.max - event.target.min) * 100;
  event.target.style.setProperty('--value', `${percentage}%`);
}

function toggleText() {
  showMore = !showMore;
}

function setAspectRatio(ratio) {
  aspectRatio = ratio;
  const imagePreview = document.getElementById('imagePreview');
  if (imagePreview) {
    if (ratio === 'auto') {
      imagePreview.style.aspectRatio = 'auto';
    } else {
      const [width, height] = ratio.split(':');
      imagePreview.style.aspectRatio = `${width} / ${height}`;
    }
  }
}

function togglePopupDownload() {
  showPopupDownload = !showPopupDownload;
}

function togglePopupPro() {
  showPopupPro = !showPopupPro;
}

function handleOutsideClick(event, popupType) {
  if (event.target.classList.contains('popup-overlay')) {
    if (popupType === 'download') togglePopupDownload();
    if (popupType === 'pro') togglePopupPro();
  }
}

function toggleAdvancedBackground() {
  showAdvancedBackground = !showAdvancedBackground;
}

function toggleInsetAdvanced() {
  showInsetAdvanced = !showInsetAdvanced;
}

function toggleBorderAdvanced() {
  showBorderAdvanced = !showBorderAdvanced;
}

function handleDragOver(event) {
  event.preventDefault();
  isDragging = true;
}

function handleDragLeave() {
  isDragging = false;
}

function handleDrop(event) {
    event.preventDefault();
    isDragging = false;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      imageFile = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('imagePreview').src = e.target.result;
      };
      reader.readAsDataURL(imageFile);
    }
  }

function handleUpload(event) {
    const files = event.target.files;
    if (files.length > 0) {
      imageFile = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('imagePreview').src = e.target.result;
      };
      reader.readAsDataURL(imageFile);
    }
  }

function previewImage(file) {
  const reader = new FileReader();
  reader.onload = (event) => {
    const preview = document.getElementById('imagePreview');
    preview.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function handleChangeImage() {
  document.getElementById('fileInput').click();
}

function handleNewSnap() {
  imageFile = null;
  document.getElementById('fileInput').value = null;
  document.getElementById('imagePreview').src = '';
}

let backgroundImage = '';

function setBackground(image) {
    backgroundImage = `url(${image})`;
}









</script>

<div class="flex h-screen  ">
  
  <!-- Image adjustment menu -->


  <div class="flex flex-col p-4 space-y-6 overflow-y-auto">
    <div class="flex gap-3 justify-center mt-4">
      <button
        class="text-white rounded-full text-sm font-bold px-5 py-3 bg-purple-600"
        on:click={handleNewSnap}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        New snap
      </button>
      <button
        class="rounded-full px-5 py-3 text-sm font-bold bg-purple-600 text-white"
        on:click={handleChangeImage}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
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
        <button 
        class="bg-purple-600 px-16 py-1 text-sm font-bold rounded-full text-white" 
        on:click={togglePopupPro}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
        Get CaptureQuest Pro
      </button>
      {#if showPopupPro}
      <div class="popup-overlay fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" on:click={(event) => handleOutsideClick(event, 'pro')}>
        <div class="popup-content bg-white rounded-3xl p-10 w-[612px] h-[748px] flex flex-col justify-center items-center text-center">
          <div class="flex justify-center rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-purple-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </div>
          <h2 class="text-4xl font-bold mb-4">Get CaptureQuest Pro</h2>
          <p class="text-gray-600 mb-6">And you have all these benefits:</p>
          <ul class="text-center text-[17px]  space-y-2 mb-6">
            <li class="flex text-[#64748B] items-center justify-center"><svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-2 17.5l-5-5L6.5 11l3.5 3.5L17.5 7l1.5 1.5z"/></svg> No Watermark</li>
            <li class="flex text-[#64748B] items-center justify-center"><svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-2 17.5l-5-5L6.5 11l3.5 3.5L17.5 7l1.5 1.5z"/></svg> Unlimited Downloads</li>
            <li class="flex text-[#64748B] items-center justify-center"><svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-2 17.5l-5-5L6.5 11l3.5 3.5L17.5 7l1.5 1.5z"/></svg> Custom Templates</li>
            <li class="flex text-[#64748B] items-center justify-center"><svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-2 17.5l-5-5L6.5 11l3.5 3.5L17.5 7l1.5 1.5z"/></svg> Priority Support</li>
          </ul>
          <button class="cta-button bg-purple-600 text-white py-3 px-6 rounded-full mb-4" on:click={togglePopupPro}>Upgrade Now</button>
          <button class="cancel-button bg-transparent text-purple-600 py-2 px-4 rounded-full" on:click={togglePopupPro}>Cancel</button>
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

    <!-- Sliders for adjusting image properties -->
<div class="slider-container">
  <div class="flex items-center">
    <span class="label-text">Padding</span>
    <span class="label-text-alt rounded-full px-3 py-1 bg-slate-300 ml-4">{padding}px</span>
  </div>
  <input type="range" min="0" max="300" bind:value={padding} class="slider" on:input={updateSlider} />
  {#if showPaddingAdvanced}
    <div class="advanced-settings">
      <!-- Advanced settings for Padding -->
      Additional Padding Options
    </div>
  {/if}
</div>
<hr>
<div class="slider-container">
  <div class="flex items-center justify-between">
    <span class="label-text">Inset</span>
    <span class="label-text-alt rounded-full px-3 py-1 bg-slate-300 ml-4">{inset}px</span>
    <span class="text-slate-400 hover:text-slate-900 cursor-pointer text-sm font-semibold ml-auto" on:click={toggleInsetAdvanced}>Advanced</span>
  </div>
  <input type="range" min="0" max="100" bind:value={inset} class="slider" on:input={updateSlider} />
  {#if showInsetAdvanced}
    <div class="advanced-settings">
      <!-- Advanced settings for Inset -->
      Additional Inset Options
    </div>
  {/if}
</div>
<hr>
<div class="slider-container">
  <div class="flex items-center">
    <span class="label-text">Shadow</span>
    <span class="label-text-alt rounded-full px-3 py-1 bg-slate-300 ml-4">{shadow}px</span>
  </div>
  <input type="range" min="0" max="100" bind:value={shadow} class="slider" on:input={updateSlider} />
  {#if showShadowAdvanced}
    <div class="advanced-settings">
      <!-- Advanced settings for Shadow -->
      Additional Shadow Options
    </div>
  {/if}
</div>
<hr>
<div class="slider-container">
  <div class="flex items-center">
    <span class="label-text">Rounded</span>
    <span class="label-text-alt rounded-full px-3 py-1 bg-slate-300 ml-4">{rounded}px</span>
  </div>
  <input type="range" min="0" max="100" bind:value={rounded} class="slider" on:input={updateSlider} />
  {#if showRoundedAdvanced}
    <div class="advanced-settings">
      <!-- Advanced settings for Rounded -->
      Additional Rounded Options
    </div>
  {/if}
</div>
<hr>
<div class="slider-container">
  <div class="flex items-center justify-between">
    <span class="label-text">Border</span>
    <span class="label-text-alt rounded-full px-3 py-1 bg-slate-300 ml-4">{border}px</span>
    <span class="text-slate-400 hover:text-slate-900 cursor-pointer text-sm font-semibold ml-auto" on:click={toggleBorderAdvanced}>Advanced</span>
  </div>
  <input type="range" min="0" max="100" bind:value={border} class="slider" on:input={updateSlider} />
  {#if showBorderAdvanced}
    <div class="advanced-settings">
      <!-- Advanced settings for Border -->
      Additional Border Options
    </div>
  {/if}
</div>
    
    
   

  

   
<div class="max-w-md mx-auto mt-20">
  <div class="flex justify-between items-center mb-4">
    <span class="py-2 font-bold text-xl">Background</span>
    <span 
      class="text-slate-400 hover:text-slate-900 cursor-pointer text-sm font-semibold"
      on:click={toggleAdvancedBackground}
    >
      {showAdvancedBackground ? 'Basic' : 'Advanced'}
    </span>
  </div>

  {#if showAdvancedBackground}
    <div class="advanced-settings">
      <p>Advanced Background Options</p>
      
    </div>
  {:else}
    <div class="background-picker">
      <div class="grid grid-cols-5 gap-y-4 gap-3">
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/1.jpg" alt="" on:click={() => setBackground('Background/1.jpg')}>
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/2.jpg" alt="" on:click={() => setBackground('Background/2.jpg')}>
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/3.jpg" alt="" on:click={() => setBackground('Background/3.jpg')}>
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/4.jpg" alt="" on:click={() => setBackground('Background/4.jpg')}>
        <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/5.jpg" alt="" on:click={() => setBackground('Background/5.jpg')}>
      </div>

      {#if showMore}
        <div class="grid grid-cols-5 gap-3 mt-3">
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/6.jpg" alt="" on:click={() => setBackground('Background/6.jpg')}>
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/7.jpg" alt="" on:click={() => setBackground('Background/7.jpg')}>
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/8.jpg" alt="" on:click={() => setBackground('Background/8.jpg')}>
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/9.jpg" alt="" on:click={() => setBackground('Background/9.jpg')}>
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/10.jpg" alt="" on:click={() => setBackground('Background/10.jpg')}>
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/11.jpg" alt="" on:click={() => setBackground('Background/11.jpg')}>
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/12.jpg" alt="" on:click={() => setBackground('Background/12.jpg')}>
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/13.jpg" alt="" on:click={() => setBackground('Background/13.jpg')}>
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/14.jpg" alt="" on:click={() => setBackground('Background/14.jpg')}>
          <img class="w-[60px] h-[60px] bg-cover rounded-lg cursor-pointer" src="Background/15.jpg" alt="" on:click={() => setBackground('Background/15.jpg')}>
        </div>
      {/if}

      <div class="toggle-button">
        <button on:click={toggleText} class="mt-4 text-[#64748B] focus:outline-none">
          {showMore ? 'Show less' : 'Load more'}
        </button>
      </div>
    </div>
  {/if}
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
   


    <div class="aspect-ratio-selector mt-5">
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

  <div class="flex flex-col w-[1200px] h-full">
<!-- Conditional rendering based on whether an image is uploaded -->
{#if !imageFile}
<!-- Upload area -->
<div
  id="upload-box"
  class={`flex-1 flex justify-center items-center p-20 border-4 border-dashed rounded-lg ${
    isDragging ? 'border-purple-600' : 'border-gray-400'
  }`}
  on:dragover={handleDragOver}
  on:dragleave={handleDragLeave}
  on:drop={handleDrop}
  on:click={handleChangeImage}
>
  <span class="text-gray-400 flex flex-col items-center justify-center w-full">
    <p class="text-black font-black text-4xl mb-7">Drag and drop an image</p>
    <div class="flex flex-col items-center">
      <svg class="w-14 h-14 mb-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <button
        class="text-white bg-purple-600 flex items-center px-5 py-3 rounded-full font-bold mb-7"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
        </svg>
        Upload your photo
      </button>
      <input id="fileInput" type="file" accept="image/*" class="hidden" on:change={handleUpload} />
    </div>
  </span>
</div>
{:else}
<!-- Image Preview -->
<div id="display-area" class="mt-44 flex justify-center items-center m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding overflow-y-auto bg-cover w-full" style="background-image: {backgroundImage};">
  <div class="relative" style="padding: {padding}px;">
    <img id="imagePreview" class="max-w-full max-h-[600px] object-contain"
         alt="Preview"
         style="
           box-shadow: inset 0 0 {inset}px rgba(0,0,0,0.5), 0 0 {shadow}px rgba(0,0,0,0.5);
           border-radius: {rounded}px;
           border: {border}px solid black;
           aspect-ratio: {aspectRatio};
         " />
  </div>
</div>
{/if}





  
    <!-- Footer -->
    <footer class="p-4 flex justify-center bg-gray-100 mt-auto">
      <button 
        class="bg-purple-600 flex items-center text-white font-bold rounded-full py-3 px-11" 
        on:click={togglePopupDownload}> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Download
      </button>
    </footer>
  </div>
  </div>

{#if showPopupDownload}
  <div class="popup-overlay fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" on:click={(event) => handleOutsideClick(event, 'download')}>
    <div class="popup-content bg-white rounded-3xl p-10 w-[612px] h-[348px] flex flex-col justify-center items-center text-center">
      <div class="flex justify-center rounded-full mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-red-600">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      </div>
      <h2 class="text-4xl font-bold mb-4">Sing up to CaptureQuest</h2>
      <p class="text-gray-600 mb-6">
        To start downloading your awesome snaps, you'll need a <br> <span class=" text-[#64748B] font-bold">CaptureQuest account.</span> Signing up takes just a quick <br> 2 minutes - and it won't cost you a thing!
      </p>
      <button class="cta-button bg-purple-600 text-white py-3 px-6 rounded-full mb-4" on:click={togglePopupDownload}>Sign up for free</button>
      <button class="cancel-button bg-transparent text-purple-600 py-2 px-4 rounded-full" on:click={togglePopupDownload}>Cancel</button>
    </div>
  </div>
{/if}



<style>

.background-picker {
    max-height: 300px;
    overflow-y: auto;
  }

  .toggle-button {
    margin-top: 10px;
    text-align: center;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0; /* Added padding to the top and bottom */
    min-height: calc(100vh - 40px); /* Ensure full height minus some padding */
  }

  .image-wrapper {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

.advanced-settings {
    background: #f1f5f9;
    
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }

.popup-overlay {
    z-index: 50;
  }

  .popup-content {
    z-index: 60;
  }

.vertical-divider {
    height: calc(100% - 56px); /* Adjust to account for any padding/margin of the container */
  }

  
  

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

  .hidden {
    display: none;
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



