import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"


function ErrorPage() {
    return <>
    <Header />
    <main >
        <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1>404 Not found</h1>
        <p>Please Go back to home</p>
        <Link to="/"><button >Home</button></Link>
        </div>
    </main>
    <Footer />
    </>
    
}

export default ErrorPage;