<template>
  <b-modal
    id="root-modal"
    :title="title"
    :centered="centered"
    :hide-footer="!$slots['modal-footer']"
    data-qa="RootModal"
  >
    <slot />
    <slot
      v-if="$slots['modal-footer']"
      slot="modal-footer"
      name="modal-footer"
    />
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: '',
      description: 'The title of the modal'
    },
    centered: {
      type: Boolean,
      default: true,
      description: 'Center the dialog on screen'
    }
  },
  mounted() {
    this.$root.$emit('bv::show::modal', 'root-modal')
  }
}
</script>

<style lang="scss">
// NOTE: Cannot scope component
#root-modal {
  .modal-body {
    background: white;
  }
  .modal-footer {
    background: aqua;
  }
  .modal-header {
    align-items: center;
    background: lightgoldenrodyellow;
    .close {
      color: red;
      &::before {
        font-size: 20px;
      }
    }
  }
  .modal-title {
    color: black;
  }
}
</style>
