import { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import useFetch from "../../../hooks/useFetch";

const Popular = () => {
    const [endpoint] = useState("movie");

    const { data, loading } = useFetch(`/movie/upcoming`);

   

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Recent Release Movies</span>
            </ContentWrapper>
            <Carousel 
                data={data?.results} 
                loading={loading}
                endpoint={endpoint} />
        </div>
    );
};

export default Popular;