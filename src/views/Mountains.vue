<template>
  <div class="mountains">
    <card v-bind:photos="oceans"/>

    
  </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
  name: 'Mountains',
  data() {
          return {
              oceans: [
                  {id: 1, photographer: 'Stephan Seeber', src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 2, photographer: 'Simon Migaj', src: 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 3, photographer: 'Eberhard Grossgasteiger', src: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 4, photographer: 'Ingo Joseph', src: 'https://images.pexels.com/photos/551876/pexels-photo-551876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 5, photographer: 'Eberhard Grossgasteiger', src:'https://images.pexels.com/photos/640858/pexels-photo-640858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 6, photographer: 'Quang Nguyen Vinh', src: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 7, photographer: 'Francesco Ungaro', src: 'https://images.pexels.com/photos/2915997/pexels-photo-2915997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                  {id: 8, photographer: 'Eberhard Grossgasteiger', src: 'https://images.pexels.com/photos/1612371/pexels-photo-1612371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
              ]
          }
      },
  components: {
    Card
  }
}
</script>
