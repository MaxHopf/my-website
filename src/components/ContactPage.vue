<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import emailjs from 'emailjs-com'

export default {
  name: 'ContactPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      message: '',
      draftSavedAt: null,
    }
  },
  mounted() {
    const savedMessage = localStorage.getItem('draftMessage')
    const savedTimestamp = localStorage.getItem('draftSavedAt')
    if (savedMessage) {
      this.message = savedMessage
      this.draftSavedAt = savedTimestamp ? new Date(savedTimestamp) : null
    }
  },

  methods: {
    saveDraft() {
      localStorage.setItem('draftMessage', this.message)
      const now = new Date()
      this.draftSavedAt = now
      localStorage.setItem('draftSavedAt', now.toISOString())
    },
    sendEmail(event) {
      event.preventDefault()

      emailjs
        .sendForm('service_9mup228', 'template_rjfe34l', event.target, '9FJaaHQA-NwdXyMsx')
        .then(
          (result) => {
            console.log('Email sent:', result.text)
            alert('Your message has been sent successfully!')
            localStorage.removeItem('draftMessage')
            this.message = ''
            const email = event.target.email.value
            this.$router.push({ name: 'Thank You', query: { email } })
          },
          (error) => {
            console.error('EmailJS error:', error)
            alert('An error occurred while sending your message.')
          },
        )
    },
  },
}
</script>

<template>
  <div class="layout">
    <HeaderComponent />
    <main class="contact">
      <h1>Contact Me</h1>
      <form class="form" @submit="sendEmail">
        <p class="letter-opening">Hello Max,</p>
        <div class="input">
          <textarea
            v-model="message"
            @input="saveDraft"
            placeholder="Write me a message"
            id="message"
            name="message"
            cols="45"
            rows="8"
            maxlength="65525"
            required
          ></textarea>
          <p class="draft-info">
            <span v-if="draftSavedAt" class="save-status-info">
              <small>Your draft is saved in your browser.</small>
            </span>
            <span v-else class="save-status-info">
              <small> Your message will be automatically saved as a draft. </small>
            </span>
          </p>
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

.draft-info {
  text-align: right;
}
</style>
