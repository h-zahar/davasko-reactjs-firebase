import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import './Home.css';

const Home = () => {
    const {isLoading} = useAuth();
    if (isLoading)
    {
        return <div className="d-flex justify-content-center mt-4"><Spinner animation="border" /></div>
    }

    return (
        <div className="bg-home">
            <Banner />
            <Offerings />
            <About />
            <Faq />
        </div>
    )
}

export default Home;