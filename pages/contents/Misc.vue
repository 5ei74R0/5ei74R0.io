<script setup>
import BlurField from '~/components/BlurField.vue';
import InteractiveCard from '~/components/InteractiveCard.vue';
import Card from '~/components/Card.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
</script>

<template>
  <!-- <div class="mx-auto self-center items-end flex flex-grow flex-col min-h-screen w-full max-w-screen-xl">
    <SmartAnchor id="blog-posts" />
    <BlurField class="bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3">
      <SectionTitle title="Blog Posts" link-to-itself="#blog-posts"
        bg-image-string="bg-[url('/images/snowy-mountains2_x2.png')]" additional-classes=" text-right" />
      <div class="flex flex-col">
        <CardWithPhoto img-src="https://raw.githubusercontent.com/zellij-org/zellij/main/assets/demo.gif"
          title="Zellij: The Rust-Based Terminal Multiplexer Perfect for Beginners (JP)"
          description="I hope to make Zellij (I wonder if anyone can read ZELLIJ correctly on their first try) more widely known; how about you become a Zellij user too?"
          link-address="https://zenn.dev/5ei74r0/articles/zellij-for-beginners" class="mt-2 mb-4" />
        <CardWithPhoto title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
          description="I mean, you know, this card (and the entire page) is under construction."
          class="mt-2 mb-4 content-end" />
        <CardWithPhoto title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
          description="I mean, you know, this card (and the entire page) is under construction." class="mt-2 mb-4" />
        <button
          class="block my-2 mx-auto w-3/4 p-2 rounded-md bg-opacity-40 dark:bg-opacity-20 bg-nord-snow-2 text-2xl text-center text-nord-night-3 dark:text-nord-snow-0 hover:bg-opacity-60 dark:hover:bg-opacity-60 hover:text-nord-night-0 dark:hover:text-nord-night-0">
          <NuxtLink to="https://zenn.dev/5ei74r0">Read more posts at Zenn</NuxtLink>
        </button>
      </div>
    </BlurField>
  </div> -->

  <div class="mx-auto self-center flex flex-grow flex-col w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1">
    <SmartAnchor id="miscellaneous" />
    <BlurField class="mt-12 self-center rounded-lg bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3">
      <SectionTitle title="Misc." link-to-itself="#miscellaneous"
        bg-image-string="bg-[url('/images/snowy-mountains2_x2.png')]" />
      <h4 class="text-xl">Also, Check followings👇</h4>
      <InteractiveCard link-address="https://zenn.dev/5ei74r0"
          class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Blog Posts @ Zenn
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              Write about tools, papers, etc.<br />
              154 Likes, 2 Followers (as of 2023/10/17)
            </p>
          </div>
      </InteractiveCard>
      <InteractiveCard link-address="https://speakerdeck.com/keio_smilab"
          class="mt-4 mb-8 bg-[url('/images/bg-sketch1.png')] bg-blend-overlay">
          <div class="flex flex-col justify-start p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
              Slides @ Speaker Deck (lab. account)
            </h5>
            <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
              Journal Club, etc.<br />
            </p>
          </div>
      </InteractiveCard>
    </BlurField>
  </div>
</template>