import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './FinishUnit.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class BackCover extends Component {
  state = {
    showModal: false
  }

  // FUNCION PARA MOSTRAR LA MODAL DEL FINAL
  showBackCover = () => {
    const { data, lastPage } = this.props;
    if (lastPage === true) {
      return (
        <div className = 'bgCircle dF-R-cc showModal'>
          <div className = 'boxInfo dF-C-cc pT-2 pB-2 pL-2 pR-2'>
            <img
              alt = 'Imagen Corporativa'
              className = 'imageLogo mB-2'
              src = { data.img }/>
            <h2 className = 'mB-1'>{ data.title }</h2>
            <p className = 'mB-2'>{ data.text }</p>
            <button
              className = 'buttonClose'
              onClick = { this.hideLastPage }
              >
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
              </span>
            </button>
          </div>

          <div
            className = 'menuSignal' >
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'bars'] }
              size = '2x' />
          </div>

          <div className = 'arrowSignal'>
            <FontAwesomeIcon className = 'arrowUp' icon="arrow-up" size = '2x' />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  hideLastPage = () => {
    this.props.showLastPage(false);
    // this.props.showLastPage(true);
  }

  render() {
    return (
      <div className = 'finishUnit animated fadeIn'>
        { this.showBackCover() }
      </div>
    );
  }
}

export default BackCover;
