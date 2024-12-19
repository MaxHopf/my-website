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
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  align-self: center;
  gap: 1.5rem;
  margin: 3rem 0;
  padding: 0 1rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  /* p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
  } */
  button {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: lightgray;
    color: black;
    &:hover {
      cursor: pointer;
      filter: brightness(105%);
    }
  }
}

form {
  width: 100%;
  button {
    width: 100%;
  }
}

.letter-opening {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.letter-closing {
  margin-bottom: 0.5rem;
}

.submit-btn {
  margin-top: 1rem;
}
</style>
