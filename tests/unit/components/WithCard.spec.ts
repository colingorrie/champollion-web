import { shallow, Wrapper } from 'vue-test-utils';

import WithCard from '@/components/WithCard';
import RetrieveCard from '@/services/retrieveCard';
import { card } from '../services/mocks';

jest.mock('@/services/retrieveCard');
// eslint-disable-next-line @typescript-eslint/no-var-requires
RetrieveCard.exec = jest.fn().mockImplementation(() => card);

describe('given an empty slot', () => {
  const slots = {
    default: '<div></div>',
  };
  describe('when mounted', () => {
    let wrapper: Wrapper<WithCard>;
    beforeEach(() => {
      wrapper = shallow(WithCard, { slots });
    });
    it('calls the RetrieveCard service', () => {
      expect(RetrieveCard.exec).toHaveBeenCalled();
    });

    it('sets vm.card to returned card', () => {
      expect(wrapper.vm.card).toEqual(card);
    });
  });
});
