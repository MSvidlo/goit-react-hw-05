import css from './MovieSearchForm.module.css'

const MovieSearchForm = ({ handleSearchChange }) => {
  function handleSubmit(e) {
    e.preventDefault();
    handleSearchChange(e.target.elements.movieSearch.value);
    e.target.reset();
  }
    return <form action="" onSubmit={handleSubmit} className={css.form}>
    <input type="text" name="movieSearch" placeholder="Search movies" className={css.input} />
    <button type="submit" className={css.button}>Search</button>
  </form>;

}
export default MovieSearchForm;