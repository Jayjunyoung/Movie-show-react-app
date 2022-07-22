import PropTypes from "prop-types";
import {Link} from "react-router-dom";//Link를 임포트해오기
function Movie({id, coverImg, title, summary, genres}) {
    return ( <div>
    <img src={coverImg} alt = {title}/>
    <h2>
        <Link to={`/movie/${id}`}>{title}
        </Link>
    </h2>
    <p>{summary}</p>
    <ul>
        {genres.map((m) => (
            <li key={m}>
                {m}
            </li>
        ))}
    </ul>
    </div> )
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