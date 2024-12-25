<script>
export default {
  name: 'ThankYouPage',
  computed: {
    email() {
      return this.$route.query.email || 'the provided email'
    },
  },
}
</script>

<template>
  <div class="thank-you">
    <h1>Thank You!</h1>
    <p>Your message has been sent successfully.</p>
    <p>
      I will contact you at: <strong>{{ email }}</strong>
    </p>
  </div>
</template>

<style scoped>
.thank-you {
  text-align: center;
  margin-top: 2rem;
}
</style>
