import {useEffect, useState } from 'react';
import Movie from "../components/movie";
//movie 컴포넌트로 보내기위해 임포트하는거임
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovie] = useState([]);
    const getMovies = async() => {//async()로 만들거임 fetch를 통해 데이터를 받아오는것
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
        const json = await response.json();//response에 있는 json을 가져옴
        setMovie(json.data.movies);
        setLoading(false);//then말고 이렇게하는 방법도 있음
    };
    useEffect(() => {
        getMovies();//한번만 실행할거야: 영화데이터들을 가져오는것
    }, []);
    
    return (//자식컴포넌트에게 넘겨줄때 이름은 coverImg처럼 무작위로 지어주어도됌 
    <div>
        {loading ? (<h1>Loading...</h1>) : 
        (<div>{movies.map((movie) =>  <Movie 
        key = {movie.id} 
        id = {movie.id}//id를 넘겨주고 movie에서 경로로 써먹기
        coverImg={movie.medium_cover_image} 
        title={movie.title} 
        summary={movie.summary} 
        genres = {movie.genres} />)} 
        </div>)
    }
    </div>
    )//movie.js에 props를 보내며 실행은 movie.js에서 하는것
}

export default Home;