<template>
    <div id="app">
        <NavBar />
        <div class="container-fluid">
            <router-view/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
