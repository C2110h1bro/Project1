import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";

function MasterLayout({ Page }) {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <SideBar />
                    </div>
                    <div className="col-lg-9">
                        {Page}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default MasterLayout;