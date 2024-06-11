<script>
  import { Card } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
  import { Button } from "flowbite-svelte";
</script>

<div class="h-full w-full relative">
  <div
    class="relative flex-col flex gap-5 text-center py-24 font-bold text-6xl"
  >
    <div class="absolute transform-gpu blur-[68px]" aria-hidden="true">
      <div
        class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-[#ff8c66] to-[#ff4a0e] opacity-30"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      />
    </div>
    <div>Elevate Your Photography</div>
    <div>with One Click</div>
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
      <Card class="h-fit relative border-amber-600  border-2 " padding="xl">
        <div
          class=" bg-gradient-to-r from-red-500 to-orange-500 absolute flex items-center gap-1 -top-0 -translate-y-1/2 left-8 studio-primary-gradient rounded py-1 px-2.5 text-xxs tracking-widest text-white"
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
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Advanced editing features
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              High quality exports
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Unlimited background removal
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Access to future updates and new features
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Priority support
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Advanced templates
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Batch processing
            </span>
          </li>
        </ul>
        <form action="?/subscribepro" method="POST">
          <Button class="w-full" type="submit">Get Started</Button>
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
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Basic editing features
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Limited to 3 images for background removal
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
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
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
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
        <Button href="/">Get Started</Button>
      </Card>
    </div>
  </div>
</div>
