<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import { Dropzone } from "flowbite-svelte";
  import { Dropdown, DropdownItem, Avatar } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { ButtonGroup, Button } from "flowbite-svelte";
  $: activeUrl = $page.url.pathname;
  let activeClass =
    "text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-500";
  import { page } from "$app/stores";

  let photoDropdown = {
    options: [
      {
        label: "Option 1",
        href: "https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        label: "Option 2",
        href: "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        label: "Option 3",
        href: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      { label: "Option 4", href: "/" },
      { label: "Option 1", href: "/" },
      { label: "Option 2", href: "/" },
      { label: "Option 3", href: "/" },
      { label: "Option 4", href: "/" },
    ],
  };

  /*
      id: "dropdown-2",
      buttonText: "Color",
      content: "Content for Color",
      options: [
        { label: "Option A", href: "/" },
        { label: "Option B", href: "/" },
        { label: "Option C", href: "/" },
        { label: "Option D", href: "/" },
        { label: "Option A", href: "/" },
        { label: "Option B", href: "/" },
        { label: "Option C", href: "/" },
        { label: "Option D", href: "/" },
      ],
    */

  let photosExpanded = false;
  let colorsExpanded = false;
  let currentDropdownIndex = 0; // Initially show content for the first dropdown

  function toggleDropdown(index) {
    currentDropdownIndex = index;
  }

  const handlePhotosDropdown = () => {
    photosExpanded = !photosExpanded;
  };

  const handleColorsDropdown = () => {
    colorsExpanded = !colorsExpanded;
  };

  let imageUrl = "";
  let processedImage = null;
  let value = [];

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
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span class="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p class="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
      <p>{showFiles(value)}</p>
    </Dropzone>

    <div class="flex flex-row mx-auto justify-center py-60 gap-3">
      <div class="flex flex-col transition-all">
        <h2>loading...</h2>
      </div>
      <div
        class="flex flex-row gap-10 border-2 rounded-md border-[#EB4F27] p-4"
      >
        <div class="flex flex-row transition-all">
          <img
            class="max-w-lg rounded-lg"
            src="before.png"
            alt="New Image Here"
          />
        </div>

        <div class="flex flex-col">
          <div class="flex-row flex">
            <div class="relative mt-4">
              <button
                class="bg-[#EB4F27] text-white p-2 rounded-[10px] mr-11"
                aria-haspopup="true"
                aria-expanded={photosExpanded}
                on:click={() => handlePhotosDropdown()}
              >
                Photos
              </button>
              {#if photosExpanded}
                <div
                  class="absolute mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 grid grid-cols-4 gap-2 h-96"
                >
                  {#each photoDropdown.options as option}
                    <a
                      href={option.href}
                      class="flex flex-center px-6 py-3 mr-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      <img class="" src={option.href} alt="" />
                    </a>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex-row flex">
            <div class="relative mt-4">
              <button
                class="bg-[#EB4F27] text-white p-2 rounded-[10px] mr-11"
                aria-haspopup="true"
                aria-expanded={colorsExpanded}
                on:click={() => handlePhotosDropdown()}
              >
                Colors
              </button>
              {#if colorsExpanded}
                <div
                  class="absolute mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 grid grid-cols-4 gap-2 h-96"
                >
                  {#each photoDropdown.options as option}
                    <a
                      href={option.href}
                      class="flex flex-center px-6 py-3 mr-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {option.label}
                    </a>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </div>

        <Button class="mt-20  " on:click={downloadImage}
          >Download Processed Image</Button
        >
      </div>
    </div>
  </div>
</main>
