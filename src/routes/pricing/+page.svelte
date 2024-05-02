<script>
  import { Card } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
  import { Button } from "flowbite-svelte";
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
    FooterIcon,
  } from "flowbite-svelte";
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
    <div class="flex flex-col lg:flex-row gap-8 mx-auto py-14">
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
              Limited to 3 images for background removal.
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Basic editing features.
            </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid
              class="w-4 h-4 text-primary-600 dark:text-primary-500"
            />
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >
              Integration help
            </span>
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >Sketch Files</span
            >
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >API Access</span
            >
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >Complete documentation</span
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

      <Card class="h-fit" padding="xl">
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
              Unlimited background removal.
            </span>
          </li>
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
              Access to future updates and new features.
            </span>
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >Sketch Files</span
            >
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >API Access</span
            >
          </li>
          <li
            class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
          >
            <CheckCircleSolid
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            />
            <span class="text-base font-normal leading-tight text-gray-500"
              >Complete documentation</span
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


<Footer footerType="socialmedia">
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <img src="/" alt="logo" />
    <FooterCopyright href="/" by="CaptureQuest™" />
  </div>
</Footer>
