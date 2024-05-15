import Banner from "./Banner";
import { Helmet } from "react-helmet-async";


const Home = () => {
    
    return (
       <div>
        <Helmet>
            <title>
                Home
            </title>
        </Helmet>
        <Banner></Banner>
       </div>
    );
};

export default Home;