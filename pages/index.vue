<script setup>
import BlurField from '~/components/BlurField.vue';
import CardWithPhoto from '~/components/CardWithPhoto.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import Footer from '~/components/Footer.vue';
import GreetingCard from '~/components/GreetingCard.vue';
import Logo from '~/components/Logo.vue';
import NavBar from '~/components/NavBar.vue';
import SectionTitle2 from '~/components/SectionTitle2.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
import NavBarDummy from '~/components/dummy/NavBarDummy.vue';

</script>


<template>
  <div
    class="flex flex-grow flex-col min-h-screen min-w-full bg-fixed bg-cover bg-[url('/images/snowy-mountains2_x2.png')] bg-nord-snow-2 dark:bg-nord-night-2 bg-blend-multiply scrollbar::-webkit-scrollbar-thumb">
    <NavBar />
    <NavBarDummy />

    <div class="mx-auto self-center items-center flex flex-grow flex-col min-h-screen w-full max-w-screen-xl">
      <SmartAnchor id="about" />
      <div class="min-h-screen w-2/3 flex flex-row items-center">
        <Logo color="text-nord-snow-0" color-dark="text-nord-snow-0"
          additional-classes="text-opacity-90 dark:text-opacity-50" />
      </div>
      <GreetingCard />
    </div>

    <FixedBackGroundSection bg-image-string="bg-[url('/images/ruin-cities2.png')]">
      <div class="mx-auto self-center items-start flex flex-grow flex-col min-h-screen w-full max-w-screen-xl">
        <SmartAnchor id="projects" />
        <BlurField blur-level="xs" class="bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3">
          <SectionTitle2 title="Projects" link-to-itself="#projects"
            bg-image-string="bg-[url('/images/ruin-cities2.png')]" />
          <CardWithPhoto img-src="../5ei74R0.io/images/anonymask-demo3.png" title="Anonymask"
            description="Anonymask detects any logos and naturally inpaints them. It is a toy product built in a coursework and uses YOLOv5 as a logo detector, MAE as an inpainter, and SwinIR for super resolution. Banish any logo from your sight! 👀"
            link-address="https://github.com/5ei74R0/Anonymask/tree/main" class="mt-2 mb-4" />
          <CardWithPhoto img-src="../5ei74R0.io/images/server-room1.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
            description="I mean, you know, this card (and the entire page) is under construction." class="mt-2 mb-4" />
          <CardWithPhoto img-src="../5ei74R0.io/images/ruin-cities2.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
            description="I mean, you know, this card (and the entire page) is under construction." class="mt-2 mb-4" />
          <button
            class="block my-2 mx-auto w-3/4 p-2 rounded-md bg-opacity-40 dark:bg-opacity-20 bg-nord-snow-2 text-2xl text-center text-nord-night-3 dark:text-nord-snow-0 hover:bg-opacity-60 dark:hover:bg-opacity-60 hover:text-nord-night-0 dark:hover:text-nord-night-0">
            <NuxtLink to="https://github.com/5ei74R0?tab=repositories">See more projects at GitHub</NuxtLink>
          </button>
        </BlurField>
      </div>
    </FixedBackGroundSection>
    <div class="mx-auto self-center items-end flex flex-grow flex-col min-h-screen w-full max-w-screen-xl">
      <SmartAnchor id="blog-posts" />
      <BlurField blurLevel="xl" class="bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3">
        <SectionTitle2 title="Blog Posts" link-to-itself="#blog-posts"
          bg-image-string="bg-[url('/images/snowy-mountains2_x2.png')]" additional-classes=" text-right" />
        <div class="flex flex-col">
          <CardWithPhoto img-src="https://raw.githubusercontent.com/zellij-org/zellij/main/assets/demo.gif"
            title="Zellij: The Rust-Based Terminal Multiplexer Perfect for Beginners (JP)"
            description="I hope to make Zellij (I wonder if anyone can read ZELLIJ correctly on their first try) more widely known; how about you become a Zellij user too?"
            class="mt-2 mb-4" />
          <CardWithPhoto img-src="../5ei74R0.io/images/ruin-cities2.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
            description="I mean, you know, this card (and the entire page) is under construction."
            class="mt-2 mb-4 content-end" />
          <CardWithPhoto img-src="../5ei74R0.io/images/snowy-mountain_x2.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
            description="I mean, you know, this card (and the entire page) is under construction." class="mt-2 mb-4" />
          <button
            class="block my-2 mx-auto w-3/4 p-2 rounded-md bg-opacity-40 dark:bg-opacity-20 bg-nord-snow-2 text-2xl text-center text-nord-night-3 dark:text-nord-snow-0 hover:bg-opacity-60 dark:hover:bg-opacity-60 hover:text-nord-night-0 dark:hover:text-nord-night-0">
            <NuxtLink to="https://zenn.dev/5ei74r0">Read more posts at Zenn</NuxtLink>
          </button>
        </div>
      </BlurField>
    </div>
    <FixedBackGroundSection bg-image-string="bg-[url('/images/server-room1.png')]">
      <div class="mx-auto self-center items-start flex flex-grow flex-col min-h-screen w-full max-w-screen-xl">
        <SmartAnchor id="work-experience" />
        <BlurField blurLevel="xl" class="bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3">
          <SectionTitle2 title="Work Experience" link-to-itself="#work-experience"
            bg-image-string="bg-[url('/images/server-room1.png')]" />
          <CardWithPhoto img-src="../5ei74R0.io/images/ruin-cities2.png"
            title="SOFTWARE ENGINEERING INTERN | GHELIA INC. | AUGUST 2020 - JULY 2022"
            description="Worked with the algorithm development team to solve a complex scheduling problem, then thought out and implemented a new approach. / Used my knowledge of algorithm, data structure, and time complexity to propose and implement a suitable algorithm. / Surveyed recent research papers in the field of machine learning. / Thought out a new idea to combine the Parallel Distributed Genetic Algorithm and the idea of the Minimal Generation Gap, then implemented it to improve Genetic Algorithm to solve N-Queens Problem, in the educational period."
            link-address="https://ghelia.com/"
            class="mt-2 mb-4" />
          <CardWithPhoto img-src="../5ei74R0.io/images/server-room1.png"
            title="INTERNSHIP (AI/ML) | YOKOHAMA LAB., NISSAN MOTOR CO., LTD. | AUGUST 2021 - SEPTEMBER 2021"
            description="Tackled the task related to video object detection; built a much more efficient model than the baseline approach: Achieved four or more times fewer parameters and competitive or higher accuracy."
            link-address="https://www.nissan-global.com/JP/INNOVATION/TECHNOLOGY/NRC/RESEARCH/HAMALAB/"
            class="mt-2 mb-4" />
          <CardWithPhoto img-src="../5ei74R0.io/images/ruin-cities2.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
            description="I mean, you know, this card (and the entire page) is under construction." class="mt-2 mb-4" />
        </BlurField>
      </div>
    </FixedBackGroundSection>
    <FixedBackGroundSection bg-image-string="bg-[url('/images/snowy-mountain_x2.png')]">
      <div class="mx-auto self-center items-end flex flex-grow flex-col min-h-screen w-full max-w-screen-xl">
        <SmartAnchor id="publications-awards" />
        <BlurField blurLevel="xl" class="bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3">
          <SectionTitle2 title="Publications / Awards" link-to-itself="#publications-awards"
            bg-image-string="bg-[url('/images/snowy-mountains2_x2.png')]" additional-classes=" text-right" />

          <h4 class="text-2xl text-nord-snow-2 dark:text-nord-snow-0 text-right">International Conferences</h4>
          <CardWithPhoto img-src="../5ei74R0.io/images/ruin-cities2.png"
            title="Shared Transformer Encoder with Mask-based 3D Model Estimation for Container Mass Estimation"
            description="T. Matsubara, S.Otsuki, Y. Wada, H. Matsuo, T. Komatsu, Y. Iioka, K. Sugiura, H. Saito, “Shared Transformer Encoder with Mask-based 3D Model Estimation for Container Mass Estimation,” in IEEE ICASSP, pp.9142-9146, 2022. (first three authors: equal contribution)"
            link-address="https://ieeexplore.ieee.org/document/9747110" class="mt-2 mb-4" />

          <h4 class="text-2xl text-nord-snow-2 dark:text-nord-snow-0 text-right">Awards</h4>
          <CardWithPhoto img-src="../5ei74R0.io/images/ruin-cities1.png"
            title="Best performing solution for container capacity estimation and capacity and dimensions estimation and filling mass, The CORSMAL challenge 2022"
            description="T. Matsubara, S.Otsuki, Y. Wada, H. Matsuo, T. Komatsu, Y. Iioka, K. Sugiura, H. Saito, Best performing solution for container capacity estimation and capacity and dimensions estimation and filling mass estimation, The CORSMAL challenge 2022, 23 June 2022."
            class="mt-2 mb-4" />
          <CardWithPhoto img-src="../5ei74R0.io/images/snowy-rocky.png" title="Honorable Mention Award, REVERIE Challenge @ CSIG 2022"
            description="M. Kambara, Y. Yoshida, K. Kaneda, S. Otsuki, R. Korekata, H. Matsuo, Y. Wada, W. Yang, K. Sugiura, Honorable Mention Award, REVERIE Challenge @ CSIG 2022, 19 August 2022."
            class="mt-2 mb-4 content-end" />

          <h4 class="text-2xl text-nord-snow-2 dark:text-nord-snow-0 text-right">Domestic Conferences</h4>
          <CardWithPhoto img-src="../5ei74R0.io/images/ruin-cities2.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
            description="I mean, you know, this card (and the entire page) is under construction." class="mt-2 mb-4" />
          <button
            class="block my-2 mx-auto w-3/4 p-2 rounded-md bg-opacity-40 dark:bg-opacity-20 bg-nord-snow-2 text-2xl text-center text-nord-night-3 dark:text-nord-snow-0 hover:bg-opacity-60 dark:hover:bg-opacity-60 hover:text-nord-night-0 dark:hover:text-nord-night-0">
            <NuxtLink to="https://smilab.org/en/publications/">
              Previous and/or upcoming publications are listed here
            </NuxtLink>
          </button>
        </BlurField>
      </div>
    </FixedBackGroundSection>
    <div class="mx-auto self-center flex flex-grow flex-col w-full max-w-screen-xl">
      <SmartAnchor id="miscellaneous" />
      <BlurField blurLevel="xl"
        class="m-4 self-center rounded-lg bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3">
        <SectionTitle2 title="Misc." link-to-itself="#miscellaneous"
          bg-image-string="bg-[url('/images/snowy-mountains2_x2.png')]" />
        <h4 class="text-2xl text-nord-snow-2 dark:text-nord-snow-0">Also, Check followings👇</h4>
        <CardWithPhoto img-src="../5ei74R0.io/images/snowy-rocky2.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
          description="I mean, you know, this card (and the entire page) is under construction." class="mt-2 mb-4" />
        <CardWithPhoto img-src="../5ei74R0.io/images/ruin-cities2.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
          description="I mean, you know, this card (and the entire page) is under construction."
          class="mt-2 mb-4 content-end" />
        <CardWithPhoto img-src="../5ei74R0.io/images/server-room1.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
          description="I mean, you know, this card (and the entire page) is under construction." class="mt-2 mb-4" />
        <CardWithPhoto img-src="../5ei74R0.io/images/ruin-cities1.png" title="THIS CARD IS A DUMMY! (NO LINK EXISTS)"
          description="I mean, you know, this card (and the entire page) is under construction."
          class="mt-2 mb-4 content-end" />
      </BlurField>
      <Footer />
    </div>
  </div>
</template>

