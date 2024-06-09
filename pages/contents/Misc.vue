<script setup>
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
</script>

<template>
  <div class="mx-auto self-center items-center flex flex-grow flex-col min-h-screen w-full max-w-screen-xl text-nord-night-1 dark:text-nord-snow-1">
    <SmartAnchor id="miscellaneous" />
    <WriteField>
      <SectionTitle title="Misc." link-to-itself="#miscellaneous" />
      <h4 class="text-xl mt-4 mb-6">Outer Links</h4>
      <svg class="h-5 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
        <title>Zenn</title><path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z"/>
      </svg>
      <h4 class="text-xl mt-4 mb-6">Journal Club</h4>
      <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/add5548186ba4ad0bc13645b1ff040db" title="[Journal club] Sigmoid Loss for Language Image Pre-Training" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>

      <p class="mt-2"><NuxtLink to="https://smilab.org/publications/" class="hover:text-nord-aurora-1 underline">
        See other slides in Speaker Deck
        </NuxtLink></p>
    </WriteField>
  </div>
</template>
