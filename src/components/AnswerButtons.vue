<template>
  <div class="flex">
    <action-button
      v-for="(ease, i) in eases"
      :key="ease.value"
      @click="$emit('answer', ease.value)"
      :text="ease.text"
      :emoji="ease.emoji"
      :shortcut="i.toString()"
    ></action-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ActionButton from '@/components/ActionButton.vue';

@Component({
  components: {
    ActionButton,
  },
})
export default class AnswerButtons extends Vue {
  private eases: object[] = [
    {
      text: 'Fail',
      emoji: '💀',
      value: 0,
    },
    {
      text: 'Hard',
      emoji: '😰',
      value: 1,
    },
    {
      text: 'Hard',
      emoji: '😄',
      value: 2,
    },
  ];
}
</script>
