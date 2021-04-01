import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import logo from "../assets/images/logo.svg";
import { titleChess, titleHome, titleLeague, titleString } from "../utils/constant";


const Home = () => {
    return (
        <div className="home">
            <header className="screen home__header">
                <h1 className="home__title">{titleHome}</h1>
                <img className="home__logo" src={logo}  alt="logo" />
                <Button className="home__btn m-2" tag={Link} to="/problem-1" >{titleLeague}</Button>
                <Button className="home__btn m-2" tag={Link} to="/problem-2" >{titleChess}</Button>
                <Button className="home__btn m-2" tag={Link} to="/problem-3" >{titleString}</Button>
            </header>
        </div>
    );
};

export default Home;
