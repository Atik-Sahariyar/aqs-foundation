import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import ShopSingle from '../../components/shopsingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ShopSinglePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Shop Single'} pagesub={'Shop'}/> 
            <ShopSingle/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopSinglePage;
