<template>
  <div>
    <card v-bind:photos="oceans"/>

    
  </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
  name: 'Tropical',
  data() {
          return {
              oceans: [
                  {id: 1, photographer: 'MarcTutorials', src: 'https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 2, photographer: 'Mohamed Sarim', src: 'https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 3, photographer: 'Leah Kelly', src: 'https://images.pexels.com/photos/2090645/pexels-photo-2090645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 4, photographer: 'Artem Beliaikin', src: 'https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 5, photographer: 'Fabian Wiktor', src: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 6, photographer: 'Asad Photo', src: 'https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 7, photographer: 'André Cook', src: 'https://images.pexels.com/photos/396714/pexels-photo-396714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 8, photographer: 'Vincent Gerbouin', src: 'https://images.pexels.com/photos/1233285/pexels-photo-1233285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
              ]
          }
      },
  components: {
    Card
  }
}
</script>
