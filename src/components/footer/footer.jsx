import { currencies, languages } from "../../data";
import Company from "./company";
import "./footer.css";
import SelectBox from "./select_box";
import Support from "./support";
import WorkWithUs from "./work_with_us";




const Footer = () => {
    return ( 
        <>
        <footer className="footer">

            <SelectBox items={languages} lable="Languages"/>
            <SelectBox items={currencies} lable="Currencies"/>

            <Support/>

            <Company/>

            <WorkWithUs/>

        </footer>

            <div className="footer-copy-right">
                Copyright &copy; 2024 Dubai Safari
            </div>
        </>
    );
}

export default Footer;