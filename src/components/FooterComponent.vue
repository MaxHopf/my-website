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
        <svg class="icon" width="24px" height="24px" aria-hidden="true">
          <use href="../assets/icons/linkedin.svg#linkedin" />
        </svg>
      </a>
      <a
        href="https://github.com/MaxHopf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile (opens in a new tab)"
      >
        <svg class="icon" width="24px" height="24px" aria-hidden="true">
          <use href="../assets/icons/github.svg#github" />
        </svg>
      </a>
      <a href="mailto:mail2max@pm.me" aria-label="Send me an email">
        <svg class="icon" width="24px" height="24px" aria-hidden="true">
          <use href="../assets/icons/mail.svg#mail" />
        </svg>
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: aliceblue;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.5rem 4rem;
  .networking {
    display: flex;
    gap: 1rem;
    a {
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
      box-sizing: content-box;
      use {
        fill: black;
        transition: fill 0.15s ease;
      }
    }
    .icon:hover use {
      fill: yellow;
      cursor: pointer;
    }
  }
}

@media (max-width: 1200px) {
  footer {
    padding: 0.5rem 1rem;
  }
}
</style>
