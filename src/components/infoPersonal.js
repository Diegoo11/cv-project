import React from "react";

class InfoPersonal extends React.Component {
    render() {
        const { name, lastname, age, genere } =  this.props;
        return(
            <div className="box">
                <div><b>Name:</b> {name}</div>
                <div><b>Lastname:</b> {lastname}</div>
                <div><b>Age:</b> {age}</div>
                <div><b>Genere:</b> {genere}</div>
            </div>
        )
    }
}

export default InfoPersonal