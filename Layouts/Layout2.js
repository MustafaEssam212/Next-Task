import Footer from "@/Components/layouts/footer";
import Header from "@/Components/layouts/header";

export default function Layout2({ children }) {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <Header></Header>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "250px", height: "100vh", background: "#000" }}>Left pane</div>
                    <div style={{ width: "calc(100% - 500px)", background: "#f0f8ff", display: "grid", alignItems: "center" }}>
                        <p style={{height: "20vh", background: "yellow"}}>pre-body</p>
                        <main>{children}</main>
                        <p style={{height: "20vh", background: "yellow"}}>pre-body</p>
                    </div>
                    <div style={{ width: "250px", height: "100vh", background: "#000" }}>right pane</div>
                </div>
                <Footer></Footer>
            </div>

        </>
    )
}