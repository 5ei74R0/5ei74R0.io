<script setup>
import Footer from '~/components/Footer.vue';
import GreetingCard from '~/pages/contents/GreetingCard.vue';
import Projects from '~/pages/contents/Projects.vue';
import EmploymentHistory from '~/pages/contents/EmploymentHistory.vue';
import Publications from '~/pages/contents/Publications.vue';
import Misc from '~/pages/contents/Misc.vue';
import Logo from '~/components/Logo.vue';
import NavBar from '~/pages/contents/NavBar.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
import NavBarDummy from '~/components/dummy/NavBarDummy.vue';

</script>


<template>
  <Palette class="flex flex-col min-h-screen min-w-full scrollbar::-webkit-scrollbar-thumb">
    <NavBar />
    <NavBarDummy />

    <!-- Top -->
    <div class="flex flex-grow flex-col min-h-screen w-full max-w-screen-xl mx-auto self-center items-center">
      <SmartAnchor id="about" />
      <div class="min-h-screen w-2/3 flex items-center justify-center">
        <Logo color="text-nord-night-0" color-dark="text-nord-snow-2"
          additional-classes="text-opacity-90 dark:text-opacity-50 h-16" />
      </div>
      <GreetingCard />
    </div>

    <EmploymentHistory />

    <Publications />
    
    <Projects />

    <Misc />

    <div class="mx-auto self-center flex flex-grow flex-col w-full max-w-screen-xl">
      <Footer />
    </div>
  </Palette>
</template>
