import { useState } from "react";
import "./SortMenu.css"

function SortMenu() {

    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };

  return (
    <div className="sort-menu w-25">
      <select className="form-select" aria-label="Default select example" value={selectedOption} onChange={handleSelectChange}>
        <option value="" selected>Featured</option>
        <option value="alpabetical_asc">Alphabetically, A-Z</option>
        <option value="alpabetical_desc">Alphabetically, Z-A</option>
        <option value="price_asc">Price, Low to High</option>
        <option value="price_desc">Price, high to low</option>
      </select>
    </div>
  );
}

export default SortMenu;
