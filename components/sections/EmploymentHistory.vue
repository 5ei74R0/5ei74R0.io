<script setup>
import WriteField from '~/components/WriteField.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
</script>

<template>
  <FixedBackGroundSection
    bg-image-string="bg-[url('/5ei74R0.io/images/bg-sketch5.png')]"
    overlay-class="bg-nord-snow-1/80 dark:bg-nord-night-1/80">
    <div
      class="mx-auto self-center items-center flex flex-grow flex-col w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1">
      <SmartAnchor id="work-experience" />
      <WriteField additional-classes="mx-auto">
        <SectionTitle title="Experience" link-to-itself="#work-experience" />
        <p class="mb-10 max-w-2xl leading-8 text-nord-night-2 dark:text-nord-snow-0">
          Professional roles and academic background across AI, machine learning,
          vision-and-language, robotics, and applied algorithmic systems.
        </p>

        <div class="space-y-5">
          <article class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[10rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <time class="text-sm font-medium text-nord-aurora-0 dark:text-nord-aurora-3">Apr 2025 - Present</time>
            <div>
              <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 class="text-lg font-semibold text-nord-night-0 dark:text-nord-snow-2">
                  <NuxtLink class="underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3" to="https://www.preferred.jp/en/">
                    Preferred Networks, Inc.
                  </NuxtLink>
                </h3>
                <p class="text-sm text-nord-night-2 dark:text-nord-snow-0">Research Engineer</p>
              </div>
              <p class="mt-3 leading-7 text-nord-night-2 dark:text-nord-snow-0">
                Current research engineering role at Preferred Networks, focusing on
                LLM-agent systems and vision-language model (VLM) development for applied AI workflows.
              </p>
            </div>
          </article>

          <article class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[10rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <time class="text-sm font-medium text-nord-aurora-0 dark:text-nord-aurora-3">Aug 2023 - Dec 2023</time>
            <div>
              <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 class="text-lg font-semibold text-nord-night-0 dark:text-nord-snow-2">
                  <NuxtLink class="underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3" to="https://www.preferred.jp/en/">
                    Preferred Networks, Inc.
                  </NuxtLink>
                </h3>
                <p class="text-sm text-nord-night-2 dark:text-nord-snow-0">Research Internship / Part-Time Engineer</p>
              </div>
              <p class="mt-3 leading-7 text-nord-night-2 dark:text-nord-snow-0">
                Worked on development of training methods for Large Language Models,
                then continued the research project as a part-time engineer.
              </p>
            </div>
          </article>

          <article class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[10rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <time class="text-sm font-medium text-nord-aurora-0 dark:text-nord-aurora-3">Aug 2021 - Sep 2021</time>
            <div>
              <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 class="text-lg font-semibold text-nord-night-0 dark:text-nord-snow-2">
                  <NuxtLink class="underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3" to="https://www.nissan-global.com/EN/STORIES/RELEASES/nissan-yokohama-lab">
                    Nissan Motor Co., Ltd.
                  </NuxtLink>
                </h3>
                <p class="text-sm text-nord-night-2 dark:text-nord-snow-0">Internship, AI/ML</p>
              </div>
              <p class="mt-3 leading-7 text-nord-night-2 dark:text-nord-snow-0">
                Worked on video object detection and classification.
              </p>
            </div>
          </article>

          <article class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[10rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <time class="text-sm font-medium text-nord-aurora-0 dark:text-nord-aurora-3">Aug 2020 - Jul 2022</time>
            <div>
              <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 class="text-lg font-semibold text-nord-night-0 dark:text-nord-snow-2">
                  <NuxtLink class="underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3" to="https://ghelia.com">
                    Ghelia, Inc.
                  </NuxtLink>
                </h3>
                <p class="text-sm text-nord-night-2 dark:text-nord-snow-0">Software Engineering Intern</p>
              </div>
              <p class="mt-3 leading-7 text-nord-night-2 dark:text-nord-snow-0">
                Contributed to a development team focused on algorithmic solutions.
              </p>
            </div>
          </article>
        </div>

        <h3 class="mb-4 mt-12 text-xl font-semibold text-nord-night-0 dark:text-nord-snow-2">Education</h3>

        <div class="space-y-5">
          <article class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[10rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <time class="text-sm font-medium text-nord-aurora-0 dark:text-nord-aurora-3">Apr 2023 - Mar 2025</time>
            <div>
              <h3 class="text-lg font-semibold text-nord-night-0 dark:text-nord-snow-2">Keio University</h3>
              <p class="mt-2 leading-7 text-nord-night-2 dark:text-nord-snow-0">
                M.S. in Computer Science, Information and Computer Science.
              </p>
            </div>
          </article>

          <article class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[10rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <time class="text-sm font-medium text-nord-aurora-0 dark:text-nord-aurora-3">Apr 2019 - Mar 2023</time>
            <div>
              <h3 class="text-lg font-semibold text-nord-night-0 dark:text-nord-snow-2">Keio University</h3>
              <p class="mt-2 leading-7 text-nord-night-2 dark:text-nord-snow-0">
                Bachelor of Engineering, Information and Computer Science.
              </p>
            </div>
          </article>
        </div>
      </WriteField>
    </div>
  </FixedBackGroundSection>
</template>
