<template>
  <div class="navigatorBlock">
    <div class="introduction">
      <h1>Welcome to your Nightlife Planner</h1>
      <p>Find A Great Night Out!</p>
      <p>Just enter your destination and click Go!</p>
    </div>
    <div class="searchBar">
      <div class="input-group">
      <input type="text" name="search" placeholder="Enter your location..">
      <input type="submit" value="Go!" class="button">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'navigatorBlock',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
