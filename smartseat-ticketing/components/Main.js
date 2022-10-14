import Footer from "./Footer";
import Header from "./Header";
import ToolBar from "./toolbar";

export default function Main({children}){
    return (
        <>
        <Header></Header>
        <main className="dark-scheme" style={{backgroundColor: "black"}}>
        <div id="wrapper">
        {/* <!-- header begin --> */}
        <ToolBar></ToolBar>
        {/* <!-- header close -->
        <!-- content begin --> */}
        {/* <TransparentHeader></TransparentHeader> */}
        <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        {children}
        </div>
        {/* <!-- content close --> */}
        </div>
        <a href="#" id="back-to-top" style={{backgroundColor: "#18D8B3"}}></a>
        <Footer></Footer>
        </main>
        </>
    )
}