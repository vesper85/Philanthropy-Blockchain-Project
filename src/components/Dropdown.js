import React from 'react'

function Dropdown() {
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item active" href="#">Andhra Pradesh</a></li>
                    <li><a className="dropdown-item" href="#">Arunachal Pradesh</a></li>
                    <li><a className="dropdown-item" href="#">Assam</a></li>
                    <li><a className="dropdown-item" href="#">Bihar</a></li>
                    <li><a className="dropdown-item" href="#">Chhattisgarh</a></li>
                    <li><a className="dropdown-item" href="#">Goa</a></li>
                    <li><a className="dropdown-item" href="#">Gujarat</a></li>
                    <li><a className="dropdown-item" href="#">Haryana</a></li>
                    <li><a className="dropdown-item" href="#">Himachal Pradesh</a></li>
                    <li><a className="dropdown-item" href="#">Jammu and Kashmir</a></li>
                    <li><a className="dropdown-item" href="#">Jharkhand</a></li>
                    <li><a className="dropdown-item" href="#">Karnataka</a></li>
                    <li><a className="dropdown-item" href="#">Kerala</a></li>
                    <li><a className="dropdown-item" href="#">Madhya Pradesh</a></li>
                    <li><a className="dropdown-item" href="#">Maharashtra</a></li>
                    <li><a className="dropdown-item" href="#">Manipur</a></li>
                    <li><a className="dropdown-item" href="#">Meghalaya</a></li>
                    <li><a className="dropdown-item" href="#">Mizoram</a></li>
                    <li><a className="dropdown-item" href="#">Nagaland</a></li>
                    <li><a className="dropdown-item" href="#">Odisha</a></li>
                    <li><a className="dropdown-item" href="#">Punja</a></li>
                    <li><a className="dropdown-item" href="#">Rajasthan</a></li>
                    <li><a className="dropdown-item" href="#">Sikkim</a></li>
                    <li><a className="dropdown-item" href="#">Tamil Nadu</a></li>
                    <li><a className="dropdown-item" href="#">Telangana</a></li>
                    <li><a className="dropdown-item" href="#">Tripura </a></li>
                    <li><a className="dropdown-item" href="#">Uttar Pradesh</a></li>
                    <li><a className="dropdown-item" href="#">Uttarakhand</a></li>
                    <li><a className="dropdown-item" href="#">West Bengal</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown
