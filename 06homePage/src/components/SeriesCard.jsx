export const SeriesCard = (props) => {
    // object destructure 
    const { img_url, name, rating, description, genre, cast, watch_url } = props.curEle

    const btn_styel = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontsize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--btn-color)",
        fontWeight : 700 ,
        cursor : "pointer",

    }

    const ratingClass = rating >= 8.5 ? " super_hit" : "average";
    return (
        <li className="card">
            <div>
                <img src={img_url} alt="" width="40%" height="40%" />
            </div>
            <div className="card-content">
                <h2>Name : {name}</h2>

                <h3>Rating : <span
                    className= {`rating ${ratingClass}`}> {rating}</span>

            </h3>

            <p >Summary :{description}</p>

            <h4 >Genre : {genre}</h4>
            <p >Cast : {cast}</p>
            <a href={watch_url} target="_blank" >

                <button style={btn_styel}>Watch Now</button>
            </a>
        </div>

        </li >
    )

}