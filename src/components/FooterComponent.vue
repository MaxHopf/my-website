<script>
export default {
  name: 'FooterComponent',
}
</script>

<template>
  <footer>
    <span class="copyright"><small>&copy; 2024 Max Hopf</small></span>
    <div class="networking">
      <a
        href="https://www.linkedin.com/in/maximilian-von-hopffgarten"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile (opens in a new tab)"
      >
        <img
          class="icon"
          width="24px"
          height="24px"
          src="../assets/icons/linkedin.svg"
          alt="LinkedIn Icon"
        />
      </a>
      <a
        href="https://github.com/MaxHopf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile (opens in a new tab)"
      >
        <img
          class="icon"
          width="24px"
          height="24px"
          src="../assets/icons/github.svg"
          alt="Github Icon"
        />
      </a>
      <a href="mailto:contact@maxhopf.me" aria-label="Send me an email">
        <img
          class="icon"
          width="24px"
          height="24px"
          src="../assets/icons/mail.svg"
          alt="Mail Icon"
        />
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--footer-background);
  color: var(--footer-text);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.5rem 4rem;
  .networking {
    display: flex;
    gap: 1rem;
    a {
      all: unset;
      display: flex;
      flex-direction: center;
      align-items: center;
    }
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      padding: 0.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: aqua;
      box-sizing: content-box;
      use {
        fill: var(--footer-text);
        transition: fill 0.15s ease;
      }
    }
    .icon:hover use {
      fill: var(--default-accent);
      cursor: pointer;
    }
  }
}

#github {
  color: black; /* Initial color */
  transition: fill 0.3s ease;
}

#github:hover {
  color: red; /* Color on hover */
}

@media (max-width: 1200px) {
  footer {
    padding: 0.5rem 1rem;
  }
}
</style>
