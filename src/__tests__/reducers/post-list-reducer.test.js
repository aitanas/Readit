import postListReducer from '../../reducers/post-list-reducer'

describe('postListReducer', () => {

  test('should return default state if no action type is passed into reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  })

});