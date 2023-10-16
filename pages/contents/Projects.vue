<script setup>
import WriteField from '~/components/WriteField.vue';
import InteractiveCard from '~/components/InteractiveCard.vue';
import FlexPhotoCard from '~/components/FlexPhotoCard.vue';
import Card from '~/components/Card.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';

</script>

<template>
  <FixedBackGroundSection bg-image-string="bg-[url('/images/bg-sketch2.png')]">
    <div
      class="mx-auto self-center items-center flex flex-grow flex-col min-h-screen w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1">
      <WriteField>
        <SmartAnchor id="projects" />
        <SectionTitle title="Projects" link-to-itself="#projects" bg-image-string="bg-[url('/images/ruin-cities2.png')]"
          additional-classes=" text-left" />
        <FlexPhotoCard img-src="/5ei74R0.io/images/anonymask-demo3.png"
          link-address="https://github.com/5ei74R0/Anonymask/tree/main"
          class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Anonymask
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              Anonymask detects any logos and naturally inpaints them. It is a toy product built in a coursework and uses
              YOLOv5 as a logo detector, MAE as an inpainter, and SwinIR for super resolution. Banish any logo from your
              sight! 👀
            </p>
          </div>
        </FlexPhotoCard>
        <FlexPhotoCard img-src="/5ei74R0.io/images/dotfiles.jpg"
          link-address="https://github.com/5ei74R0/dotfiles/tree/main"
          class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Simple, Rust-Centric dotfiles
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              Autosync<br />
              Shell plugin management w/ sheldon<br />
              Runtime management w/ rtx-cli<br />
              Dress up w/ Starship + UDEV Gothic<br />
              One-step installer, install.sh<br />
              Test w/ Github Actions<br />
            </p>
          </div>
        </FlexPhotoCard>

        <!-- References -->
        <Card link-address="" class="mt-24 mb-24">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight">
              Repositories:
            </h5>
            <NuxtLink to="https://github.com/5ei74R0?tab=repositories" class="mt-2 mb-4 hover:text-nord-aurora-1 underline">
              See more projects at GitHub
            </NuxtLink>
          </div>
        </Card>
      </WriteField>
    </div>
  </FixedBackGroundSection>
</template>