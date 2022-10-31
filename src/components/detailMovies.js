
function DetailMovie ({id, sTitle, title, backImg, rating, runtime, geners}){
    return (
        <div id={id}>
            <img src={backImg} alt={sTitle} />
            <h2>{title}</h2>
            <p>Rate : {rating}</p>
            <p>Running Time : {runtime} Minutes</p>
            <p>Tag</p>
            <ul>
                {geners && geners.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div>
    )
}

export default DetailMovie;