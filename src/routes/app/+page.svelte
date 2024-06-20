<script>
  let rounded = 0;
  let padding = 100;
  let shadowPosition = 3;
  let shadowOptions = ['none', 'sm', 'md', 'lg', 'xl', '2xl'];
  let backgroundColorType = 'solid'; // Default color type
  let backgroundColor = '#ffffff'; // Default background color
  let gradientColors = ['#ff0000', '#00ff00']; // Default gradient colors
  let rgbaColor = 'rgba(255, 0, 0, 1)'; // Default RGBA color
</script>

<div class="flex h-screen">
  <!-- Left sidebar -->
  <div class="flex flex-col w-48 bg-base-100 p-4 border-r border-gray-300">
    <button class="w-full px-4 py-2 rounded-box text-left text-base-content font-medium duration-100 hover:bg-base-300">Background</button>
  </div>

  <!-- Divider -->
  <div class="w-1 bg-gray-300"></div>

  <!-- Image adjustment menu -->
  <div class="flex flex-col p-4 space-y-6">
    <h2 class="text-lg font-semibold mb-4">Background Images</h2>
    <div class="form-control">
      <div class="flex justify-between items-center">
        <span class="label-text">Rounded</span>
        <span class="label-text-alt">{rounded} px</span>
      </div>
      <input type="range" min="0" max="300" bind:value={rounded} class="w-full mt-2 slider" />
    </div>

    <!-- New slider for padding -->
    <div class="form-control mt-4">
      <div class="flex justify-between items-center">
        <span class="label-text">Padding</span>
        <span class="label-text-alt">{padding}px</span>
      </div>
      <input type="range" min="0" max="100" bind:value={padding} class="w-full mt-2 slider" />
    </div>

    <!-- Shadow options -->
    <div class="form-control mt-4">
      <div class="flex justify-between items-center">
        <span class="label-text">Shadow</span>
        <span class="label-text-alt">{shadowOptions[shadowPosition - 1]}</span>
      </div>
      <input type="range" min="1" max="6" bind:value={shadowPosition} class="w-full mt-2 slider" step="1" />
      <div class="flex justify-between mt-1">
        {#each shadowOptions as option, index}
          <span class="text-xs">{option.toUpperCase()}</span>
        {/each}
      </div>
    </div>

    <!-- Background color picker -->
    <h1 class="text-lg font-semibold mt-8 mb-4">Background</h1>
    <div class="form-control">
      <div class="flex justify-between items-center">
        <span class="label-text">Color Type</span>
        <div class="flex space-x-2">
          <button class="btn" on:click={() => backgroundColorType = 'solid'}>Solid</button>
          <button class="btn" on:click={() => backgroundColorType = 'gradient'}>Gradient</button>
        </div>
      </div>
    </div>

    {#if backgroundColorType === 'solid'}
      <div class="form-control mt-4">
        <div class="flex justify-between items-center">
          <span class="label-text">Background Color</span>
          <input type="color" bind:value={backgroundColor} class="w-16 h-16 rounded-full border-2 border-gray-300" />
        </div>
      </div>
      <div class="form-control mt-4">
        <div class="flex justify-between items-center">
          <span class="label-text">Hex Color</span>
          <input type="text" bind:value={backgroundColor} class="input input-bordered w-full" />
        </div>
      </div>
      <div class="form-control mt-4">
        <div class="flex justify-between items-center">
          <span class="label-text">RGBA Color</span>
          <input type="text" bind:value={rgbaColor} class="input input-bordered w-full" />
        </div>
      </div>
    {/if}

    {#if backgroundColorType === 'gradient'}
      <div class="form-control mt-4">
        <div class="flex justify-between items-center">
          <span class="label-text">Gradient Color 1</span>
          <input type="color" bind:value={gradientColors[0]} class="w-16 h-16 rounded-full border-2 border-gray-300" />
        </div>
      </div>
      <div class="form-control mt-4">
        <div class="flex justify-between items-center">
          <span class="label-text">Gradient Color 2</span>
          <input type="color" bind:value={gradientColors[1]} class="w-16 h-16 rounded-full border-2 border-gray-300" />
        </div>
      </div>
    {/if}
  </div>

  <!-- Image display section -->
  <div class="flex justify-center items-center bg-gray-200 p-4 flex-1">
    <img src="/car.png" alt="Image" class="max-w-full max-h-full rounded-lg" style="padding: {padding}px; border-radius: {rounded}px; box-shadow: var(--tw-shadow-{shadowOptions[shadowPosition - 1]})" />
  </div>
</div>

<style>
  .slider {
    --tw-shadow: 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: #ddd;
    outline: none;
    opacity: 0.7;
    transition: opacity .15s ease-in-out;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #0a0b0a;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #0a0b0a;
    cursor: pointer;
  }
</style>




<!-- <main>
  <div class="flex flex-col py-4">
    <h1 class="text-center py-3">Screenshot Background Removal</h1>
    <Dropzone
      id="dropzone"
      on:drop={dropHandle}
      on:dragover={(event) => {
        event.preventDefault();
      }}
      on:change={handleChange}
      class="w-1/2 mx-auto"
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
      <button class="inline-block px-5 py-4 my-4 rounded-full text-white text-xl bg-[#007BFF]">
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
  </div>
</main> -->
