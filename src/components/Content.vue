<template>
<div>
    <transition name="cappear" appear >
        <div v-bind:style="contentPosition">
            <content-icon :payload='payload' @iconClicked="iClicked" :nest=nest key="icn"/>
            <content-explain :payload='payload' key="exp" :isActive="isActive"/>
        </div>
    </transition>
</div>
</template>

<script>
import ContentIcon from '@/components/ContentIcon.vue'
import ContentExplain from '@/components/ContentExplain.vue'

export default {
    name: 'Content',
    components: {
        ContentIcon,
        ContentExplain
    },
    props:{
        payload:{},
        position:Number,
        nest:Number,
        id:Number,
        activeID:Number,
        offsetY:Number,
    },

    data:function(){
        return {
        }
    },
    created:function(){

    },
    methods:{
        iClicked:function(){
            this.$emit('setActiveID',this.id)
        }
    },
    computed:{
        contentPosition:function(){
            if(this.activeID==this.id){
            return{
                position:'absolute',
                transform: `translate(${10+(this.nest)*106}px, ${10+(this.nest-1+this.position+this.offsetY)*76}px)`,
                transition: 'transform .5s ease'
            };
            }else{
            return{
                position:'absolute',
                transform: `translate(${10+(this.nest-1)*106}px, ${10+(this.nest-1+this.position+this.offsetY)*76}px)`,
                transition: 'transform .5s ease'
            };
            }
        },
        isActive:function(){
            return this.activeID==this.id;
        }
    }
}
</script>

<style scoped>

.cappear-enter-active,.cappear-leave-active{
  transition:opacity 0.5s, transform 0.75s ease !important;
}

.cappear-enter{
  opacity: 0 ;
  transform:translate(-76px,0px) !important; 
}
.cappear-enter-to{

  opacity: 1;

}


</style>