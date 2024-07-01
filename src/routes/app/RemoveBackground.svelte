<script>
  let imageFile;
  let processedImage;

  async function uploadImage() {
      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await fetch('http://localhost:5000/remove-bg', {
          method: 'POST',
          body: formData
      });

      const data = await response.json();
      processedImage = `data:image/png;base64,${data.image}`;
  }
</script>

<style>
  .image-container {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
  }
  .image-container img {
      max-width: 300px;
      border: 1px solid black;
  }
</style>

<h1>Background Remover</h1>
<input type="file" accept="image/*" on:change="{e => imageFile = e.target.files[0]}">
<button on:click="{uploadImage}">Upload and Remove Background</button>

{#if processedImage}
  <div class="image-container">
      <div>
          <h2>Processed Image</h2>
          <img src="{processedImage}" alt="Processed Image">
      </div>
  </div>
{/if}