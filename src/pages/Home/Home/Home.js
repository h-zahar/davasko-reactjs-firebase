import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import './Home.css';
import { useState } from 'react';

const Home = () => {
    const [isLoadState, setIsLoadState] = useState(true);

    return (
        <div className="bg-home">
            {
                !isLoadState &&
                <Banner />
            }

            <Offerings setIsLoadState={setIsLoadState} />

            {
                !isLoadState &&
                <About />
            }

            {
                !isLoadState &&
                <Faq />
            }

        </div>
    )
}

export default Home;