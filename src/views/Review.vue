<template>
  <div class="h-full mx-auto container">
    <div class="flex flex-col h-full justify-center">
      <div class="flex justify-center mb-4">
        <flash-card :isFront="isFront"/>
      </div>
      <div class="flex justify-center w-100">
        <action-button v-show="isFront" @click="flipCard" text="Flip" emoji="🐬" shortcut="↩"></action-button>
        <answer-buttons v-show="!isFront" @answer="handleAnswer"></answer-buttons>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AnswerButtons from '@/components/AnswerButtons.vue';
import FlashCard from '@/components/FlashCard.vue';
import ActionButton from '@/components/ActionButton.vue';

@Component({
  components: {
    ActionButton,
    AnswerButtons,
    FlashCard,
  },
})
export default class Home extends Vue {
  private isFront = true;

  private handleAnswer(answer: number) {
    this.flipCard();
  }

  private flipCard() {
    this.isFront = !this.isFront;
  }
}
</script>
