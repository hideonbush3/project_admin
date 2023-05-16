import React from "react";
import "./Footer_2.css"
import {FaFacebookSquare, FaInstagramSquare, FaSnapchatGhost, FaTwitter} from "react-icons/fa";

export default function Footer_2(){
    return(
        <footer className="frontFooter_2">

            <div className="frontFooter_2Social">
                <a href="#"><FaInstagramSquare /></a>
                <a href="#"><FaSnapchatGhost /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaFacebookSquare /></a>
            </div>

            <ul className="frontFooter_2List">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
            <p className="frontFooter_2Copyright">
                TJ Coders @ 2023
            </p>
        </footer>
    );
}