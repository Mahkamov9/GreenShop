import Article from "../../componenets/article/article";
import Aside from "../../componenets/aside/aside";
import Footer from "../../componenets/footer/footer";
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
        <Footer/>
        </>
    )
}


export default HomePage;