<template>
  <div class="hello">
    <div>
      {{ playlist.isPublic ? 'public' : 'private' }}
    </div>
      <b-button @click="showModal">
        Click me
      </b-button>
  </div>
</template>

<script>
import ShareModal from './ShareModal'
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
    computed: {
    ...mapState('playlist', ['playlist'])
  },
  methods: {
    showModal() {
        this.$root.$emit('modal:show', ShareModal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
