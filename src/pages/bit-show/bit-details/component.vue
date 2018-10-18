<template>
  <div class="bit-info">
    <div v-for="(doc, idx) in bit.docs" :key="idx">
      <h3 v-if="doc.description" class="uppercase-headline">{{doc.description}}</h3>
      <div v-if="doc.examples.length > 0" v-for="(example, idx) in doc.examples" :key="idx">
        <codemirror :value="example.code" />
      </div>
    </div>
    <div v-if="bitProps" class="marg-top">
      <h3 class="uppercase-headline">Props</h3>
      <codemirror :value="JSON.stringify(bitProps, null, 2)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bit: {
      required: true,
      type: Object
    }
  },

  computed: {
    bitProps () {
      const props = {}
      this.bit.docs.filter((doc) => doc.properties.length > 0).forEach((prop) => {
        const objProps = prop.properties[0]
        props[objProps.name] = {
          description: objProps.description,
          type: objProps.type
        }
      })
      return props
    }
  }
}
</script>

<style lang="scss">
  .bit-info {
    .uppercase-headline {
      border-bottom: 1px solid #e0e0e0;
      font-weight: 500;
      padding: 0 0 0.8rem;
      text-transform: uppercase;
    }

    .CodeMirror {
      background-color: #343a43;
      border-radius: 4px;
      height: auto !important;
    }

    .marg-top {
      margin-top: 1rem;
    }

    .cm-s-tomorrow-night-eighties.CodeMirror, .CodeMirror-gutter-filler {
      background-color: #343a43;
    }
  }
</style>
