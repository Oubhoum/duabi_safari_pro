import "./footer.css";


const SelectBox = ({items, lable}) => {
    return ( 

        <div className="footer-item select-box-item">

            <div className="select-box">
                <label className="select-box-label">{lable}</label>
                <select className="select-box-input">
                    {items.map(item => <option key={item.id}>{item.value}</option>)}
                </select>
            </div>


        </div>

    );
}

export default SelectBox;