import "./footer.css";

import FooterIcon from "./footer_icon";



const WorkWithUs = () => {
    return ( 
        <div className="footer-item">
            <h3 className="footer-item-title">Work With Us</h3>
            <ul className="footer-item-list">

                <li className="footer-item-link">Become a Supplier</li>
                <li className="footer-item-link">Become an Affiliate Partner</li>

            </ul>

            <FooterIcon/>

        </div>

    );
}

export default WorkWithUs;