<template>
<div>
    <div v-for="(content,index) in payload" :key="content.title">
        <Content :payload="content" :position="index" :nest="nest" :offsetY="offsetY" :activeID="activeID" :id="index" v-on:setActiveID="setActiveID"/>
        <transition name="childexpand">
        <Contents :payload="content.child" :parentNest="nest+1" :offsetY="index" v-if="activeID==index"/>
        </transition>
    </div>
</div>
</template>

<script>
import Content from '@/components/Content.vue'
export default {
    name: 'Contents',
    components: {
        Content,
    },
    props:{
        payload:{},
        parentNest:Number,
        offsetY:Number
    },
    created:function(){
        this.nest = this.parentNest;
        this.activeID = -1
    },
    data:function(){
        return{
            nest:Number,
            activeID:Number
        }
    },
    methods:{
        setActiveID:function(id){
            this.activeID = id;
        }
    }
}
</script>

<style scoped>

.childexpand-enter-active,.childexpand-leave-active{
  transition:opacity 0.5s, transform 0.75s ease !important;
}

.childexpand-enter{
  opacity: 0 ;
  transform:translate(-76px,0px) !important; 
}
.childexpand-enter-to{
  opacity: 1;
}
.childexpand-leave-to{
  opacity: 0 ;
  transform:translate(-76px,0px) !important; 
}


</style>