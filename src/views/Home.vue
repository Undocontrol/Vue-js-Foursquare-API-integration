<!--
File Overview:
* This is the main "view", and importing all components into this view.
-->

<template>
  <div class="home">
    <navigatorBlock></navigatorBlock>
    <resultsBlock></resultsBlock>
  </div>
</template>

<script>
// @ is an alias to /src
import navigatorBlock from '@/components/navigatorBlock.vue'
import resultsBlock from '@/components/resultsBlock.vue'

export default {
  name: 'home',
  components: {
    navigatorBlock,
    resultsBlock
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>

</style>
