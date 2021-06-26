import React from 'react';
import banner from '../../../image/header.jpg';

function Slider() {

    const sectionStyle = {
        width: "100%",
        backgroundImage: "url(" + { banner } + ")",
        border:"1px solid #000",
        height:"100%",
        

    };
    const sth = {
        width: "100%",
        backgroundImage: "url(" + { banner } + ")",
        border:"1px solid #000",
        height:"100%",
        

    };


    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div style={{height:'400px'}}>
                    <img src={banner} style={sectionStyle} alt="" />
                    <div className="" style={{ border: '1px solid #000', height: '150px', width: '40%', position: 'absolute ', bottom: '0px', marginLeft: '30%', marginTop: '', backgroundColor:'#101C2C' }}>
                        
                    </div>
                </div>

            </div>
            <div className="col-md-1">

            </div>
        </div>
    )
}

export default Slider
