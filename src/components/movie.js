import PropTypes from "prop-types";
import {Link} from "react-router-dom";//Link를 임포트해오기
import styles from "./Movie.module.css";
function Movie({id, coverImg, title, summary, genres}) {
    return ( 
    <div>
    <img className={styles.movie_img} src={coverImg} alt = {title}/>
    <h2 className = {styles.movie_title}>
        <Link to={`/movie/${id}`}>{title}
        </Link>
    </h2>
    <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
    <div className= {styles.genre}>
        <ul className={styles.ul}>
            {genres.map((m) => (
                <li className={styles.li} key={m}>
                    {m}
                </li>
            ))}
        </ul>
    </div>
    </div> );
};
//Movie컴포넌트 요소들의 자료형을 결정해준다
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
//Movie컴포넌트가 App4 컴포넌트로부터 받아온다.

export default Movie;