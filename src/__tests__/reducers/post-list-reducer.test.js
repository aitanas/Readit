import postListReducer from '../../reducers/post-list-reducer'

describe('postListReducer', () => {

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
    }
  });
  
  test('should return default state if no action type is passed into reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  })

  test('should add new review to reviewList', () => {
    const { reviewTitle, reviewAuthor, review, bookAuthor, bookTitle, votes, id, dateTime } = reviewData;
    action = {
      type: 'ADD_POST',
      reviewTitle: reviewTitle,
      reviewAuthor: reviewAuthor,
      review: review,
      bookTitle: bookTitle,
      bookAuthor: bookAuthor,
      dateTime: dateTime,
      votes: votes,
      id: 1
    }

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        reviewTitle: reviewTitle,
        reviewAuthor: reviewAuthor,
        review: review,
        bookTitle: bookTitle,
        bookAuthor: bookAuthor,
        dateTime: dateTime,
        votes: votes,
        id: 1
      }
    })
  })

  test('should increment votes by one', () => {
    action = {
      type: 'UP_VOTE',
      id: 1
    }

    expect(postListReducer(dummyState, action)).toEqual(
      {
        [1]:
        { 
          reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
          reviewAuthor: 'Gloria Patrick Thomas III',
          dateTime: '2023-02-14',
          review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
          votes: 1,
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
        })
      })

  test('should decrement votes by one', () => {
    action = {
      type: 'DOWN_VOTE',
      id: 2
    }

    expect(postListReducer(dummyState, action)).toEqual({
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
        votes: 1,
        bookTitle: 'Cloud Atlas',
        bookAuthor: 'David Mitchell',
        id: 2
      }
    });
  })

  // test('should sort posts by most popular', () => {
  //   action = {
  //     type: 'SORT_BY_VOTES',
  //   }
  //   expect(postListReducer(dummyState, action)).toEqual(
  //     [{ 
  //       reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
  //       reviewAuthor: 'Floria Patrick Thomas II',
  //       dateTime: '2023-02-14',
  //       review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
  //       votes: 2,
  //       bookTitle: 'Cloud Atlas',
  //       bookAuthor: 'David Mitchell',
  //       id: 2
  //     },
  //     { 
  //       reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
  //       reviewAuthor: 'Gloria Patrick Thomas III',
  //       dateTime: '2023-02-14',
  //       review: 'Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end.',
  //       votes: 0,
  //       bookTitle: 'Cloud Atlas',
  //       bookAuthor: 'David Mitchell',
  //       id: 1
  //     }]
  //   )
  // })
})
