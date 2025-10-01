import React, { useEffect, useRef } from 'react'
import pdf from "../pdf/Resume.pdf"
import hero from "./data/hero.json"
import Typed from 'typed.js'

const Home = () => {
    const typedRef = useRef(null);
    useEffect(() => {
        const option = {
            strings: ["Well Come To My Profile ,",
                "My Name Is Muhammad Aslan ,",
                "I'm MERN Stack Developer (React Js)."

            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
        const typed = new Typed(typedRef.current, option);

        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <>
            <div className="container home" id='home'>
                <div className="left" data-aos="fade-right"
                    data-aos-duration="1000">
                    <h1 ref={typedRef}> </h1>
                    <a
                        href={pdf}
                        download="Muhammad Aslan Cv.pdf"
                        className="btn btn-outline-warning my-3"
                    >
                        Download Resume
                    </a>

                </div>
                <div className="right" data-aos="fade-left"
                    data-aos-duration="1000">
                    <div className="img">
                        <img src={`${hero.imgSrc}`} alt="" width="50px" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
