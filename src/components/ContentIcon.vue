<template>
<span>
    <v-btn
        fab
        dark
        :color="btColor"
        @click="iconClicked"
        class="btnactive"
        >
        <v-icon dark>{{payload.icontype}}</v-icon>
    </v-btn>
</span>
</template>

<script>
export default {
    name: 'ContentIcon',
    props:{
        payload:{
            icontype:String,
            title:String,
            explain:String,
        },
        active:Boolean,
        nest:Number
    },
    methods:{
        iconClicked:function(){
            this.$emit("iconClicked");
        }
    },
    computed:{
        btColor:function(){
            if(this.nest==1){return 'primary'}else{return 'secondary'}
        }
    },
}
</script>

<style scoped>
.btnactive{
  position:relative;
  z-index:9999;
}

</style>