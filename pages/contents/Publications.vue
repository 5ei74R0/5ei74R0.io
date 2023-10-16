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
    <div
      class="mx-auto self-center items-center flex flex-grow flex-col min-h-screen w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1">
      <SmartAnchor id="publications-awards" />
      <WriteField>
        <SectionTitle title="Selected Publications / Awards" link-to-itself="#publications-awards"
          bg-image-string="bg-[url('/images/snowy-mountains2_x2.png')]" additional-classes=" text-right" />
  
  
        <!-- International Conferences -->
        <h4 class="text-2xl text-right mt-12">International Conferences</h4>
  
        <!-- B4, IROS2023 -->
        <InteractiveCard link-address="https://arxiv.org/abs/2307.05942"
          class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Prototypical Contrastive Transfer Learning for Multimodal Language Understanding
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              S. Otsuki, S. Ishikawa, and K. Sugiura<br /><br />
              IROS2023
            </p>
          </div>
        </InteractiveCard>
  
        <!-- B3, The CORSMAL challenge 2022 -->
        <InteractiveCard link-address="https://ieeexplore.ieee.org/document/9747110"
          class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Shared Transformer Encoder with Mask-based 3D Model Estimation for Container Mass Estimation
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              T. Matsubara*, S.Otsuki*, Y. Wada*, H. Matsuo, T. Komatsu, Y. Iioka, K. Sugiura, H. Saito<br /><br />
              Workshop @ICASSP2022
            </p>
          </div>
        </InteractiveCard>
  
  
        <!-- Awards -->
        <h4 class="text-2xl text-right mt-12">Awards</h4>
  
        <!-- B3, The CORSMAL challenge 2022 -->
        <InteractiveCard link-address="" class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Best performing solution for container capacity estimation and capacity and dimensions estimation and filling
              mass, The CORSMAL challenge 2022
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              T. Matsubara*, S.Otsuki*, Y. Wada*, H. Matsuo, T. Komatsu, Y. Iioka, K. Sugiura, H. Saito<br /><br />
              The CORSMAL challenge 2022, 23 June 2022
            </p>
          </div>
        </InteractiveCard>
  
        <!-- B4, The REVERIE challenge 2022 -->
        <InteractiveCard link-address="" class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Honorable Mention Award, REVERIE Challenge @ CSIG 2022
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              M. Kambara, Y. Yoshida, K. Kaneda, S. Otsuki, R. Korekata, H. Matsuo, Y. Wada, W. Yang, K. Sugiura<br /><br />
              REVERIE Challenge @ CSIG 2022, 19 August 2022
            </p>
          </div>
        </InteractiveCard>
  
  
        <!-- References -->
        <Card link-address="" class="mt-24 mb-24">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight">
              References:
            </h5>
            <NuxtLink to="https://scholar.google.co.jp/citations?view_op=list_works&hl=en&user=koZVTJ4AAAAJ" class="mt-2 mb-4 hover:text-nord-aurora-1 underline">
              Google Scholar
            </NuxtLink>
            <NuxtLink to="https://smilab.org/publications/" class="mt-2 mb-4 hover:text-nord-aurora-1 underline">
              Paper list of Lab. (JP) (This page includes all the papers of the lab.)
            </NuxtLink>
            <NuxtLink to="https://smilab.org/en/publications/" class="mt-2 mb-4 hover:text-nord-aurora-1 underline">
              Paper list of Lab. (EN) (This page includes all the papers of the lab. except for Domestic Conference papers.)
            </NuxtLink>
          </div>
        </Card>
      </WriteField>
  
      <!-- <BlurField class="bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3"> -->
  
        <!-- <h4 class="text-2xl text-right">Awards</h4> -->
        <!-- <CardWithPhoto img-src="/5ei74R0.io/images/ruin-cities1.png"
          title="Best performing solution for container capacity estimation and capacity and dimensions estimation and filling mass, The CORSMAL challenge 2022"
          description="T. Matsubara, S.Otsuki, Y. Wada, H. Matsuo, T. Komatsu, Y. Iioka, K. Sugiura, H. Saito, Best performing solution for container capacity estimation and capacity and dimensions estimation and filling mass estimation, The CORSMAL challenge 2022, 23 June 2022."
          class="mt-4 mb-8" /> -->
        <!-- <CardWithPhoto img-src="/5ei74R0.io/images/snowy-rocky.png"
          title="Honorable Mention Award, REVERIE Challenge @ CSIG 2022"
          description="M. Kambara, Y. Yoshida, K. Kaneda, S. Otsuki, R. Korekata, H. Matsuo, Y. Wada, W. Yang, K. Sugiura, Honorable Mention Award, REVERIE Challenge @ CSIG 2022, 19 August 2022."
          class="mt-4 mb-8 content-end" /> -->
  <!-- 
        <h4 class="text-2xl text-right">Domestic Conferences</h4>
        <CardWithPhoto title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
          description="I mean, you know, this card (and the entire page) is under construction." class="mt-4 mb-8" />
        <button
          class="block my-2 mx-auto w-3/4 p-2 rounded-md bg-opacity-40 dark:bg-opacity-20 bg-nord-snow-2 text-2xl text-center text-nord-night-3 dark:text-nord-snow-0 hover:bg-opacity-60 dark:hover:bg-opacity-60 hover:text-nord-night-0 dark:hover:text-nord-night-0">
          <NuxtLink to="https://smilab.org/en/publications/">
            Previous and/or upcoming publications are listed here
          </NuxtLink>
        </button> -->
      <!-- </BlurField> -->
    </div>
  </FixedBackGroundSection>
</template>