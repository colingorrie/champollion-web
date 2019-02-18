import Card from '@/domain/card';
import RetrieveCard from '@/services/retrieveCard';

import { card as mockCard } from './mocks';

jest.mock('@/api', () => require('./mocks').API);

describe('RetrieveCard', () => {
  describe('given a cardId with a matching card', () => {
    const cardId = 'exists';
    describe('when exec(cardId) is called', () => {
      let card: Card;

      beforeEach(async () => {
        card = await RetrieveCard.exec(cardId);
      });

      it('returns the corresponding card', () => {
        expect(card).toEqual(mockCard);
      });
    });
  });

  describe('given a card id with no matching card', () => {
    let cardId = 'THROW-404';

    describe('when exec is called with that id', () => {
      it('throws an error', async () => {
        await expect(RetrieveCard.exec(cardId)).rejects.toThrow(
          `Card ${cardId} not found`
        );
      });
    });
  });
});
