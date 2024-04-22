import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ handleSeeMoreClick, isFetching }) {
  return <div className={css.loadMoreWrapper}>
    <button className={css.button} onClick={handleSeeMoreClick} disabled={isFetching}>See More</button>
  </div>;
}

export default LoadMoreBtn;