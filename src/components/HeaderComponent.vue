<script>
export default {
  name: 'HeaderComponent',
}
</script>

<template>
  <header>
    <nav>
      <div>
        <a class="home-logo">
          <router-link id="logo" to="/" exact-active-class="active" aria-label="Home page"
            >MAX HOPF</router-link
          >
        </a>
      </div>
      <ul>
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
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: white;
  padding: 1rem 4rem;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
      list-style: none;
    }
    a {
      text-decoration: none;
      font-size: 1.3125rem;
      line-height: 1.3125rem;
      font-weight: 600;
    }
    a:hover {
      cursor: pointer;
      text-decoration: underline;
      text-decoration-thickness: 0.125em;
      text-underline-offset: 0.15em;
      text-decoration-color: black;
    }
    a.active {
      text-decoration: underline;
      text-decoration-thickness: 0.125em;
      text-underline-offset: 0.15em;
      font-weight: 800;
      text-decoration-color: black;
    }
    .home-logo {
      font-size: 1.75rem;
      line-height: 1.75rem;
      font-weight: 600;
    }
    #logo {
      all: unset;
      &:hover {
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 1200px) {
  header {
    padding: 1rem 1rem;
  }
}
</style>
