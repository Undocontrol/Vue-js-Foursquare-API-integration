<template>
  <div class="resultsBlock">
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

h1 {
  color: plum;
}
</style>
