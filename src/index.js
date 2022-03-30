import React from 'react';
import ReactDOM from 'react-dom';
import InfoPersonal from './components/infoPersonal';
import InfoEdu from './components/infoEdu';
import InfoWork from './components/infoWork';
import './style.css'

class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      infoPersonal: {
        name: '',
        lastname: '',
        age: '',
        genere: ''
      },
      infoEdu : {
        name: '',
        age: '',
        degree: '',
        city: '',
      },
      infoWork: {
        position: '',
        name: '',
        city: '',
        from: '',
        to: ''
      }
    }
  }

  infoSubmit = ()=>{
    this.setState({
      infoPersonal : {
        name: document.getElementById('name').value,
        lastname: document.getElementById('lastname').value,
        age: document.getElementById('age').value,
        genere: document.getElementById('genere').value,
      },
      infoEdu : {
        name: document.getElementById('nameEdu').value,
        age: document.getElementById('ageEdu').value,
        degree: document.getElementById('degreeEdu').value,
        city: document.getElementById('cityEdu').value,
        year: document.getElementById('yearEdu').value
      },
      infoWork: {
        position: document.getElementById('positionWork').value,
        name: document.getElementById('nameWork').value,
        city: document.getElementById('cityWork').value,
        from: document.getElementById('fromWork').value,
        to: document.getElementById('toWork').value
      }
    })
    document.getElementById('form1').reset()
    document.getElementById('form2').reset()
    document.getElementById('form3').reset()
  }

  infoEdit = ()=>{
    document.getElementById('name').value = this.state.infoPersonal.name;
    document.getElementById('lastname').value = this.state.infoPersonal.lastname;
    document.getElementById('age').value = this.state.infoPersonal.age;
    document.getElementById('genere').value = this.state.infoPersonal.genere;
    document.getElementById('nameEdu').value = this.state.infoEdu.name;
    document.getElementById('ageEdu').value = this.state.infoEdu.age;
    document.getElementById('degreeEdu').value = this.state.infoEdu.degree;
    document.getElementById('cityEdu').value = this.state.infoEdu.city;
    document.getElementById('yearEdu').value = this.state.infoEdu.year;
    document.getElementById('positionWork').value = this.state.infoWork.position;
    document.getElementById('nameWork').value = this.state.infoWork.name;
    document.getElementById('cityWork').value = this.state.infoWork.city;
    document.getElementById('fromWork').value = this.state.infoWork.from;
    document.getElementById('toWork').value = this.state.infoWork.to;
  }

  render() {
    return (
      <div className='body'>
        <div className="forms">
          <form id='form1'>
            <div>Nombre: <input id='name' autoComplete='off'/></div>
            <div>Apellidos: <input id='lastname' autoComplete='off'/></div>
            <div>Edad: <input type="number" id='age'/></div>
            <div>Genero: <input id='genere' autoComplete='off'/></div>
          </form>
          <form id='form2'>
            <div>Nombre de la institucion: <input id='nameEdu'/></div>
            <div>Years de estudio: <input id='ageEdu'/></div>
            <div>Degree: <input id='degreeEdu'/></div>
            <div>Ciudad: <input id='cityEdu'/></div>
            <div>Year: <input id='yearEdu'/></div>
          </form>
          <form id='form3'>
            <div>Position: <input id='positionWork'/></div>
            <div>Company: <input id='nameWork'/></div>
            <div>City: <input id='cityWork'/></div>
            <div>Desde: <input id='fromWork'/></div>
            <div>Hasta: <input id='toWork'/></div>
          </form>
        </div>
        <div className="preview">
          <InfoPersonal
            name={this.state.infoPersonal.name}
            lastname={this.state.infoPersonal.lastname}
            age={this.state.infoPersonal.age}
            genere={this.state.infoPersonal.genere}
          />
          <InfoEdu
            name={this.state.infoEdu.name}
            age={this.state.infoEdu.age}
            degree={this.state.infoEdu.degree}
            city={this.state.infoEdu.city}
            year={this.state.infoEdu.year}
          />
          <InfoWork
            position={this.state.infoWork.position}
            name={this.state.infoWork.name}
            city={this.state.infoWork.city}
            from={this.state.infoWork.from}
            to={this.state.infoWork.to}
          />
          
        </div>
        <div className="buttons box">
            <button type="button" onClick={this.infoSubmit}>Submit</button>
            <button type="button" onClick={this.infoEdit}>Edit</button>
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

