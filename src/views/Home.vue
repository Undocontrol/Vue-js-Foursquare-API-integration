<!--
File Overview:
* This is the main "view", and importing all components into this view.
-->

<template>
  <div class="home">
    <div class="navigatorBlock">
      <div class="introduction">
        <h1>Welcome to your Nightlife Planner</h1>
        <p>Find A Great Night Out!</p>
        <p>Just enter your destination and click Go!</p>
      </div>
      <div class="searchBar">
        <div class="input-group">
        <input type="text" name="search" placeholder="Enter your location.." v-model="query">
        <input type="submit" v-on:click="search" value="Go!" class="button">
        </div>
      </div>
    </div>
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
      results: [],
      query: ''
    }
  },
  created: function () {
    //this.fetchResults();
  },
  methods: {
    search() {
      this.fetchResults(this.query)
    },
    onClickChild (value) {
      this.fetchResults(value)
    },
    fetchResults: async function (search) {
      let results = await api.get('https://api.foursquare.com/v2/venues/search?intent=global&client_id=KF4ZDGTE3ATUTRLW1GXNXK1DFIG0MYQSYBLXXRPK3AZSCVE2&client_secret=EPHEQNNV202AYCZ00TRXIMJGREZLMA3DO3KNJC3A0HXP2C4S&v=20190101&categoryId=4d4b7105d754a06376d81259&query=' + search)
      console.log(results);
      this.results = results.response.venues;
    },
    onClick (value) {
      console.log(value) // someValue
    }
  }
}
</script>
<style scoped>

.navigatorBlock {
  background-image: url('/assets/nightlife.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  min-height:500px;
}

.introduction{
  padding-top: 30px;
}

.navigatorBlock p {
  font-size: 30px;
}
input[type=text] {
  color: black;
  font-size:20px;
  padding:10px;
  transition: width 0.4s ease-in-out;
  width: 200px;
  -webkit-transition: width 0.4s ease-in-out;
}

input[type=submit]{
  background-color:plum;
  border: none;
  color: white;
  cursor: pointer;
  padding: 20px 32px 14px;
  text-decoration: none;
}

/* When the input field gets focus, change its width to 100% */
input[type=text]:focus {
  width: 500px;
}

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
