
  import { onMount } from 'svelte';
  import 'opencv.js';  // Ensure this is correctly pointing to the installed library

  let image = null;
  let imageUrl = '';
  
  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      imageUrl = URL.createObjectURL(file);
      image = file;
      onMount(() => processImage());
    }
  }
  
  async function processImage() {
    const imgElement = document.getElementById('uploadedImage');
    if (imgElement) {
      await imgElement.decode();
      const src = cv.imread(imgElement);
      const dst = new cv.Mat();
      
      // Perform background removal
      // Convert the image to grayscale
      cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
      // Apply Gaussian blur to the image
      cv.GaussianBlur(src, src, new cv.Size(5, 5), 0, 0, cv.BORDER_DEFAULT);
      // Apply adaptive thresholding
      cv.adaptiveThreshold(src, dst, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 11, 2);
      
      cv.imshow('outputCanvas', dst);
      
      src.delete();
      dst.delete();
    }
  }
