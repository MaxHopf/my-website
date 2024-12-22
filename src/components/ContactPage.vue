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
      isSubmitting: false,
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
    async sendEmail(event) {
      event.preventDefault()

      if (this.isSubmitting) return
      this.isSubmitting = true

      const email = event.target.email.value
      const name = event.target.name.value
      const message = this.message

      try {
        await emailjs.sendForm(
          'service_9mup228',
          'template_rjfe34l',
          event.target,
          '9FJaaHQA-NwdXyMsx',
        )
        localStorage.removeItem('draftMessage')
        this.message = ''
        this.$router.push({ name: 'Thank You', query: { email, name } })
      } catch (error) {
        console.error('EmailJS error:', error)
        alert('An error occurred while sending your message.')
      } finally {
        this.isSubmitting = false
      }
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
              <small>Your message will be automatically saved as a draft.</small>
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
            maxlength="100"
            required
          />
          <label class="small-text" for="email">Your Email</label>
        </div>
        <button class="submit-btn" type="submit" :disabled="isSubmitting">
          <span v-if="isSubmitting">Sending...</span>
          <span v-else>Send Message</span>
        </button>
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
    span {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1rem;
    }
  }
  textarea {
    margin-bottom: 0;
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
  cursor: pointer;
}
.submit-btn[disabled] {
  cursor: not-allowed;
  opacity: 0.7;
}

.draft-info {
  text-align: right;
}
</style>
