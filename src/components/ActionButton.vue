<template>
  <div class="mt-2">
    <div
      class="flex flex-col"
      @click="$emit('click')"
    >
      <a class="bg-pink-5 block font-bold hover:bg-pink-6 ml-2 mr-2 px-4 py-2 rounded text-center text-white text-xl w-32">{{ text }} <span v-if="emoji">{{ emoji }}</span></a>
      <p
        class="text-center text-grey-5 m-2"
        v-if="shortcut"
      >{{ shortcut }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FlipButton extends Vue {
  @Prop({ default: null }) public emoji!: string | null;
  @Prop({ default: null }) public shortcut!: string | null;
  @Prop({ required: true }) public text!: string;
}
</script>
