import React from "react";

const Footer = () => {
    
    const currentDate = new Date();

    return (
<div >
    <footer>
        <hr className="color-black" />
    <h5 className = "flex justify-center m-10">© Copyright 2023-{currentDate.getFullYear()}, One seven - space for children </h5>
    </footer>
    </div>
    );
};

export default Footer;