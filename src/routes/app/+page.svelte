<script>
  import { onMount } from "svelte";
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
    formData.append("bg_color" , color )
    formData.append("size", "auto")
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
</script>

<main>
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
</main>
