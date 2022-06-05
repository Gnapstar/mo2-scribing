<template>
  <div class="d-flex flex-column min-vh-100">
    <b-navbar toggleable="lg" type="dark">
      <b-container>
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
          MO2 Scribing
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <NuxtLink class="nav-link" to="/">Scribing</NuxtLink>
            <NuxtLink class="nav-link" to="/chance">Chance Table</NuxtLink>
            <NuxtLink class="nav-link" to="/leveling">Leveling Scribing</NuxtLink>
          </b-navbar-nav>
        </b-collapse>

        <b-nav-form class="ml-md-auto d-block d-md-inline-block w-100 w-md-auto">
          <div class="text-white mr-2">My Scribe Level:</div>
          <b-form-input
            aria-label="Scribe level"
            type="number"
            min="0"
            max="100"
            :value="scribeLevel"
            @input="setScribeLevel($event)"
          />
        </b-nav-form>
      </b-container>
    </b-navbar>

    <div class="my-4">
      <Nuxt />
    </div>

    <footer class="mt-auto">
      <b-container class="py-4 text-center">
        Made by [Pergite] fader 🎉 Discord: ErikSouth#1567
      </b-container>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: 'DefaultLayout',

  computed: {
    ...mapGetters({
      scribeLevel: "user/getScribeLevel",
    })
  },

  mounted() {
    // Load from localStorage
    const loadedScribeLevel = localStorage.getItem('scribeLevel');
    if (loadedScribeLevel) {
      this.setScribeLevel(loadedScribeLevel);
    }
  },

  methods: {
    setScribeLevel(scribeLevel) {
      this.$store.commit("user/setScribeLevel", scribeLevel);
    }
  }
}
</script>
<style>
  @media (min-width: 768px) {
    .w-md-auto {
      width: auto !important;
    }
  }
</style>
