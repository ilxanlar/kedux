import { REMOVE, SET } from '../src/actions';
import { remove, set } from '../src/actionCreators';

describe('ACTION CREATORS', () => {
  it('SET action', () => {
    expect(set('name', 'value')).toEqual({
      type: SET,
      name: 'name',
      value: 'value'
    });
  });

  it('REMOVE action', () => {
    expect(remove('name')).toEqual({
      type: REMOVE,
      name: 'name'
    });
  });
});
