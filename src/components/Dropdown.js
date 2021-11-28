import React from 'react'

function Dropdown(props) {
    const {mapFilter, setmapFilter} = props;
    const handleOnClick = (e)=>{
       setmapFilter(e.target.textContent);
       console.log(mapFilter);
    }
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" onClick={handleOnClick} id="dropDownStateList" aria-labelledby="dropdownMenuButton2">
                    <li>Andhra Pradesh</li>
                    <li>Arunachal Pradesh</li>
                    <li>Assam</li>
                    <li>Bihar</li>
                    <li>Chhattisgarh</li>
                    <li>Goa</li>
                    <li>Gujarat</li>
                    <li>Haryana</li>
                    <li>Himachal Pradesh</li>
                    <li>Jammu and Kashmir</li>
                    <li>Jharkhand</li>
                    <li>Karnataka</li>
                    <li>Kerala</li>
                    <li>Madhya Pradesh</li>
                    <li>Maharashtra</li>
                    <li>Manipur</li>
                    <li>Meghalaya</li>
                    <li>Mizoram</li>
                    <li>Nagaland</li>
                    <li>Odisha</li>
                    <li>Punja</li>
                    <li>Rajasthan</li>
                    <li>Sikkim</li>
                    <li>Tamil Nadu</li>
                    <li>Telangana</li>
                    <li>Tripura </li>
                    <li>Uttar Pradesh</li>
                    <li>Uttarakhand</li>
                    <li>West Bengal</li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown
