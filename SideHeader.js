import React from 'react'
import "./SideHeader.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import realme1 from './images/realme1.jpg';
import FavoriteIcon from '@material-ui/icons/Favorite';



const SideHeader = () => {
    return (

        <div className="bigcontainer">

            <div className="sidegrid">
                <div className="sideheader1">
                    <h2><b>Filters</b></h2>
                </div>

                <div className="sideheader2">
                    CATEGORIES
    </div>

                <div className="sideheader3">
                    <ArrowBackIosIcon />
                    <span style={{ color: "grey" }}>Mobiles and Accessories</span>
                </div>

                <div className="sideheader4">
                    <b>Mobiles</b>
                </div>

                <div className="sideheader5">
                    <b>PRICE:</b>
                </div>

                <div className="sideheader6">
                    <button>Min <ArrowDropDownIcon /> </button> to
    <button>$50,000<ArrowDropDownIcon />  </button>
                </div>

                <div className="sideheader7">
                    <b>RAM</b>
                </div>

                <div className="sideheader8">
                    <CheckBoxOutlineBlankIcon />6 GB & Above<br />
                    <CheckBoxOutlineBlankIcon />4 GB<br />
                    <CheckBoxOutlineBlankIcon />3 GB<br />
                    <CheckBoxOutlineBlankIcon />2 GB<br />
                    <CheckBoxOutlineBlankIcon />1 GB<br />
                    <CheckBoxOutlineBlankIcon />512 MB - 1 GB<br />
                    <CheckBoxOutlineBlankIcon />Less than 512 MB
    </div>

                <div className="sideheader9">
                    <b>BRAND</b>
                </div>

                <div className="sideheader10">
                    <SearchIcon />
                    <input placeholder="Search Brand" type="text" />
                </div>

                <div className="sideheader11">
                    <CheckBoxOutlineBlankIcon />POCO<br />
                    <CheckBoxOutlineBlankIcon />REALME<br />
                    <CheckBoxOutlineBlankIcon />INFINIX<br />
                    <CheckBoxOutlineBlankIcon />MOTOROLA<br />
                    <CheckBoxOutlineBlankIcon />SAMSUNG<br />
                    <CheckBoxOutlineBlankIcon />MI<br />
                </div>
            </div>



            <div className="rightgrid">

                <div className="rightgrid1">
                    <span>Home</span>
                    <ArrowForwardIosIcon />
                    <span> Mobiles & Ac</span>
                    <ArrowForwardIosIcon />
                    <span> Mobiles</span>
                    <ArrowForwardIosIcon />
                </div>

                <div className="rightgrid2">
                    <h3>Showing 1 - 24 of 11,214 results for "mobiles"</h3>
                </div>

                <div className="rightgrid3">
                    <span>Sort by</span>
                    <span>Relevence</span>
                    <span>Popularity</span>
                    <span>Price-Low to High</span>
                    <span>Price High-to Low</span>
                    <span>Newest First</span>
                </div>


                <div className="image">
                    <img src={realme1} alt="" />
                <div className="text1">
                    <FavoriteIcon />
                    <span><b>Realme C12 (Power Silver, 32 GB)</b><br />
                    . 3GB RAM | 32 GB ROM | Expandable Upto 256 GB<br />
                    . 16.56 cm (6.52 inch) HD+ Display<br />
                    . 13MP + 2MP + 2MP | 5MP Front Camera<br />
                    . 6000 mAH Lithium-Lion Battery<br />
                    . Mediatek Helio G35 Processor<br />
                    . Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories</span>
                </div>

                <div className="text2">
                     Rs. 8,999<br />
                     no emi cost<br />
                     upto $8450 off on exchange
                </div>

                </div>

                <div className="image2">
                    <img src={realme1} alt="" />
                    <div className="text3">
                    <FavoriteIcon />
                    <span><b>Realme C12 (Power Silver, 32 GB)</b><br />
                    . 3GB RAM | 32 GB ROM | Expandable Upto 256 GB<br />
                    . 16.56 cm (6.52 inch) HD+ Display<br />
                    . 13MP + 2MP + 2MP | 5MP Front Camera<br />
                    . 6000 mAH Lithium-Lion Battery<br />
                    . Mediatek Helio G35 Processor<br />
                    . Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories</span>
                    </div>
                    <div className="text4">
                        Rs. 8,999<br />
                    no emi cost<br />
                    upto $8450 off on exchange
                </div>

                </div>

                <div className="image3">
                    <img src={realme1} alt="" />
                    <div className="text5">
                    <FavoriteIcon />
                    <span><b>Realme C12 (Power Silver, 32 GB)</b><br />
                    . 3GB RAM | 32 GB ROM | Expandable Upto 256 GB<br />
                    . 16.56 cm (6.52 inch) HD+ Display<br />
                    . 13MP + 2MP + 2MP | 5MP Front Camera<br />
                    . 6000 mAH Lithium-Lion Battery<br />
                    . Mediatek Helio G35 Processor<br />
                    . Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories</span>
                    </div>
                    <div className="text6">
                     Rs. 8,999<br />
                     no emi cost<br />
                     upto $8450 off on exchange
                </div>

                </div>

            </div>


        </div>
    )
}

export default SideHeader;
