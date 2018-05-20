import reducer from '../src/reducer';
import { REMOVE, SET } from '../src/actions';

describe('REDUCER', () => {
  it('Initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('Unknown action', () => {
    expect(reducer(undefined, { type: 'UNKNOWN' })).toEqual({});
  });

  it('Set a field', () => {
    expect(reducer({}, {
      type: SET,
      name: 'someKey',
      value: 'someValue'
    })).toEqual({
      someKey: {
        value: 'someValue'
      }
    });
  });

  it('Set a previously-set field', () => {
    const state = reducer({
      someKey: {
        value: 'previousValue'
      }
    }, {
      type: SET,
      name: 'someKey',
      value: 'newValue'
    });

    const expectedState = {
      someKey: {
        value: 'newValue'
      }
    };

    expect(state).toEqual(expectedState);
  });

  it('Remove a field', () => {
    const state = reducer({
      someKey: {
        value: 'someValue'
      }
    }, {
      type: REMOVE,
      name: 'someKey'
    });

    const expectedState = {};

    expect(state).toEqual(expectedState);
  });

  it('Remove a non-existent field', () => {
    const state = reducer({}, {
      type: REMOVE,
      name: 'someKey'
    });

    const expectedState = {};

    expect(state).toEqual(expectedState);
  });
});
