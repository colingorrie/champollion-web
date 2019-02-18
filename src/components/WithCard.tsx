import { VNode } from 'vue';
import { Component, Vue } from 'vue-property-decorator';
import RetrieveCard from '@/services/retrieveCard';
import Card from '@/domain/card';

@Component
export default class WithCard extends Vue {
  abstract = true;
  card: Card | null = null;

  async created(): Promise<void> {
    try {
      this.card = await RetrieveCard.exec('whatever');
    } catch (err) {}
  }

  render(): VNode {
    if (
      this.$slots.default &&
      this.$slots.default.length &&
      this.$slots.default.length === 1
    ) {
      return this.$slots.default[0];
    }
    throw new Error('WithCard can only render one child.');
  }
}
