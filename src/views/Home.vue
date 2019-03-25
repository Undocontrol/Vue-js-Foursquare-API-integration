<!--
File Overview:
* This is the main "view", and importing all components into this view.
-->

<template>
  <div class="home">
    <navigatorBlock></navigatorBlock>
    <resultsBlock v-bind:venues="results"></resultsBlock>
  </div>
</template>

<script>
// @ is an alias to /src
import navigatorBlock from '@/components/navigatorBlock.vue'
import resultsBlock from '@/components/resultsBlock.vue'
import api from '@/store/api.js'

export default {
  name: 'home',
  components: {
    navigatorBlock,
    resultsBlock,
  },
   data() {
    return {
      results: []
    }
  },
  created: function () {
    this.fetchResults();
  },
  methods: {
    fetchResults: async function () {
      let results = await api.get('https://api.foursquare.com/v2/venues/search?intent=global&client_id=KF4ZDGTE3ATUTRLW1GXNXK1DFIG0MYQSYBLXXRPK3AZSCVE2&client_secret=EPHEQNNV202AYCZ00TRXIMJGREZLMA3DO3KNJC3A0HXP2C4S&query=tacos&v=20190101')
      console.log(results);
      this.results = results.response.venues;
    }
  }
}
</script>
<style scoped>

</style>
