<script setup>
import Footer from '~/components/Footer.vue';
import Projects from '~/components/sections/Projects.vue';
import EmploymentHistory from '~/components/sections/EmploymentHistory.vue';
import Publications from '~/components/sections/Publications.vue';
import Misc from '~/components/sections/Misc.vue';
import NavBar from '~/components/sections/NavBar.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';
import NavBarDummy from '~/components/dummy/NavBarDummy.vue';

</script>


<template>
  <Palette class="flex flex-col min-h-screen min-w-full scrollbar::-webkit-scrollbar-thumb">
    <NavBar />
    <NavBarDummy />

    <section class="relative isolate overflow-hidden">
      <SmartAnchor id="about" />
      <div
        class="absolute inset-0 bg-[url('/5ei74R0.io/images/bg-waterfall4.png')] bg-cover bg-center opacity-20 min-[520px]:bg-fixed dark:bg-[url('/5ei74R0.io/images/bg-waterfall4-dark.png')] dark:opacity-10"
        aria-hidden="true"></div>
      <div class="hero-background-membrane pointer-events-none absolute inset-0" aria-hidden="true"></div>

      <div class="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-screen-xl items-center px-5 py-14 sm:px-8 md:py-20">
        <div class="max-w-5xl">
          <div class="flex flex-col gap-8 md:flex-row md:items-start">
            <img
              class="h-28 w-28 rounded-lg object-cover shadow-md ring-1 ring-nord-snow-0 dark:ring-nord-night-2"
              src="https://avatars.githubusercontent.com/u/56509932?v=4"
              alt="Seitaro OTSUKI portrait"
            />

            <div class="min-w-0">
              <p class="text-sm font-semibold text-nord-aurora-0 dark:text-nord-aurora-3">
                Research Engineer, Preferred Networks
              </p>
              <h1 class="mt-4 text-4xl font-semibold leading-tight text-nord-night-0 dark:text-nord-snow-2 sm:text-5xl md:text-6xl">
                Seitaro OTSUKI
              </h1>
              <p class="mt-6 max-w-3xl text-lg leading-8 text-nord-night-2 dark:text-nord-snow-0">
                Research engineer working at the intersection of AI, machine learning,
                vision-and-language, and robotics. This portfolio summarizes selected
                publications, professional experience, implementation projects, and technical writing.
              </p>

              <div class="mt-8 flex flex-wrap gap-2 text-sm text-nord-night-1 dark:text-nord-snow-1">
                <span class="rounded-md border border-nord-snow-0 bg-nord-snow-2/80 px-3 py-2 dark:border-nord-night-2 dark:bg-nord-night-0/70">AI / Machine Learning</span>
                <span class="rounded-md border border-nord-snow-0 bg-nord-snow-2/80 px-3 py-2 dark:border-nord-night-2 dark:bg-nord-night-0/70">Vision and Language</span>
                <span class="rounded-md border border-nord-snow-0 bg-nord-snow-2/80 px-3 py-2 dark:border-nord-night-2 dark:bg-nord-night-0/70">Robotics</span>
                <span class="rounded-md border border-nord-snow-0 bg-nord-snow-2/80 px-3 py-2 dark:border-nord-night-2 dark:bg-nord-night-0/70">LLM Evaluation</span>
              </div>

              <dl class="mt-8 grid max-w-3xl gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div class="border-t border-nord-night-0/20 pt-3 dark:border-nord-snow-2/20">
                  <dt class="text-nord-night-2 dark:text-nord-snow-0">Current Role</dt>
                  <dd class="mt-1 font-semibold text-nord-night-0 dark:text-nord-snow-2">Research Engineer</dd>
                </div>
                <div class="border-t border-nord-night-0/20 pt-3 dark:border-nord-snow-2/20">
                  <dt class="text-nord-night-2 dark:text-nord-snow-0">Affiliation</dt>
                  <dd class="mt-1 font-semibold text-nord-night-0 dark:text-nord-snow-2">Preferred Networks</dd>
                </div>
                <div class="border-t border-nord-night-0/20 pt-3 dark:border-nord-snow-2/20">
                  <dt class="text-nord-night-2 dark:text-nord-snow-0">Education</dt>
                  <dd class="mt-1 font-semibold text-nord-night-0 dark:text-nord-snow-2">M.S., Keio University</dd>
                </div>
                <div class="border-t border-nord-night-0/20 pt-3 dark:border-nord-snow-2/20">
                  <dt class="text-nord-night-2 dark:text-nord-snow-0">Google Scholar</dt>
                  <dd class="mt-1 font-semibold text-nord-night-0 dark:text-nord-snow-2">50 citations</dd>
                </div>
              </dl>

              <div class="mt-10 flex flex-wrap gap-3">
                <NuxtLink to="#publications-awards"
                  class="inline-flex items-center rounded-md bg-nord-night-0 px-4 py-3 text-sm font-medium text-nord-snow-2 transition hover:bg-nord-aurora-0 dark:bg-nord-snow-2 dark:text-nord-night-0 dark:hover:bg-nord-aurora-3">
                  Publications
                </NuxtLink>
                <NuxtLink to="https://scholar.google.co.jp/citations?user=koZVTJ4AAAAJ&hl=en"
                  class="inline-flex items-center gap-2 rounded-md border border-nord-night-0/20 bg-nord-snow-2/70 px-4 py-3 text-sm font-medium text-nord-night-0 transition hover:border-nord-aurora-0 hover:text-nord-aurora-0 dark:border-nord-snow-2/20 dark:bg-nord-night-0/70 dark:text-nord-snow-2 dark:hover:border-nord-aurora-3 dark:hover:text-nord-aurora-3">
                  <ServiceIcon name="scholar" />
                  Google Scholar
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/seitaro-otsuki-156723310/"
                  class="inline-flex items-center gap-2 rounded-md border border-transparent px-4 py-3 text-sm font-medium text-nord-night-1 transition hover:text-nord-aurora-0 dark:text-nord-snow-1 dark:hover:text-nord-aurora-3">
                  <ServiceIcon name="linkedin" />
                  LinkedIn
                </NuxtLink>
                <NuxtLink to="https://github.com/5ei74R0"
                  class="inline-flex items-center gap-2 rounded-md border border-transparent px-4 py-3 text-sm font-medium text-nord-night-1 transition hover:text-nord-aurora-0 dark:text-nord-snow-1 dark:hover:text-nord-aurora-3">
                  <ServiceIcon name="github" />
                  GitHub
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <EmploymentHistory />

    <Publications />
    
    <Projects />

    <Misc />

    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-nord-snow-1/95 dark:bg-nord-night-1/95" aria-hidden="true"></div>
      <div class="relative mx-auto self-center flex flex-grow flex-col w-full max-w-screen-xl">
        <Footer />
      </div>
    </section>
  </Palette>
</template>

<style>
.hero-background-membrane {
  --hero-membrane-stop: clamp(4rem, 30vh, 18rem);
  background: linear-gradient(
    to bottom,
    rgba(229, 233, 240, 0) 0,
    rgba(229, 233, 240, 0.7) var(--hero-membrane-stop),
    rgba(229, 233, 240, 0.7) 100%
  );
}

.dark .hero-background-membrane {
  background: linear-gradient(
    to bottom,
    rgba(59, 66, 82, 0) 0,
    rgba(59, 66, 82, 0.75) var(--hero-membrane-stop),
    rgba(59, 66, 82, 0.75) 100%
  );
}
</style>
