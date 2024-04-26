<script>
  import { Card } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
  import { Button } from "flowbite-svelte";
</script>

<div class="flex justify-center justify-items-center w-screen h-screen">
  <div class="flex flex-col lg:flex-row gap-8 mx-auto">
    <Card class="h-fit" padding="xl">
      <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        Free plan
      </h5>
      <div
        class="flex items-baseline text-gray-900 dark:text-white justify-content: center;"
      >
        <span class="text-3xl font-semibold">$</span>
        <span class="text-5xl font-extrabold tracking-tight">0</span>
        <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"
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
          <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span class="text-base font-normal leading-tight text-gray-500"
            >Sketch Files</span
          >
        </li>
        <li
          class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
        >
          <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span class="text-base font-normal leading-tight text-gray-500"
            >API Access</span
          >
        </li>
        <li
          class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
        >
          <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span class="text-base font-normal leading-tight text-gray-500"
            >Complete documentation</span
          >
        </li>
        <li
          class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
        >
          <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
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
        <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"
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
          <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span class="text-base font-normal leading-tight text-gray-500"
            >Sketch Files</span
          >
        </li>
        <li
          class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
        >
          <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span class="text-base font-normal leading-tight text-gray-500"
            >API Access</span
          >
        </li>
        <li
          class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
        >
          <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span class="text-base font-normal leading-tight text-gray-500"
            >Complete documentation</span
          >
        </li>
        <li
          class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
        >
          <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span class="text-base font-normal leading-tight text-gray-500"
            >24×7 phone & email support</span
          >
        </li>
      </ul>
      <Button href="/">Get Started</Button>
    </Card>
  </div>
</div>
