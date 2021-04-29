import React from 'react'
import "./SubHeader.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const SubHeader = () => {
    return (
        <div className="subheader">

            <div className="subheader1">
                <span>Electronics</span>
                <ExpandMoreIcon />
                </div>
                <div className="subheader2">
                <span>TV & Appliances</span>
                <ExpandMoreIcon />
                </div>
                <div className="subheader3">
                <span>Men</span>
                <ExpandMoreIcon />
                </div>
                <div className="subheader4">
                <span>Women</span>
                <ExpandMoreIcon />
                </div>
                <div className="subheader5">
                <span>Baby & Kids</span>
                <ExpandMoreIcon />
                </div>
                <div className="subheader6">
                <span>Home & Furniture</span>
                <ExpandMoreIcon />
                </div>
                <div className="subheader7">
                <span>Sports, Books & More</span>
                <ExpandMoreIcon />
                </div>
                
            
                <div className="subheader8">
                    <p>Flights</p>
                    </div>
                    <div className="subheader9">
                    <p>Offers</p>
                    </div>
                </div>

            

        
    );
}

export default SubHeader