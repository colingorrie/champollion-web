import Card from '@/domain/card';

export const card: Card = {
  front: '妳好',
  back: 'hello',
};

export const API = {
  get(url: string) {
    const matches = url.match(/\/cards\/([a-zA-Z0-9\-]*)$/);
    if (matches && matches.length) {
      if (matches[1] === 'THROW-404') return Promise.reject();
      return Promise.resolve({
        data: card,
      });
    }
    return Promise.reject();
  },
};
