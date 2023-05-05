import Footer from "@/Components/layouts/footer";
import Header from "@/Components/layouts/header";

export default function Layout1({ children }) {
    return (
        <>
            <div style={{textAlign: "center"}}>
                <Header></Header>
                <h1>Navigation</h1>
                <div style={{ display: "flex" }} className="head">
                    <div style={{ width: "250px", height: "100vh", background: "red" }}>slideBar</div>
                    <main style={{width: "calc(100% - 250px)"}}> {children} </main>
                </div>
                <Footer></Footer>
            </div>

        </>
    )
}