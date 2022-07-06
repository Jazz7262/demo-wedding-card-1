import React from "react";
import "./styles/Slide.css";

function Slide() {
    return (
        <section id="slide">
            <div
                className="slide-wrapper"
                data-aos="fade-up"
                data-aos-offset="300"
            >
                <div className="img-container">
                    <img src="./assets/images/heart-bg.png" alt="heart-bg" />
                </div>
                <div className="text-content">
                    <h3>ہم اپنے بیٹے کی شادی کا انتظام کر رہے ہیں۔</h3>
                    <h1>ہماری تاریخ کو محفوظ کریں۔</h1>
                    <p> مئی 28، 2022۔</p>
                </div>
            </div>
        </section>
    );
}

export default Slide;
