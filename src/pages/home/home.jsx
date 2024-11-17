import Pagination from '../../components/pagination/pagination';
import HeroHeader from '../../components/hero_header/HeroHeader';
import TourList from '../../components/tours/TourList';
import Services from '../../services/sevices';
import Banner from '../../components/banner/banner';
import NewsLetter from '../../components/news-letter/news_letter';
import SourtInput from '../../components/sourt-input/sourt_input';
import { toursList } from "../../data.js";
import pagination from '../../utils/pagination.js';
import { useState } from 'react';





const Home = () => {



    const [currentPage, setCurrentPage] = useState(2);
    const [sourtItem, setSourtItem] = useState("recomended");



  // Sourt Tour
    const sorttedTourList = 
    sourtItem === "low"
    ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
    : sourtItem === "high" ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
    : toursList.sort((a, b) => b.rating - a.rating);

    const {pages, orderedTourList} = pagination(toursList.length, sorttedTourList, currentPage);


    return ( <div >


        <HeroHeader/>
        <Services/>
        <SourtInput
        sourtItem={sourtItem}
        setSourtItem={setSourtItem}
        toursLength={toursList.length}/>

        <TourList toursList={orderedTourList}/>

        <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>

        <Banner/>
        <NewsLetter/>


    </div> );
}

export default Home ;