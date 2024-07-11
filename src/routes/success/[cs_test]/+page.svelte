<script>
  import { confetti } from "@neoconfetti/svelte";


</script>



<div
  class="flex h-screen max-h-screen overflow-hidden relative items-center justify-center "
>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!--
            Background backdrop, show/hide based on modal state.
        
            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          -->
    <div
      class="absolute overflow-hidden"
      use:confetti={{
        colors: ["#A148FF", "#4329FF", "#7529FF", "#8F51FF"],
        stageHeight: 1500,
        stageWidth: 3000,
        particleCount: 200,
        force: 0.34,
      }}
    />
    <div class="fixed inset-0 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <!--
                Modal panel, show/hide based on modal state.
        
                Entering: "ease-out duration-300"
                  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  To: "opacity-100 translate-y-0 sm:scale-100"
                Leaving: "ease-in duration-200"
                  From: "opacity-100 translate-y-0 sm:scale-100"
                  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-2xl shadow-purple-600 transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 shaking-element"
        >
          <div>
            <div
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50"
            >
              <svg
                class="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-2xl font-semibold font-display leading-6 text-neutral-950"
                id="modal-title"
              >
                Payment successful
              </h3>
              <div class="mt-2">
                <p class="text-sm text-neutral-800">
                  Your adventure in capturing stunning images begins now. Start exploring CaptureQuest today! .
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <a
              href="/app"
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Start editing <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus-circle w-5 h-5 inline mb-0.5 ml-1.5"
                ><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path
                  d="M12 8v8"
                /></svg
              >
            </a>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes shakeIn {
    0% {
      opacity: 0;
      transform: scale(0.8) rotate(-5deg);
    }
    20% {
      transform: scale(1.2) rotate(5deg);
    }
    40% {
      transform: scale(1.1) rotate(-3deg);
    }
    60% {
      transform: scale(1.05) rotate(2deg);
    }
    80% {
      transform: scale(1.02) rotate(-1deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }

  .shaking-element {
    animation: shakeIn 0.8s ease-in;
  }
</style>
