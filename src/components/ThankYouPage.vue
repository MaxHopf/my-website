<script>
export default {
  name: 'ThankYouPage',
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' })
    },
  },
  computed: {
    email() {
      return this.$route.query.email || 'the provided email'
    },
    userName() {
      return this.$route.query.name || 'Mr. Smith'
    },
  },
}
</script>

<template>
  <div class="layout">
    <main>
      <h1>Thank You, {{ userName }}!</h1>
      <p>Your message has been sent successfully.</p>
      <p>
        I will contact you at: <strong>{{ email }}</strong>
      </p>
      <button class="home-button" @click="goToHome">Go Back to Home</button>
    </main>
  </div>
</template>

<style scoped>
main {
  padding: 2rem 1rem;
  margin: auto;
  text-align: center;
  align-items: center;
  gap: 0.5rem;
  h1 {
    margin: 0;
    margin-bottom: 1rem;
  }
  button {
    margin-top: 1rem;
  }
}
</style>
