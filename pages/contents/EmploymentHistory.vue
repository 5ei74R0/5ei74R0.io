<script setup>
import WriteField from '~/components/WriteField.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
</script>

<template>
  <FixedBackGroundSection bg-image-string="bg-[url('/images/bg-sketch5.png')]">
    <!-- <div
      class="mx-auto self-center items-center flex flex-grow flex-col min-h-screen w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1"> -->
    <div
      class="mx-auto self-center items-center flex flex-grow flex-col w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1">
      <SmartAnchor id="work-experience" />
      <WriteField>
        <SectionTitle title="Work Experience" link-to-itself="#work-experience" />
        <!-- <p class="mb-10">(In reverse-chronological order)</p> -->
        <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
          <!-- PFN post-intern -->
          <li>
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start md:text-start mb-10">
              <time class="italic">October 2023 - December 2023</time>
              <div class="text-lg font-black underline"><NuxtLink to="https://www.preferred.jp/en/">Preferred Networks Inc.</NuxtLink></div>
              <div class="text-lg font-extralight">Part-Time Engineer</div>
              <p class="mb-4">Continued the successful research project initiated during my research internship.</p>
            </div>
            <hr class="bg-nord-night-2 dark:bg-nord-snow-2"/>
          </li>
          <!-- PFN intern -->
          <li>
            <hr class="bg-nord-night-2 dark:bg-nord-snow-2"/>
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start md:text-start mb-10">
              <time class="italic">August 2023 - September 2023</time>
              <div class="text-lg font-black underline"><NuxtLink to="https://www.preferred.jp/en/">Preferred Networks Inc.</NuxtLink></div>
              <div class="text-lg font-extralight">Research Internship</div>
              <p class="mb-4">Worked with researchers on the assigned theme:
                <br>"Development of training methods for Large Language Models (LLMs)."</p>
            </div>
            <hr class="bg-nord-night-2 dark:bg-nord-snow-2"/>
          </li>
          <!-- Nissan -->
          <li>
            <hr class="bg-nord-night-2 dark:bg-nord-snow-2"/>
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start mb-10">
              <time class="italic">August 2021 - September 2021</time>
              <div class="text-lg font-black underline">
                <NuxtLink to="https://www.nissan-global.com/EN/STORIES/RELEASES/nissan-yokohama-lab">
                  Yokohama Lab., Nissan Motor Co., Ltd.
                </NuxtLink>
              </div>
              <div class="text-lg font-extralight">Internship (AI/ML)</div>
              <p class="mb-4">
                Tackled video object detection and classification tasks.
                Conducted model training, improvement, and created demonstrations of related functionalities.
              </p>
            </div>
            <hr class="bg-nord-night-2 dark:bg-nord-snow-2"/>
          </li>
          <!-- Ghelia -->
          <li>
            <hr class="bg-nord-night-2 dark:bg-nord-snow-2"/>
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start md:text-start mb-10">
              <time class="italic">August 2020 - July 2022</time>
              <div class="text-lg font-black underline"><NuxtLink to="https://ghelia.com">Ghelia Inc.</NuxtLink></div>
              <div class="text-lg font-extralight">Software Engineering Intern</div>
              <p class="mb-4">
                Worked with an algorithm development team.
                Dealt with a complex scheduling problem.
            </p>
            </div>
            <hr class="bg-nord-night-2 dark:bg-nord-snow-2"/>
          </li>
        </ul>
      </WriteField>
    </div>
  </FixedBackGroundSection>
</template>
