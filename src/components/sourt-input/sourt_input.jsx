import "./sourt_input.css";


const SourtInput = ({setSourtItem, toursLength, sourtItem}) => {
    return ( 
        <div className="sort-input-container">
            <div className="available-tours">
                {toursLength} tours found <i className="bi bi-info-circle"></i>
            </div>
            <select onChange={(e) => setSourtItem(e.target.value)} value={sourtItem}>
                <option value="recomended">Recomended</option>
                <option value="low">Price - Low to high</option>
                <option value="high">Price - High to low</option>
            </select>
        </div>
    );
}

export default SourtInput;