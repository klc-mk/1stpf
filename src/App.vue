<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>This is my 1st Portfolio.</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    
    <v-main>

          <Contents :payload="contents" :parentNest="1" :offsetY="0"/>
        
    </v-main>
  </v-app>

</template>

<script>
import Contents from './components/Contents.vue';
import contData from './assets/contdata.js'

export default {
  name: 'App',

  components: {
    Contents,
  },

  data: () => ({
    contents:[],
  }),
  created:function(){
    this.contents = contData.getContents();
  },
  methods:{

  }

};
</script>

<style scoped>



</style>