import voteOrderReducer from '../../reducers/vote-order-reducer'
import * as c from '../../actions/ActionTypes'

describe('voteOrderReducer', () => {

  // declare action to be defined within tests
  let action;
  
  // dummy data for testing
  const reviewData = 
  { 
    reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
    reviewAuthor: 'Gloria Patrick Thomas III',
    dateTime: '2023-02-14',
    review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
    votes: 0,
    bookTitle: 'Cloud Atlas',
    bookAuthor: 'David Mitchell',
    id: 1
  };

  let dummyState;

  beforeEach(() => {
    const { reviewTitle, reviewAuthor, review, bookAuthor, bookTitle, votes, id, dateTime } = reviewData
    // dummy state data for testing up votes
    dummyState = {
      postList: {
      [1]:
      { 
        reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
        reviewAuthor: 'Gloria Patrick Thomas III',
        dateTime: '2023-02-14',
        review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
        votes: 0,
        bookTitle: 'Cloud Atlas',
        bookAuthor: 'David Mitchell',
        id: 1
      },
      [2]:
      { 
        reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
        reviewAuthor: 'Floria Patrick Thomas II',
        dateTime: '2023-02-14',
        review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
        votes: 2,
        bookTitle: 'Cloud Atlas',
        bookAuthor: 'David Mitchell',
        id: 2
      }
    },
    voteOrder: [],
    }
  });
  
  test('should return default state if no action type is passed into reducer', () => {
    expect(voteOrderReducer({}, { type: null })).toEqual({});
  })


  test('should sort posts by most popular', () => {
    action = {
      type: c.SORT_BY_VOTES,
    }
    expect(voteOrderReducer(dummyState, action)).toEqual({
      // FIX TEST to expect voteOrder array, NOT obj of objs
      
      // let id1 = voteOrder[0]
      postList: {
        2: { 
          reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
          reviewAuthor: 'Floria Patrick Thomas II',
          dateTime: '2023-02-14',
          review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
          votes: 2,
          bookTitle: 'Cloud Atlas',
          bookAuthor: 'David Mitchell',
          id: 2
        },
        1: { 
          reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
          reviewAuthor: 'Gloria Patrick Thomas III',
          dateTime: '2023-02-14',
          review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
          votes: 0,
          bookTitle: 'Cloud Atlas',
          bookAuthor: 'David Mitchell',
          id: 1
        }},
      voteOrder: [
        { 
          reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
          reviewAuthor: 'Floria Patrick Thomas II',
          dateTime: '2023-02-14',
          review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
          votes: 2,
          bookTitle: 'Cloud Atlas',
          bookAuthor: 'David Mitchell',
          id: 2
        },
        { 
          reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
          reviewAuthor: 'Gloria Patrick Thomas III',
          dateTime: '2023-02-14',
          review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
          votes: 0,
          bookTitle: 'Cloud Atlas',
          bookAuthor: 'David Mitchell',
          id: 1
        }
      ],
    })
  })
})
