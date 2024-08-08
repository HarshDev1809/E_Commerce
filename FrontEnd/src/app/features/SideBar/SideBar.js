import { useState } from "react";
import "./SideBar.css";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Label, LabelRounded } from "@mui/icons-material";

function SideBar() {
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [maxSlider, setMaxSlider] = useState(10000);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);

  const [value2, setValue2] = useState([0, 10000]);

  const minDistance = 1;

  function valuetext(value) {
    console.log(value);
    return `${value}°C`;
  }

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
        setMaxPrice(clamped + minDistance);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
        setMinPrice(clamped - minDistance);
      }
    } else {
      setValue2(newValue);
      setMinPrice(newValue[0]);
      setMaxPrice(newValue[1]);
    }
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    setValue2([e.target.value, maxPrice]);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    setValue2([minPrice, e.target.value]);
  };

  const togglePriceFilter = () => {
    setShowPriceFilter(!showPriceFilter);
  };

  const toggleCategoryrFilter = () => {
    setShowCategoryFilter(!showCategoryFilter);
  }

  return (
    <div className="side-bar p-3">
      <ul>
        <li className="border-bottom">
          <button
            type="button"
            onClick={togglePriceFilter}
            className="w-100 side-bar-button d-flex align-items-center justify-content-between p-3"
          >
            Price
            {/* <span className="material-symbols-outlined arrow-icon h-100">keyboard_arrow_down</span> */}
            <span
              className={`material-symbols-outlined arrow-icon h-100 ${
                showPriceFilter ? "rotated" : ""
              }`}
            >
              keyboard_arrow_down
            </span>
          </button>

          {showPriceFilter && (
            <div className="price-filter">
              <div className="item-1 p-2 d-flex justify-content-center align-items-center">
                <TextField
                  id="standard-basic"
                  label="Minimum"
                  variant="standard"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                />
                {/* <span class="material-symbols-outlined">currency_rupee</span>
                <input
                  type="number"
                  className="price-input"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  placeholder="Min Value"
                ></input> */}
              </div>
              <div className="item-2 p-2 d-flex justify-content-center align-items-center">
                <TextField
                  id="standard-basic"
                  label="Maximum"
                  variant="standard"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="item-3 p-2 d-flex justify-content-center align-items-center">
                <Slider
                  getAriaLabel={() => "Minimum distance shift"}
                  value={value2}
                  onChange={handleChange2}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                  min={0}
                  max={10000}
                  className="w-75 d-flex justify-content-center align"
                />
              </div>
            </div>
          )}
        </li>
        <li className="border-bottom">
        <button
            type="button"
            onClick={toggleCategoryrFilter}
            className="w-100 side-bar-button d-flex align-items-center justify-content-between p-3"
          >
            Product Category
            <span
              className={`material-symbols-outlined arrow-icon h-100 ${
                showPriceFilter ? "rotated" : ""
              }`}
            >
              keyboard_arrow_down
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
