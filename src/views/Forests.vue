<template>
  <div>
    <card v-bind:photos="oceans"/>

    
  </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
  name: 'Forests',
  data() {
          return {
              oceans: [
                  {id: 1, photographer: 'Felix Mittermeier', src: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 2, photographer: 'Lum3n', src: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 3, photographer: 'Thiago Japyassu', src: 'https://images.pexels.com/photos/1563604/pexels-photo-1563604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 4, photographer: 'Lukas', src: 'https://images.pexels.com/photos/574190/pexels-photo-574190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 5, photographer: 'Micah Boerma', src: 'https://images.pexels.com/photos/1008739/pexels-photo-1008739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 6, photographer: 'Kelly Lacy', src: 'https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 7, photographer: 'Veeterzy', src: 'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 8, photographer: 'Creative Vix', src: 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
              ]
          }
      },
  components: {
    Card
  }
}
</script>
