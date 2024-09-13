import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";

function NetflixSeries() {
    return (
        <>
            <ul className="grid grid-three--cols">
                {
                    seriesData.map((curEle) => {
                        return (
                            <SeriesCard curEle={curEle} />
                        )

                    })
                }



            </ul>


        </>
    )
}
// in the COmponents , we can only time used the default export but we can used as many named Export;

export default NetflixSeries;

