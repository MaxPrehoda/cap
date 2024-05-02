<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
  import { CardPlaceholder } from "flowbite-svelte";
</script>

<div class="h-full w-full relative">
  <div
    class="relative flex-col flex gap-5 text-center py-24 font-bold text-6xl"
  >
    <div class="absolute transform-gpu blur-[68px]" aria-hidden="true">
      <div
        class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-[#ff8c66] to-[#ff4a0e] opacity-30"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"/>
    </div>
    <div>We're More Than Just A</div>
    <div>Background Removal Solution</div>
    <p class="text-sm">
      Our mission is to revolutionize the world of digital imagery. Accessible to every user,<br> anywhere, anytime, we empower individuals and businesses to transcend the limitations  of traditional editing methods. <br>We assist creators in navigating the evolving landscape of visual content by providing innovative solutions and fostering a culture of collaboration.
    </p>
  </div>
</div>

<div class="flex justify-center items-center ">
  <div class="bg-red-500 w-96 h-96 rounded-lg">
  </div>
</div>


<div class="bg-white">
  <div class="absolute transform-gpu blur-[68px]" aria-hidden="true">
    <div
      class="aspect-[1108/632] w-[60.25rem] bg-gradient-to-r from-[#ff8c66] to-[#ff4a0e] opacity-30"
      style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"/>
  </div>
  <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <p class="mt-4 text-base leading-7 text-gray-600">
          Can't find the answer you're looking for? Reach out to our <a
            href="#"
            class="font-semibold text-orange-500 hover:text-indigo-500"
            >customer support</a
          > team.
        </p>
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl class="space-y-10">
          <div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              What are the pricing options for CaptureQuest?
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              CaptureQuest offers a free plan with 3 free background removals
              per day, as well as a Pro plan for $15 per month that provides
              unlimited background removals
            </dd>
          </div>
        </dl>
        <dl class="space-y-10">
          <div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              What are the key features of CaptureQuest?
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              CaptureQuest is a powerful image editing tool that allows you to
              easily remove backgrounds from any image and replace them with a
              new background. Key features include fast and efficient background
              removal, free and paid pricing plans, competitive pricing compared
              to similar apps, and an easy-to-use interface.
            </dd>
          </div>
        </dl>
        <dl class="space-y-10">
          <div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              How accurate are the background removal results typically?
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              The accuracy of background removal can vary depending on the tool
              used and the complexity of the image. CaptureQuest is quite
              accurate, even handling tricky elements like hair or transparent
              objects. CaptureQuest is has a free plan so you can give it a try.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>

<Footer footerType="socialmedia">
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <img src="/" alt="logo">
    <FooterCopyright href="/" by="CaptureQuest™" />
  </div>
</Footer>
