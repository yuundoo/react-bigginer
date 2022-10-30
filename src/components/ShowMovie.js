import {Link} from "react-router-dom"

function ShowMovie({id, medium_cover_image, title, summary, genres }){
    return  <div>
    <img src={medium_cover_image} alt={title}></img>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>      
      </h2>
    <p>{summary}</p>
    <ul>
    {genres && genres.map(g => <li key={g}>{g}</li>)}
    </ul>
    </div>;

}



export default ShowMovie;