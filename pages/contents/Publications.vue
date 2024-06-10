<script setup>
import WriteField from '~/components/WriteField.vue';
import InteractiveCard from '~/components/InteractiveCard.vue';
import Card from '~/components/Card.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
</script>

<template>
  <FixedBackGroundSection bg-image-string="bg-[url('/images/bg-sketch3.png')]">
    <!-- <div
      class="mx-auto self-center items-center flex flex-grow flex-col min-h-screen w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1"> -->
    <div
      class="mx-auto self-center items-center flex flex-grow flex-col w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1">
      <SmartAnchor id="publications-awards" />
      <WriteField>
        <SectionTitle title="Selected Publications / Awards" link-to-itself="#publications-awards"
          bg-image-string="bg-[url('/images/snowy-mountains2_x2.png')]" />
  
  
        <!-- International Conferences -->
        <h4 class="text-2xl font-medium mt-12 mb-4">International Conferences</h4>
  
        <!-- B4, IROS2023 -->
        <div>
          <NuxtLink class="text-lg underline hover:text-nord-aurora-1" to="https://ieeexplore.ieee.org/document/10341388">Prototypical Contrastive Transfer Learning for Multimodal Language Understanding</NuxtLink>
          <p class="font-extralight text-nord-night-2 dark:text-nord-snow-0">
            S. Otsuki, S. Ishikawa, and K. Sugiura
          </p>
          <p class="mb-3 text-nord-night-2 dark:text-nord-snow-0">
            Oral+Poster @IROS2023
          </p>
          <hr class="mt-2 mb-6 border-gray-400 dark:border-gray-500" />
        </div>
  
        <!-- B3, The CORSMAL challenge 2022 -->
        <div>
          <NuxtLink class="text-lg underline hover:text-nord-aurora-1" to="https://ieeexplore.ieee.org/document/9747110">Shared Transformer Encoder with Mask-based 3D Model Estimation for Container Mass Estimation</NuxtLink>
          <p class="font-extralight text-nord-night-2 dark:text-nord-snow-0">
            T. Matsubara*, S. Otsuki*, Y. Wada*, H. Matsuo, T. Komatsu, Y. Iioka, K. Sugiura, H. Saito
          </p>
          <p class="mb-3 text-nord-night-2 dark:text-nord-snow-0">
            Workshop @ICASSP2022
          </p>
          <hr class="mt-2 mb-6 border-gray-400 dark:border-gray-500" />
        </div>
  

        <!-- Awards -->
        <h4 class="text-2xl mt-12 mb-4">Awards</h4>
  
        <!-- B3, The CORSMAL challenge 2022 -->
        <div>
          <div class="text-lg">
            Best performing solution for container capacity estimation and capacity and dimensions estimation and filling mass, The CORSMAL challenge 2022
          </div>
          <p class="font-extralight text-nord-night-2 dark:text-nord-snow-0">
            T. Matsubara*, S. Otsuki*, Y. Wada*, H. Matsuo, T. Komatsu, Y. Iioka, K. Sugiura, H. Saito
          </p>
          <p class="mb-3 text-nord-night-2 dark:text-nord-snow-0">
            The CORSMAL challenge 2022, 23 June 2022
          </p>
          <hr class="mt-2 mb-6 border-gray-400 dark:border-gray-500" />
        </div>
  
        <!-- B4, The REVERIE challenge 2022 -->
        <div>
          <div class="text-lg">
            Honorable Mention Award, REVERIE Challenge @ CSIG 2022
          </div>
          <p class="font-extralight text-nord-night-2 dark:text-nord-snow-0">
            M. Kambara, Y. Yoshida, K. Kaneda, S. Otsuki, R. Korekata, H. Matsuo, Y. Wada, W. Yang, K. Sugiura
          </p>
          <p class="mb-3 text-nord-night-2 dark:text-nord-snow-0">
            REVERIE Challenge @ CSIG 2022, 19 August 2022
          </p>
          <hr class="mt-2 mb-6 border-gray-400 dark:border-gray-500" />
        </div>
    
        <!-- References -->
        <!-- Awards -->
        <h4 class="text-xl mt-12 mb-4">References</h4>
        <p class="mt-2 font-extralight"><NuxtLink to="https://scholar.google.co.jp/citations?view_op=list_works&hl=en&user=koZVTJ4AAAAJ" class="hover:text-nord-aurora-1 underline">
          Google Scholar
        </NuxtLink></p>
        <p class="mt-2 font-extralight"><NuxtLink to="https://smilab.org/publications/" class="hover:text-nord-aurora-1 underline">
          Paper list of Lab. (JP) (This page includes all the papers of the lab.)
        </NuxtLink></p>
        <p class="mt-2 font-extralight"><NuxtLink to="https://smilab.org/en/publications/" class="hover:text-nord-aurora-1 underline">
          Paper list of Lab. (EN) (This page includes all the papers of the lab. except for Domestic Conference papers.)
        </NuxtLink></p>
      </WriteField>

    </div>
  </FixedBackGroundSection>
</template>