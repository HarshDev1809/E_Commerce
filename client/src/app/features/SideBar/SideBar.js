import { useState, useEffect } from "react";
import "./SideBar.css";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Label, LabelRounded } from "@mui/icons-material";

function SideBar({setShowSideBar}) {
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [maxSlider, setMaxSlider] = useState(10000);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [isRingChecked, setIsRingChecked] = useState(false);
  const [isBangleChecked, setIsBangleChecked] = useState(false);
  const [isEarringsChecked, setIsEarringsChecked] = useState(false);
  const [isEartopsChecked, setIsEartopsChecked] = useState(false);
  const [isPendantChecked, setIsPendantChecked] = useState(false);
  const [isNecklaceChecked, setIsNecklaceChecked] = useState(false);

  const [showMaterialFilter, setshowMaterialFilter] = useState(false);
  const [isGoldChecked, setIsGoldChecked] = useState(false);
  const [isSilverChecked, setIsSilverChecked] = useState(false);
  const [isBronzeChecked, setIsBronzeChecked] = useState(false);
  const [isMetalChecked, setIsMetalChecked] = useState(false);

  const [showOccasionFilter, setShowOccasionFilter] = useState(false);
    const [isCasualChecked, setIsCasualChecked] = useState(false);
    const [isFormalChecked, setIsFormalChecked] = useState(false);
    const [isDailyWearChecked, setIsDailyWearChecked] = useState(false);
    const [isWeddingChecked, setIsWeddingChecked] = useState(false);

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

  const toggleCategoryFilter = () => {
    setShowCategoryFilter(!showCategoryFilter);
  };

  const handleIsRingChecked = (e) => {
    setIsRingChecked(e.target.checked);
  };

  const handleIsBangleChecked = (e) => {
    setIsBangleChecked(e.target.checked);
  };

  const handleIsEarringsChecked = (e) => {
    setIsEarringsChecked(e.target.checked);
  };

  const handleIsEartopsChecked = (e) => {
    setIsEartopsChecked(e.target.checked);
  };

  const handleIsNecklaceChecked = (e) => {
    setIsNecklaceChecked(e.target.checked);
  };

  const handleIsPendantChecked = (e) => {
    setIsPendantChecked(e.target.checked);
    console.log(e.target.checked);
  };

  const toggleMaterialFilter = () => {
    setshowMaterialFilter(!showMaterialFilter);
  };

  const handleisGoldChecked = (e) =>{
    setIsGoldChecked(e.target.checked);
  }

  const handleisSilverChecked = (e)=>{
    setIsSilverChecked(e.target.checked)
  }

  const handleisBronzeChecked = (e)=>{
    setIsBronzeChecked(e.target.checked);
  }

  const handleisMetalChecked = (e)=>{
    setIsMetalChecked(e.target.checked)
  }

  const handleIsDailyWearChecked = (e) =>{
    setIsDailyWearChecked(e.target.checked);
  }

  const handleIsFormalChecked = (e) => {
    setIsFormalChecked(e.target.checked);
  }

  const handleIsCasualChecked = (e) => {
    setIsCasualChecked(e.target.checked);
  }

  const handleIsWeddingChecked = (e) => {
    setIsWeddingChecked(e.target.checked);
  }

  const toggleOccasionFilter = () =>{
    setShowOccasionFilter(!showOccasionFilter)
  }

  useEffect(()=>{

    return ()=>{
      document.body.classList.remove('modal-open');
    }
  })

  return (
    <div className="side-bar p-3 border-danger border">
      <div className="border justify-content-end close-btn">
        <button type="button"><span class="material-symbols-rounded" onClick={()=>{setShowSideBar(false)}}>
close
</span></button>
      </div>
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
            onClick={toggleCategoryFilter}
            className="w-100 side-bar-button d-flex align-items-center justify-content-between p-3"
          >
            Product Category
            <span
              className={`material-symbols-outlined arrow-icon h-100 ${
                showCategoryFilter ? "rotated" : ""
              }`}
            >
              keyboard_arrow_down
            </span>
          </button>
          {showCategoryFilter && (
            <div className="category-filter d-flex justify-content-center align-items-start flex-column gap-1 px-3 py-1">
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="ring"
                  checked={isRingChecked}
                  onChange={handleIsRingChecked}
                ></input>
                <label for="ring">ring</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="bangle"
                  checked={isBangleChecked}
                  onChange={handleIsBangleChecked}
                ></input>
                <label for="bangle">Bangle</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="necklace"
                  checked={isNecklaceChecked}
                  onChange={handleIsNecklaceChecked}
                ></input>
                <label for="necklace">Necklace</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="eartops"
                  checked={isEartopsChecked}
                  onChange={handleIsEartopsChecked}
                ></input>
                <label for="eartops">Eartops</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="earring"
                  checked={isEarringsChecked}
                  onChange={handleIsEarringsChecked}
                ></input>
                <label for="earring">Earring</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="pendant"
                  checked={isPendantChecked}
                  onChange={handleIsPendantChecked}
                ></input>
                <label for="pendant">pendant</label>
              </div>
            </div>
          )}
        </li>
        <li className="border-bottom">
          <button
            type="button"
            onClick={toggleMaterialFilter}
            className="w-100 side-bar-button d-flex align-items-center justify-content-between p-3"
          >
            Material
            <span
              className={`material-symbols-outlined arrow-icon h-100 ${
                showMaterialFilter ? "rotated" : ""
              }`}
            >
              keyboard_arrow_down
            </span>
          </button>
          {showMaterialFilter && (
            <div className="material-filter d-flex justify-content-center align-items-start flex-column gap-1 px-3 py-1">
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="gold"
                  checked={isGoldChecked}
                  onChange={handleisGoldChecked}
                ></input>
                <label for="gold-colour">Gold</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="silver"
                  checked={isSilverChecked}
                  onChange={handleisSilverChecked}
                ></input>
                <label for="silver">Silver</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="bronze"
                  checked={isBronzeChecked}
                  onChange={handleisBronzeChecked}
                ></input>
                <label for="bronze">Bronze</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="metal"
                  checked={isMetalChecked}
                  onChange={handleisMetalChecked}
                ></input>
                <label for="metal">Metal</label>
              </div>
            </div>
          )}
        </li>
        <li className="border-bottom">
          <button
            type="button"
            onClick={toggleOccasionFilter}
            className="w-100 side-bar-button d-flex align-items-center justify-content-between p-3"
          >
            Occasion
            <span
              className={`material-symbols-outlined arrow-icon h-100 ${
                showOccasionFilter ? "rotated" : ""
              }`}
            >
              keyboard_arrow_down
            </span>
          </button>
          {showOccasionFilter && (
            <div className="occasion-filter d-flex justify-content-center align-items-start flex-column gap-1 px-3 py-1">
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="wedding"
                  checked={isWeddingChecked}
                  onChange={handleIsWeddingChecked}
                ></input>
                <label for="weddig">Wedding</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="formal"
                  checked={isFormalChecked}
                  onChange={handleIsFormalChecked}
                ></input>
                <label for="formal">Formal</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="Casual"
                  checked={isCasualChecked}
                  onChange={handleIsCasualChecked}
                ></input>
                <label for="casual">Casual</label>
              </div>
              <div className="d-flex justify-content-star align-items-center gap-1 w-100">
                <input
                  type="checkbox"
                  id="daily-wear"
                  checked={isDailyWearChecked}
                  onChange={handleIsDailyWearChecked}
                ></input>
                <label for="daily-wear">Daily Wear</label>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
