import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    return (
        <>
            <Header setCurrentPage={setCurrentPage}/>
            <Content currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Footer />
        </>
    );
}

export default App;
