import React from "react";

class InfoEdu extends React.Component {
    render() {
        const { name, age, degree, city, year } =  this.props;
        return(
            <div className="box">
                <div><b>Nombre de la institucion:</b> {name}</div>
                <div><b>Years de estudio:</b> {age}</div>
                <div><b>Degree:</b> {degree}</div>
                <div><b>Ciudad:</b> {city}</div>
                <div><b>Year:</b> {year}</div>
            </div>
        )
    }
}

export default InfoEdu