import * as actions from './../../actions'

describe('readit actions', () => {

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

  it('addPost should create ADD_POST action', () => {
  const { reviewTitle, reviewAuthor, review, bookAuthor, bookTitle, votes, id, dateTime } = reviewData;
    expect(actions.addPost(reviewData)).toEqual({
      type: 'ADD_POST',
      reviewTitle: reviewTitle,
      reviewAuthor: reviewAuthor,
      review: review,
      bookTitle: bookTitle,
      bookAuthor: bookAuthor,
      dateTime: dateTime,
      votes: votes,
      id: 1
      })
    })

  it('upvote should create UP_VOTE action', () => {
    expect(actions.upvote(1)).toEqual({
      type: 'UP_VOTE',
      id: 1
    })
  })

  
  })

// ADD_POST
// UP_VOTE
// DOWN_VOTE
// SORT_BY_VOTES