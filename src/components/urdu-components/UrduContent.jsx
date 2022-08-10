import React from "react";
import "./styles/UrduContent.css";

function UrduContent() {
    return (
        <section id="urdu-content">
            <div className="urdu-content-wrapper">
                <h4>!مکرمی سلام مسنون</h4>
                <h5>
                    <sub>B.Tech.</sub>
                    {"\u00A0"}
                    {"\u00A0"}الحمدالله ہمارے بیٹے با عزیز{" "}
                    <strong>
                        {"\u00A0"} {"\u00A0"}ٹی ۪ محمد ضیا{" "}
                    </strong>
                    سلمه {"  "}
                </h5>
                <h5>
                    Pvt. Ltd.
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"} پیشہ: سافٹ ویئر انجینئر ٹریانز
                </h5>

                <h5>
                    پوتا جناب ٹی ۪ غوث محی الدین صاحب مرحوم ۔ نواسا جناب بشیر
                    احمد صاحب مرحوم
                </h5>

                <h4>کاعقدسعید</h4>

                <h5>
                    <strong> جسرہ فاطمہ </strong>،{"\u00A0"} {"\u00A0"}{" "}
                    <sub>عالیما</sub>
                    <br />
                    سلمها وقدرہا
                </h5>

                <h5>
                    دختر نیک: جناب الحاج محمد حمزہ صاحب ۔ پوتی: جناب الحاج عبدر
                    رحمن صاحب مرحوم
                </h5>
            </div>
        </section>
    );
}

export default UrduContent;
