<template>
  <Modal>
    <b-form-group >
      <b-form-checkbox v-model="isPublic" switch>
      </b-form-checkbox>
    </b-form-group>
    <template slot="modal-footer">
      <b-button @click="$root.$emit('modal:hide')">
        Cancel
      </b-button>
      <b-button variant="primary" @click="save">
        Save
      </b-button>
    </template>
  </Modal>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Modal from './Modal'
export default {
  name: 'ShareModal',
  data() {
    return {
      isPublic : this.$store.state.playlist.playlist.isPublic
    }
  },
  computed: {
    ...mapState('playlist', ['playlist'])
  },
  methods: {
    ...mapActions('playlist', ['get', 'update']),
    save() {
      this.update({
        isPublic: this.isPublic
      }).then(() => {
        this.get()
        this.$root.$emit('modal:hide')
      })
    }
  }
}
</script>

<style></style