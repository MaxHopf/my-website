<template>
  <HeaderComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default {
  name: 'AboutPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style scoped></style>
