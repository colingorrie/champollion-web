import API from '@/api';
import Card from '@/domain/card';

export class CardNotFoundError extends Error {}

class RetrieveCard {
  public static async exec(cardId: string): Promise<Card> {
    try {
      const response = await API.get(`/cards/${cardId}`);
      return response.data;
    } catch (err) {
      throw new CardNotFoundError(`Card ${cardId} not found`);
    }
  }
}

export default RetrieveCard;
