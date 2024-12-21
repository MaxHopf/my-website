<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  },
}
</script>

<template>
  <header>
    <nav>
      <div>
        <a class="home-logo">
          <router-link id="logo" to="/" exact-active-class="active" aria-label="Home page">
            MAX HOPF
          </router-link>
        </a>
      </div>
      <ul class="desktop-nav">
        <li>
          <router-link to="/" active-class="active" aria-label="Home page">HOME</router-link>
        </li>
        <li>
          <router-link to="/about" active-class="active" aria-label="About me page"
            >ABOUT</router-link
          >
        </li>
        <li>
          <router-link to="/contact" active-class="active" aria-label="Contact me page"
            >CONTACT</router-link
          >
        </li>
      </ul>
      <button
        class="hamburger"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <svg v-if="!isMenuOpen" class="icon" width="24px" height="24px" aria-hidden="true">
          <use href="../assets/icons/hamburger.svg#hamburger" />
        </svg>
        <svg v-else class="icon" width="24px" height="24px" aria-hidden="true">
          <use href="../assets/icons/xmark.svg#xmark" />
        </svg>
      </button>
      <div class="backdrop" :class="{ open: isMenuOpen }" @click="closeMenu"></div>
      <div class="overlay" :class="{ open: isMenuOpen }">
        <ul>
          <li>
            <router-link to="/" active-class="active" aria-label="Home page" @click="closeMenu">
              HOME
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              active-class="active"
              aria-label="About me page"
              @click="closeMenu"
            >
              ABOUT
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              active-class="active"
              aria-label="Contact me page"
              @click="closeMenu"
            >
              CONTACT
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--header-background);
  color: var(--header-text);
  padding: 1rem 4rem;
  position: relative;
  z-index: 10;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  all: unset;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
}

a:hover {
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 0.15em;
  text-decoration-color: var(--default-accent);
}

a.active {
  text-decoration: underline;
  font-weight: 800;
  text-decoration-color: var(--default-accent);
}

.home-logo {
  font-size: 1.5rem;
  font-weight: 600;
}

#logo {
  all: unset;
}

#logo:hover {
  cursor: pointer;
}

.desktop-nav {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.desktop-nav li {
  display: inline;
}

.desktop-nav a {
  font-size: 1.25rem;
  line-height: 1.25rem;
  text-transform: uppercase;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.75rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 15;
}

.hamburger .line {
  width: 1.5rem;
  height: 0.2rem;
  background: var(--header-text);
  border-radius: 2px;
}

.overlay {
  margin: 1rem 1rem;
  padding-top: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  color: red;
  border: 1px solid #b7b7b7;
  border-radius: 0.25rem;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 2rem;
  z-index: 14;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
}

.overlay.open {
  display: flex;
  opacity: 1;
}

.overlay ul {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
}

.overlay li {
  text-align: center;
  width: 100%;
  padding: 0.5rem 1rem;
}

.overlay a {
  font-size: 1.125rem;
  color: var(--default-text);
  text-decoration: none;
}

.overlay a:hover {
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

@media (max-width: 576px) {
  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 13;
  display: none;
}

.backdrop.open {
  display: block;
}

@media (max-width: 1200px) {
  header {
    padding: 1rem;
  }
}
</style>
