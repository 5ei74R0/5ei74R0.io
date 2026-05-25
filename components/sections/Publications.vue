<script setup>
import WriteField from '~/components/WriteField.vue';
import FixedBackGroundSection from '~/components/FixedBackGroundSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import SmartAnchor from '~/components/SmartAnchor.vue';

const peerReviewedPublications = [
  {
    year: '2026',
    venue: 'AAAI 2026',
    title: 'LLM-Free Image Captioning Evaluation in Reference-Flexible Settings',
    authors: [
      { name: 'S. Hirano' },
      { name: 'Y. Wada' },
      { name: 'K. Matsuda' },
      { name: 'S. Otsuki', self: true },
      { name: 'K. Sugiura' },
    ],
    detail: 'Proceedings of the AAAI Conference on Artificial Intelligence 40(6), 4708-4716',
    link: 'https://scholar.google.co.jp/citations?view_op=view_citation&hl=en&user=koZVTJ4AAAAJ&citation_for_view=koZVTJ4AAAAJ:zYLM7Y9cAGgC',
  },
  {
    year: '2025',
    venue: 'EMNLP 2025',
    title: 'VELA: An LLM-Hybrid-as-a-Judge Approach for Evaluating Long Image Captions',
    authors: [
      { name: 'K. Matsuda' },
      { name: 'Y. Wada' },
      { name: 'S. Hirano' },
      { name: 'S. Otsuki', self: true },
      { name: 'K. Sugiura' },
    ],
    detail: 'Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing',
    link: 'https://scholar.google.co.jp/citations?view_op=view_citation&hl=en&user=koZVTJ4AAAAJ&citation_for_view=koZVTJ4AAAAJ:UeHWp8X0CEIC',
  },
  {
    year: '2024',
    venue: 'ECCV 2024',
    title: 'Layer-wise Relevance Propagation with Conservation Property for ResNet',
    authors: [
      { name: 'S. Otsuki', self: true },
      { name: 'T. Iida' },
      { name: 'F. Doublet' },
      { name: 'T. Hirakawa' },
      { name: 'T. Yamashita' },
      { name: 'H. Fujiyoshi' },
      { name: 'H. Kataoka' },
    ],
    detail: 'European Conference on Computer Vision, 349-364',
    link: 'https://scholar.google.co.jp/citations?view_op=view_citation&hl=en&user=koZVTJ4AAAAJ&citation_for_view=koZVTJ4AAAAJ:2osOgNQ5qMEC',
  },
  {
    year: '2024',
    venue: 'CoRL 2024',
    title: 'Task Success Prediction for Open-Vocabulary Manipulation Based on Multi-Level Aligned Representations',
    authors: [
      { name: 'M. Goko' },
      { name: 'M. Kambara' },
      { name: 'D. Saito' },
      { name: 'S. Otsuki', self: true },
      { name: 'K. Sugiura' },
    ],
    detail: '8th Annual Conference on Robot Learning',
    link: 'https://scholar.google.co.jp/citations?view_op=view_citation&hl=en&user=koZVTJ4AAAAJ&citation_for_view=koZVTJ4AAAAJ:9yKSN-GCB0IC',
  },
  {
    year: '2023',
    venue: 'IROS 2023',
    title: 'Prototypical Contrastive Transfer Learning for Multimodal Language Understanding',
    authors: [
      { name: 'S. Otsuki', self: true },
      { name: 'S. Ishikawa' },
      { name: 'K. Sugiura' },
    ],
    detail: 'IEEE/RSJ International Conference on Intelligent Robots and Systems',
    link: 'https://scholar.google.co.jp/citations?view_op=view_citation&hl=en&user=koZVTJ4AAAAJ&citation_for_view=koZVTJ4AAAAJ:u-x6o8ySG0sC',
  },
  {
    year: '2022',
    venue: 'ICASSP 2022',
    title: 'Shared Transformer Encoder with Mask-Based 3D Model Estimation for Container Mass Estimation',
    authors: [
      { name: 'T. Matsubara' },
      { name: 'S. Otsuki', self: true },
      { name: 'Y. Wada' },
      { name: 'H. Matsuo' },
      { name: 'T. Komatsu' },
      { name: 'Y. Iioka' },
      { name: 'K. Sugiura' },
      { name: 'H. Saito' },
    ],
    detail: 'IEEE International Conference on Acoustics, Speech and Signal Processing Workshops',
    link: 'https://scholar.google.co.jp/citations?view_op=view_citation&hl=en&user=koZVTJ4AAAAJ&citation_for_view=koZVTJ4AAAAJ:u5HHmVD_uO8C',
  },
];

const preprints = [
  {
    year: '2026',
    venue: 'arXiv',
    title: 'ABMAMBA: Multimodal Large Language Model with Aligned Hierarchical Bidirectional Scan for Efficient Video Captioning',
    authors: [
      { name: 'D. Yashima' },
      { name: 'S. Kurita' },
      { name: 'Y. Oda' },
      { name: 'S. Suzuki' },
      { name: 'S. Otsuki', self: true },
      { name: 'K. Sugiura' },
    ],
    link: 'https://scholar.google.co.jp/citations?view_op=view_citation&hl=en&user=koZVTJ4AAAAJ&citation_for_view=koZVTJ4AAAAJ:Y0pCki6q_DkC',
  },
  {
    year: '2026',
    venue: 'arXiv',
    title: 'NaiLIA: Multimodal Nail Design Retrieval Based on Dense Intent Descriptions and Palette Queries',
    authors: [
      { name: 'K. Amemiya' },
      { name: 'D. Yashima' },
      { name: 'K. Katsumata' },
      { name: 'T. Komatsu' },
      { name: 'R. Korekata' },
      { name: 'S. Otsuki', self: true },
      { name: 'others' },
    ],
    link: 'https://scholar.google.co.jp/citations?view_op=view_citation&hl=en&user=koZVTJ4AAAAJ&citation_for_view=koZVTJ4AAAAJ:Tyk-4Ss8FVUC',
  },
];
</script>

<template>
  <FixedBackGroundSection
    bg-image-string="bg-[url('/5ei74R0.io/images/bg-sketch3.png')]"
    overlay-class="bg-nord-snow-1/90 dark:bg-nord-night-1/90">
    <div
      class="mx-auto flex w-full max-w-screen-xl flex-grow flex-col items-center self-center text-nord-night-1 dark:text-nord-snow-1">
      <SmartAnchor id="publications-awards" />
      <WriteField additional-classes="mx-auto">
        <SectionTitle title="Publications" link-to-itself="#publications-awards" />
        <p class="mb-8 max-w-2xl leading-8 text-nord-night-2 dark:text-nord-snow-0">
          Selected peer-reviewed publications and recent preprints in multimodal learning,
          caption evaluation, robotics, and model interpretation.
        </p>

        <dl class="mb-12 grid gap-3 text-sm sm:grid-cols-3">
          <div class="border-t border-nord-night-0/20 pt-3 dark:border-nord-snow-2/20">
            <dt class="text-nord-night-2 dark:text-nord-snow-0">Google Scholar</dt>
            <dd class="mt-1 font-semibold text-nord-night-0 dark:text-nord-snow-2">40 citations</dd>
          </div>
          <div class="border-t border-nord-night-0/20 pt-3 dark:border-nord-snow-2/20">
            <dt class="text-nord-night-2 dark:text-nord-snow-0">Indexed Works</dt>
            <dd class="mt-1 font-semibold text-nord-night-0 dark:text-nord-snow-2">8 articles</dd>
          </div>
          <div class="border-t border-nord-night-0/20 pt-3 dark:border-nord-snow-2/20">
            <dt class="text-nord-night-2 dark:text-nord-snow-0">Fields</dt>
            <dd class="mt-1 font-semibold text-nord-night-0 dark:text-nord-snow-2">AI / ML / Robotics</dd>
          </div>
        </dl>

        <h3 class="mb-4 text-xl font-semibold text-nord-night-0 dark:text-nord-snow-2">Peer-Reviewed Work</h3>

        <div class="space-y-5">
          <article
            v-for="publication in peerReviewedPublications"
            :key="publication.title"
            class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[4.5rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <div>
              <p class="font-semibold text-nord-aurora-0 dark:text-nord-aurora-3">{{ publication.year }}</p>
              <p class="mt-1 text-xs text-nord-night-2 dark:text-nord-snow-0">{{ publication.venue }}</p>
            </div>
            <div>
              <NuxtLink
                class="text-lg font-semibold text-nord-night-0 underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:text-nord-snow-2 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3"
                :to="publication.link">
                {{ publication.title }}
              </NuxtLink>
              <p class="mt-3 text-sm leading-6 text-nord-night-2 dark:text-nord-snow-0">
                <template v-for="(author, index) in publication.authors" :key="author.name">
                  <span v-if="index > 0">{{ index === publication.authors.length - 1 ? ', and ' : ', ' }}</span>
                  <span :class="author.self ? 'font-semibold underline decoration-nord-night-2/50 underline-offset-2 dark:decoration-nord-snow-0/60' : ''">{{ author.name }}</span>
                </template>
              </p>
              <p class="mt-1 text-sm leading-6 text-nord-night-2 dark:text-nord-snow-0">
                {{ publication.detail }}
              </p>
            </div>
          </article>
        </div>

        <h3 class="mb-4 mt-12 text-xl font-semibold text-nord-night-0 dark:text-nord-snow-2">Recent Preprints</h3>

        <div class="space-y-5">
          <article
            v-for="publication in preprints"
            :key="publication.title"
            class="grid gap-3 border-t border-nord-night-0/20 pt-5 md:grid-cols-[4.5rem_minmax(0,1fr)] dark:border-nord-snow-2/20">
            <div>
              <p class="font-semibold text-nord-aurora-0 dark:text-nord-aurora-3">{{ publication.year }}</p>
              <p class="mt-1 text-xs text-nord-night-2 dark:text-nord-snow-0">{{ publication.venue }}</p>
            </div>
            <div>
              <NuxtLink
                class="text-lg font-semibold text-nord-night-0 underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:text-nord-snow-2 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3"
                :to="publication.link">
                {{ publication.title }}
              </NuxtLink>
              <p class="mt-3 text-sm leading-6 text-nord-night-2 dark:text-nord-snow-0">
                <template v-for="(author, index) in publication.authors" :key="author.name">
                  <span v-if="index > 0">{{ index === publication.authors.length - 1 ? ', and ' : ', ' }}</span>
                  <span :class="author.self ? 'font-semibold underline decoration-nord-night-2/50 underline-offset-2 dark:decoration-nord-snow-0/60' : ''">{{ author.name }}</span>
                </template>
              </p>
            </div>
          </article>
        </div>

        <h3 class="mb-4 mt-12 text-xl font-semibold text-nord-night-0 dark:text-nord-snow-2">Profiles</h3>
        <div class="flex flex-col gap-2 text-sm">
          <NuxtLink to="https://scholar.google.co.jp/citations?user=koZVTJ4AAAAJ&hl=en" class="inline-flex w-fit items-center gap-2 underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3">
            <ServiceIcon name="scholar" />
            Google Scholar
          </NuxtLink>
          <NuxtLink to="https://openreview.net/profile?id=~Seitaro_Otsuki1" class="inline-flex w-fit items-center gap-2 underline decoration-nord-aurora-0 underline-offset-4 transition-colors hover:text-nord-aurora-0 dark:decoration-nord-aurora-3 dark:hover:text-nord-aurora-3">
            <ServiceIcon name="openreview" />
            OpenReview
          </NuxtLink>
        </div>
      </WriteField>
    </div>
  </FixedBackGroundSection>
</template>
