import { v4 } from 'uuid';
import { formatDistanceToNow } from 'date-fns';

const id1 = v4();
const id2 = v4();

const Reviews = {
  postList: {
    [id1]: { 
      reviewTitle: "Cloud Atlas by David Mitchell: A Masterful Blend of Compelling Storytelling and Philosophical Musings",
      reviewAuthor: 'Gloria Patrick Thomas III',
      dateTime: formatDistanceToNow(new Date(2014, 6, 2), {addSuffix: true}),
      review: 
        "Cloud Atlas by David Mitchell is a true masterpiece that left me captivated from beginning to end. This book is a rare gem that skillfully blends six different narratives across different time periods and genres, all woven together in a mesmerizing and intricate pattern. The writing style is simply stunning.David Mitchell has a unique talent for creating vivid and compelling characters, each with their own voice and perspective.The language is rich and poetic, and I found myself completely immersed in each of the different worlds he created. One of the things that impressed me the most about this book is how seamlessly it flows between the different storylines.Despite the vast differences in time and place, Mitchell has masterfully woven together a narrative that feels cohesive and interconnected. In addition to the beautiful prose and intricate storytelling, Cloud Atlas also explores deep themes such as the cyclical nature of history, the impact of our actions on future generations, and the concept of reincarnation.These philosophical musings are seamlessly woven into the narrative, and add an extra layer of depth to an already complex and engaging story. Overall, Cloud Atlas is a truly remarkable work of literature that I would highly recommend to anyone.David Mitchell's skillful storytelling and beautiful prose make for an unforgettable reading experience that will stay with you long after you turn the final page.",
      votes: 0,
      bookTitle: 'Cloud Atlas',
      bookAuthor: 'David Mitchell',
      id: id1
    },
    [id2]: { 
      reviewTitle: '"Fire & Blood by George R.R. Martin: A Rich and Immersive History of the Targaryen Dynasty"',
        reviewAuthor: 'Gloria Patrick Thomas III',
        dateTime: formatDistanceToNow(new Date(2018, 12, 13), {addSuffix: true}),
        review: 
          '"Fire & Blood" by George R.R. Martin is an epic and engaging read for anyone who loves the world of Westeros. This book provides a detailed history of the Targaryen dynasty, starting with Aegon the Conquerors conquest of the Seven Kingdoms and ending with the reign of Aegon III. The writing style is engaging, and the book reads like a work of historical non-fiction. Martin has a talent for creating compelling characters, and his descriptions of the Targaryen kings and queens are no exception. The characters are complex and fully realized, with motivations that are both understandable and relatable. One of the things that stood out to me in this book is the amount of detail and depth that Martin has put into the world-building. The history of the Targaryen dynasty is interwoven with the history of Westeros itself, and the result is a rich and immersive world that feels incredibly real. The book is not without its flaws, however. The sheer amount of information and detail can be overwhelming at times, and it can be difficult to keep track of all of the characters and their various relationships. Additionally, the book is quite long, and it can be a bit of a slog to get through at times. Overall, "Fire & Blood" is a must-read for fans of the "A Song of Ice and Fire" series. It provides a rich and detailed history of one of the most important families in Westeros, and the characters and world-building are just as compelling as in the main series. While it can be a bit dense at times, the book is ultimately a rewarding read for anyone who loves the world of Westeros.',
        votes: 0,
        bookTitle: 'Fire & Blood',
        bookAuthor: 'George R.R. Martin',
        id: id2
    }
  },
  voteOrder: []
}

export default Reviews;