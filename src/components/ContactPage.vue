<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'ContactPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<template>
  <div class="layout">
    <HeaderComponent />
    <main class="contact">
      <h1>Contact me</h1>
      <form class="form">
        <p class="letter-opening">Dear Max,</p>
        <div class="input">
          <textarea
            textarea=""
            placeholder="Write me a message"
            id="message"
            name="message"
            cols="45"
            rows="8"
            maxlength="65525"
            required
          ></textarea>
          <label class="small-text" for="message">Your Message</label>
        </div>
        <p class="letter-closing">With kind Regards,</p>
        <div class="input">
          <input
            id="name"
            placeholder="Your Name"
            name="name"
            type="text"
            value=""
            size="30"
            maxlength="245"
            required
          />
          <label class="small-text" for="name">Your Name</label>
        </div>

        <div class="input">
          <input
            id="email"
            placeholder="Your Email Address"
            name="email"
            type="email"
            value=""
            size="30"
            maxlength="100"
            aria-describedby="email-notes"
            required
          />
          <label class="small-text" for="email">Your Email</label>
        </div>
        <button class="submit-btn" type="submit">Send Message</button>
      </form>
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped>
form {
  width: 100%;
  button {
    width: 100%;
  }
}

.letter-opening {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
}

.letter-closing {
  margin-bottom: 0.5rem;
}

.submit-btn {
  margin-top: 1rem;
}
</style>
