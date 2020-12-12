<template>
<div id="card-container">
  <v-card
    v-for="photo in photos"
    :key="photo.id"
    class="mx-auto"
    max-width="344"
    id="card"
  >
    <v-img
      :src="`${photo.src}`"
      height="200px"
    ></v-img>

    <v-card-title>
    <h4>
      {{photo.photographer}}
    </h4>
    </v-card-title>

  </v-card>
</div>
</template>

<script>
  export default {
      props: ['photos']
      
  }
</script>

<style lang="scss" scoped>

#card-container {
    margin-top: 10vh;
    display: flex;
    flex-wrap: wrap;

    #card {
        margin-bottom: 5vh;
    }
}

</style>