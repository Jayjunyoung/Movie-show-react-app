import { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";

//id가 뭔질 알기위해 useParams함수를 쓴다
function Detail() {
    const { id } = useParams()//url에 있는 값을 반환해주는 함수(:id)
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovie = async() => {
        const json = await( await
        fetch(`https:yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(() => json.data.movie);//json데이터를 movie state에 등록
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []); 

    console.log(movie);

    return (
        
        <div>
            {loading ? "Loading" : 
            (
                <div className = {styles.movie_detail}>
                    <div className= {styles.detail_left}>
                        <img className = {styles.detail_img} src = {movie.background_image} alt = "background"/>
                        <h2 className= {styles.title}>{movie.title_long}</h2>
                    </div>
                    <div className= {styles.detail_right}>
                        <h3>평점: {movie.rating}</h3>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail;