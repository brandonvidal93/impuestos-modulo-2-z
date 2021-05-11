import React, { Component } from 'react';

import './BackCover.scss';

class BackCover extends Component {
  // FUNCION PARA MOSTRAR LA MODAL DEL FINAL
  showBackCover = () => {
    const { data, courseEnd } = this.props;
    if (courseEnd === true) {
      return (
        <div className = 'bgCircle dF-R-cc showModal'>
          <div className = 'boxInfo dF-C-cc pT-2 pB-2 pL-2 pR-2'>
            <img
              alt = 'Imagen Corporativa'
              className = 'imageLogo mB-3'
              src = { data.img }/>
            <h2 className = 'mB-1'>{ data.title }</h2>
            <p>{ data.text }</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className = 'backcover animated fadeIn'>
        { this.showBackCover() }
      </div>
    );
  }
}

export default BackCover;
