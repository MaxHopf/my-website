// CalloutComponent.vue
<template>
  <section class="callout">
    <div class="callout-header">
      <!-- <svg class="icon" width="24px" height="24px" aria-hidden="true">
        <use href="../assets/icons/exclamation.svg#exclamation" />
      </svg> -->
      <h3>{{ title }}</h3>
    </div>
    <p>{{ message }}</p>
    <router-link to="/contact" active-class="active" aria-label="Contact me page">
      Contact Me
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'CalloutComponent',
  props: {
    title: {
      type: String,
      default: 'Callout Title',
    },
    message: {
      type: String,
      default: 'Callout Descriptive Message',
    },
    // iconHref: {
    //   type: String,
    //   default: '../assets/icons/mail.svg#mail',
    // },
    // iconColor: {
    //   type: String,
    //   default: '#333333',
    // },
  },
}
</script>

<style scoped>
.callout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f3f8fd;
  border: 3px solid #3c7bbe;
  border-radius: 0.5rem;
  padding: 1.5rem;
  .callout-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

/* .icon {
  margin-right: 8px;
  color: var(--icon-color, #6a2e2e); 
}

svg {
  use {
    stroke: currentColor;
  }
} */

h3 {
  font-style: italic;
}

a {
  display: inline-block;
  text-decoration: none;
  background-color: rgb(234, 186, 12);
  text-align: center;
  padding: 0.75rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
    filter: brightness(105%);
  }
}
</style>
