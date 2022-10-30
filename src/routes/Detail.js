import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import DetailMovie from "../components/detailMovies";

function Detail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] =useState([])
    useEffect(() => {
        const getDetail = async () => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
        };
        getDetail();
        }, [id]);
    return ( 
    <div>
    {loading ? <h1>loading...</h1> : 
    <DetailMovie
        id={detail.id}
        sTitle={detail.title}
        title={detail.title_long}
        backImg={detail.medium_cover_image}
        rating={detail.rating}
        runtime={detail.runtime}
        genres={detail.geners}
    />}
</div>
);
}

export default Detail;