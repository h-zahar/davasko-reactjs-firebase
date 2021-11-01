import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
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
        </div>
    )
}

export default Home;