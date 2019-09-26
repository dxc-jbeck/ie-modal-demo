<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
      <keep-alive :include="cachedViews" :max="20">
        <router-view :key="$route.fullPath" />
      </keep-alive>
    <component :is="currentModal" :data="modalData"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      currentModal: null,
      modalData: {},
      cachedViews: ['HelloWorld']
    }
  },
  mounted() {
    this.$root.$on('modal:show', (modal, data = {}) => {
      this.currentModal = modal
      this.modalData = data
      this.$nextTick(() => {
        this.$root.$emit('bv::show::modal', 'root-modal')
      })
    })
    this.$root.$on('modal:hide', () => {
      this.$root.$emit('bv::hide::modal', 'root-modal')
    })
    this.$root.$on('bv::hide::modal', () => {
      setTimeout(() => (this.currentModal = null), 300)
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
