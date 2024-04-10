import Navbar from "../components/Navbar";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1 className={styles.h1Home}> Home </h1>
        </div>
    )
}
export default Home; 
