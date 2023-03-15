<template>
  <nav class="navbar sticky-top navbar-light bg-white" :class="scrolled ? 'scroll' : ''">
    <div class="container line-bottom">
      <router-link to="/" class="navbar-brand pb-3">
        <img src="./assets/logo-ssc.png" alt="" width="120" height="75">
      </router-link>
    </div>
  </nav>

  <router-view/>
</template>

<script>
export default {
  data(){
    return{
      scrolled: false
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222222;
}

p{
  color: #465b52;
}

.line-bottom{
  border-bottom: 1px solid rgba(173, 175, 184, 0.5);
}

.scroll {
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.btn-primary{
  background-color: red;
}

</style>
