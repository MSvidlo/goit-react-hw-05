import css from './MovieReviewsList.module.css';

function MovieReviewsList({ review: { id, author, content, created_at: reviewDate } }) {
  const dateForUser = new Date(reviewDate);
  return <li className={css.listItem} key={id}>
    <h2>{author}</h2>
    <span>{`Posted on: ${dateForUser.getDay()}/${dateForUser.getMonth()}/${dateForUser.getFullYear()}`}</span>
    <p className={css.reviewContent}>{content}</p>
  </li>
    ;
}

export default MovieReviewsList;