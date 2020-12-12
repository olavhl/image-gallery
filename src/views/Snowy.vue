<template>
  <div>
    <card v-bind:photos="oceans"/>

    
  </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
  name: 'Snowy',
  data() {
          return {
              oceans: [
                  {id: 1, photographer: 'Radu Andrei Razvan', src: 'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 2, photographer: 'Flo Maderebner', src: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 3, photographer: 'James Wheeler', src: 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 4, photographer: 'Ruvim Miskanskiy', src: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 5, photographer: 'Eberhard Grossgasteiger', src: 'https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 6, photographer: 'Nikolai Ulltang', src: 'https://images.pexels.com/photos/325139/pexels-photo-325139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 7, photographer: 'Kevin Blanzy', src: 'https://images.pexels.com/photos/1130692/pexels-photo-1130692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 8, photographer: 'Alek Niemczyk', src: 'https://images.pexels.com/photos/783796/pexels-photo-783796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
              ]
          }
      },
  components: {
    Card
  }
}
</script>
