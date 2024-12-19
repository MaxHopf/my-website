<template>
  <HeaderComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default {
  name: 'ContactPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style scoped></style>
