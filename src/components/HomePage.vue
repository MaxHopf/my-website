<template>
  <div class="layout">
    <HeaderComponent />
    <main>
      <h1>{{ heroHeadline }}</h1>
      <p>{{ heroDescription }}</p>
      <button @click="handleButtonClick">{{ heroButtonText }}</button>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import router from '../router.js'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      heroHeadline: "Hi, I'm Max.",
      heroDescription:
        "As an aspiring DevOps Engineer I'm excited about streamlining technology value flows.",
      heroButtonText: 'Let it Flow',
      clickCount: 0,
    }
  },
  methods: {
    handleButtonClick() {
      this.clickCount++

      if (this.clickCount === 1) {
        this.heroHeadline = 'Designed DevOps Solutions.'
        this.heroDescription =
          'Beyond DevOps, I integrate a human-centered design approach to enhance team workflows and elevate developer experiences.'
        this.heroButtonText = 'Explore More'
      } else if (this.clickCount === 2) {
        this.heroHeadline = 'Driven by Compassion.'
        this.heroDescription =
          'When creativity meets empathy to create compassion, challenges become opportunities, and solutions become invaluable.'
        this.heroButtonText = 'Get to Know Me'
      } else if (this.clickCount === 3) {
        router.push({ name: 'About' })
      }
    },
  },
}
</script>

<style scoped>
main {
  padding: 2rem 1rem;
  margin: auto;
  h1 {
    margin: 0;
  }
}
</style>
