import { useEffect } from 'react';
import {useParams} from "react-router-dom";

//id가 뭔질 알기위해 useParams함수를 쓴다
function Detail() {
    const { id } = useParams()//url에 id를 넘겨주는 역할
    const getMovie = async() => {
        const json = await( await
        fetch(`https:yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>
}

export default Detail;