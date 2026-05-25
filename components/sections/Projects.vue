<script setup>
import WriteField from '~/components/WriteField.vue';
import FlexPhotoCard from '~/components/FlexPhotoCard.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
</script>

<template>
  <FixedBackGroundSection
    bg-image-string="bg-[url('/5ei74R0.io/images/bg-sketch2.png')]"
    overlay-class="bg-nord-snow-1/95 dark:bg-nord-night-1/95">
    <div
      class="mx-auto flex w-full max-w-screen-xl flex-grow flex-col items-center self-center text-nord-night-1 dark:text-nord-snow-1">
      <WriteField additional-classes="mx-auto">
        <SmartAnchor id="projects" />
        <SectionTitle title="Projects" link-to-itself="#projects" />
        <p class="mb-10 max-w-2xl leading-8 text-nord-night-2 dark:text-nord-snow-0">
          Earlier implementation work from undergraduate coursework and prototypes.
        </p>

        <div class="flex justify-center">
          <FlexPhotoCard
            img-src="/5ei74R0.io/images/anonymask-demo3.png"
            link-address="https://github.com/5ei74R0/Anonymask/tree/main">
            <div class="flex flex-col justify-between p-5 leading-normal md:p-6">
              <div>
                <div class="mb-3 flex flex-wrap gap-2 text-xs font-medium">
                  <span class="rounded-md border border-nord-aurora-0/30 bg-nord-aurora-0/20 px-2 py-1 text-nord-aurora-0 dark:border-nord-aurora-3/30 dark:bg-nord-aurora-3/20 dark:text-nord-aurora-3">Computer Vision</span>
                  <span class="rounded-md bg-nord-snow-0 px-2 py-1 text-nord-night-2 dark:bg-nord-night-1 dark:text-nord-snow-0">Undergraduate Coursework</span>
                </div>
                <h3 class="mb-3 text-2xl font-semibold text-nord-night-0 dark:text-nord-snow-2">
                  Anonymask
                </h3>
                <p class="text-sm leading-7 text-nord-night-2 dark:text-nord-snow-0">
                  Anonymask detects logos and naturally inpaints them. Built during my undergraduate studies before diffusion-based
                  inpainting became mainstream, it used YOLOv5 as a logo detector, MAE as an inpainter, and SwinIR for super resolution.
                </p>
              </div>
              <p class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-nord-aurora-0 transition-colors group-hover:text-nord-aurora-0 dark:text-nord-aurora-3 dark:group-hover:text-nord-aurora-3">
                <ServiceIcon name="github" />
                View repository
              </p>
            </div>
          </FlexPhotoCard>
        </div>
      </WriteField>
    </div>
  </FixedBackGroundSection>
</template>
