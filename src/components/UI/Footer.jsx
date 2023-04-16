import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark fixed-bottom text-center text-white">
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2022 Copyright:
                <a className="text-white" href="https://github.com/IvanCherepanov/JavaSpringCourseWork" >
                    Черепанов Иван Владимирович ИКБО-01-20, 2022
                </a>
            </div>
        </footer>
    );
};

export default Footer;