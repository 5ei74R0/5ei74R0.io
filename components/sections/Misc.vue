<script setup>
import WriteField from '~/components/WriteField.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
</script>

<template>
  <FixedBackGroundSection
    bg-image-string="bg-[url('/5ei74R0.io/images/bg-sketch6.png')]"
    overlay-class="bg-nord-snow-1/95 dark:bg-nord-night-1/95">
    <div class="mx-auto flex min-h-screen w-full max-w-screen-xl flex-grow flex-col items-center self-center text-nord-night-1 dark:text-nord-snow-1">
      <SmartAnchor id="writing" />
      <WriteField additional-classes="mx-auto">
        <SectionTitle title="Writing / Talks" link-to-itself="#writing" />
        <p class="mb-10 max-w-2xl leading-8 text-nord-night-2 dark:text-nord-snow-0">
          Technical notes and archived student-era presentation materials.
        </p>

        <div class="space-y-5">
          <article class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[8rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <p class="text-sm font-medium text-nord-aurora-0 dark:text-nord-aurora-3">Tech Blog</p>
            <div>
              <h3 class="text-lg font-semibold text-nord-night-0 dark:text-nord-snow-2">Zenn Articles</h3>
              <p class="mt-3 leading-7 text-nord-night-2 dark:text-nord-snow-0">
                Japanese technical notes and implementation write-ups.
              </p>
              <NuxtLink to="https://zenn.dev/5ei74r0" class="mt-3 inline-flex items-center gap-2 text-sm font-medium underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3">
                <ServiceIcon name="zenn" />
                See Zenn articles
              </NuxtLink>
            </div>
          </article>

          <article class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[8rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <p class="text-sm font-medium text-nord-aurora-0 dark:text-nord-aurora-3">Slides</p>
            <div>
              <h3 class="text-lg font-semibold text-nord-night-0 dark:text-nord-snow-2">Research Survey Slides</h3>
              <p class="mt-3 leading-7 text-nord-night-2 dark:text-nord-snow-0">
                Student-era paper-reading and journal-club slides on machine learning and multimodal learning.
                This archive is no longer actively updated by me.
              </p>
              <NuxtLink to="https://speakerdeck.com/keio_smilab" class="mt-3 inline-flex items-center gap-2 text-sm font-medium underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3">
                <ServiceIcon name="slides" />
                See slides on Speaker Deck
              </NuxtLink>
            </div>
          </article>
        </div>
      </WriteField>
    </div>
  </FixedBackGroundSection>
</template>
