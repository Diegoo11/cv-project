import React from "react";

class InfoWork extends React.Component {
    render() {
        const { position, name, city, from, to } =  this.props;
        return(
            <div className="box">
                <div><b>Position:</b> {position}</div> 
                <div><b>Company:</b> {name}</div>
                <div><b>City:</b> {city}</div>
                <div><b>Desde:</b> {from}</div>
                <div><b>Hasta:</b> {to}</div>
            </div>
        )
    }
}

export default InfoWork