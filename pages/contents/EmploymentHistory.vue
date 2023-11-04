<script setup>
import WriteField from '~/components/WriteField.vue';
import FlexPhotoCard from '~/components/FlexPhotoCard.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
</script>

<template>
  <FixedBackGroundSection bg-image-string="bg-[url('/images/bg-sketch5.png')]">
    <div
      class="mx-auto self-center items-center flex flex-grow flex-col min-h-screen w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1">
      <SmartAnchor id="work-experience" />
      <WriteField>
        <SectionTitle title="Work Experience" link-to-itself="#work-experience" />

        <!-- PFN -->
        <FlexPhotoCard link-address="" class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Summer Internship @ Preferred Networks Inc.
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              From August 2023 to September 2023<br /><br />
              Assigned to the theme of  "Development of training methods for large-scale language models"
            </p>
          </div>
        </FlexPhotoCard>

        <!-- Nissan -->
        <FlexPhotoCard link-address="https://www.nissan-global.com/EN/STORIES/RELEASES/nissan-yokohama-lab/" class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Internship (AI/ML) @ Yokohama Lab., Nissan Motor Co., Ltd.
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              From August 2021 to September 2021<br /><br />
              Tackled the task related to video object detection/classification
            </p>
          </div>
        </FlexPhotoCard>

        <!-- Ghelia -->
        <FlexPhotoCard link-address="https://ghelia.com/en/" class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Software Engineering Intern @ Ghelia Inc.
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              From August 2020 to July 2022<br /><br />
              Worked with an algorithm development team<br />
              Dealt with a complex scheduling problem
            </p>
          </div>
        </FlexPhotoCard>

      </WriteField>
    </div>
  </FixedBackGroundSection>
</template>
