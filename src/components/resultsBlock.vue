<!--
File Overview:
* Displays results from API lookups.
-->
<template>
  <div class="resultsBlock" v-if="venues.length">
    <h1>Recommended Places</h1>
    <table class="venuesList">
        <thead>
          <tr>
            <th class="title">Name</th>
            <th class="title">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="venue in venues" :key="venue.id">
            <td>{{ venue.name }}</td>
            <td>{{ venue.location.city}}</td>
            <td>{{ venue.referralId }}</td>
            <td v-for="category in venue.categories" v-if="category.primary" :key="category.id">
              <img v-bind:src="category.icon.prefix + '64' + category.icon.suffix" />
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>


<script>
export default {
  name: 'resultsBlock',
  props: {
    venues: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resultsBlock {
  text-align: left;
}

table {
  margin: 0 auto;
  width: 100%;
}

td {
  border-bottom: 1px solid wheat;
  color: plum;
}

.title {
  color:plum;
  font-size: 25px;
}

img {
  background: plum;
}

h1 {
  color: plum;
}
</style>
