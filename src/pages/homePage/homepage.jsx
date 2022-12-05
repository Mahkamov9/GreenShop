import Article from "../../componenets/article/article";
import Aside from "../../componenets/aside/aside";
import Header from "../../componenets/header/header";
import Navbar from "../../componenets/navbar/navbar";
import "./homepage.css";



const HomePage = () =>{
    return(
        <>
        <Navbar/>
        <Header/>
        <Aside/>
        <Article/>
        </>
    )
}


export default HomePage;