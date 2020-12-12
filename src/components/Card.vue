<template>
<div id="ocean-container">
  <v-card
    v-for="ocean in oceans"
    :key="ocean.id"
    class="mx-auto"
    max-width="344"

  >
    <v-img
      :src="`${ocean.src}`"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ocean.photographer}}
    </v-card-title>

  </v-card>
</div>
</template>

<script>
  export default {
      data() {
          return {
              oceans: [
                  {id: 1, photographer: 'Emiliano Arano', src: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 2, photographer: 'Jess Vide', src: 'https://images.pexels.com/photos/4321879/pexels-photo-4321879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 3, photographer: 'Pok Rie', src: 'https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 4, photographer: 'Kellie Churchman', src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 5, photographer: 'Matt Hardy', src:'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 6, photographer: 'Josh Sorenson', src: 'https://images.pexels.com/photos/386148/pexels-photo-386148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 7, photographer: 'Emiliano Arano', src: 'https://images.pexels.com/photos/1330218/pexels-photo-1330218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 8, photographer: 'Hazy Mokhlas', src: 'https://images.pexels.com/photos/47480/pexels-photo-47480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
              ]
          }
      }
      
  }
</script>

<style lang="scss" scoped>

#ocean-container {
    display: flex;
    flex-wrap: wrap;
}

</style>