import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from "./Home.module.css";
import Carrousel from '../../components/Carrousel/Carrousel';
import About from '../../components/AboutUs/About';
import Services from '../../components/Services/Services';
import Method from '../../components/Method/Method';
import Reviews from '../../components/Reviews/Reviews';
import MapComponent from '../../components/Maps/MapComponent';
import Footer from '../../components/Footer/Footer';

const Home = () => {

    const [isLogged, setIsLogged] = useState(false)


    const userLoggedState = useSelector((state) => state.user.user);

    useEffect(() => {

        if (userLoggedState) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [userLoggedState])

    return (
        <>
        <Carrousel></Carrousel>
        <About></About>
        <Services></Services>
        <Method></Method>
        <Reviews></Reviews>
        <MapComponent></MapComponent>
        <Footer></Footer>
        </>
    )
}
export default Home; 
