<template>
  <div
    class="bg-white container flex h-64 items-center max-w-md mx-auto p-4 shadow-md"
    :class="{
      'border-purple-9': isFront,
      'border-l-8': isFront,
      'border-cyan-9': !isFront,
      'border-r-8': !isFront,
    }">
    <template v-if="isFront">
      <p class="mx-auto text-4xl text-black text-center">大半夜</p>
    </template>
    <template v-else>
      <p class="mx-auto text-4xl text-black text-center">in the middle of the night</p>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FlashCard extends Vue {
  @Prop({ default: true }) public isFront!: boolean;
}
</script>

<style scoped lang="scss">
</style>
