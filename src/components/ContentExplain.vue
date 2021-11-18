<template>
<span>
    <transition name="expand">
    <v-card
    class="btnactive"
    max-width="374"
    v-if="isActive"
    >
        <v-card-title class="ml-16">
        {{payload.title}}
        </v-card-title>
        <v-container>
            {{payload.explain}}
        </v-container>
    </v-card>
    </transition>
</span>
</template>

<script>
export default {
    name: 'ContentExplain',
    props:{
        payload:{},
        isActive:Boolean
    },
}
</script>

<style scoped>
.btnactive{
  position:relative;
    top:-50px;
  z-index:666;
}

.expand-enter-active, .expand-leave-active {
  transition: opacity 0.5s,transform 0.5s;
}
.expand-enter, .expand-leave-to{
  opacity: 0;
  transform:scale(0) translate(-66px,-66px);
}
.expand-enter-to{
  opacity: 1;
  transform:scale(1);
}
</style>