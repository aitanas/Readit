import * as actions from './../../actions'
import * as c from './../../actions/ActionTypes'

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
      type: c.ADD_POST,
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
      type: c.UP_VOTE,
      id: 1
    })
  })

  it('downvote should create DOWN_VOTE action', () => {
    expect(actions.downvote(2)).toEqual({
      type: c.DOWN_VOTE,
      id: 2
    })
  })

  it('sortByVotes should create SORT_BY_VOTES action', () => {
    expect(actions.sortByVote()).toEqual({
      type: c.SORT_BY_VOTES
    })
  })
  })

// ADD_POST
// UP_VOTE
// DOWN_VOTE
// SORT_BY_VOTES