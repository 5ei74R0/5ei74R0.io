<script setup>
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
</script>

<template>
  <div class="mx-auto self-center items-center flex flex-grow flex-col min-h-screen w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1">
    <SmartAnchor id="miscellaneous" />
    <WriteField>
      <SectionTitle title="Misc." link-to-itself="#miscellaneous" />
      <h4 class="text-xl mt-4 mb-2">Tech Blog (ja)</h4>
      <p class="mb-8">
        <NuxtLink to="https://zenn.dev/5ei74r0" class="hover:text-nord-aurora-1 underline">
          See Zenn articles
        </NuxtLink>
      </p>
      <h4 class="text-xl mt-4 mb-2">Journal Club</h4>
      <p class="mb-8">
        <NuxtLink to="https://speakerdeck.com/keio_smilab" class="hover:text-nord-aurora-1 underline">
          (See other slides in Speaker Deck)
        </NuxtLink>
      </p>
      <ul>
        <li class="mb-8">
          <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/e137bf9d652e42a3892f6986f38b25f4" title="[Journal club] Transformers Learn In-Context by Gradient Descent" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>
        </li>
        <li class="mb-8">
          <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/fc8aecdd464544d0a597ef634832e7b7" title=" [Journal club] TIES-Merging: Resolving Interference When Merging Models" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>
        </li>
        <li class="mb-8">
          <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/add5548186ba4ad0bc13645b1ff040db" title="[Journal club] Sigmoid Loss for Language Image Pre-Training" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>
        </li>
        <li class="mb-8">
          <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/d08b8b5d8c8741cf85317edb17cce5ad" title="[Journal club] Data Efficient Language-Supervised Zero-Shot Recognition with Optimal Transport Distillation" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>
        </li>
      </ul>

    </WriteField>
  </div>
</template>
