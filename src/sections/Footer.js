import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Footer.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class Footer extends Component {

  // ENVIO DE ID PARA NAVEGAR EL CURSO
  navigationCourse = e => {
    const { actualIndex, data, showLastPage } = this.props;
    e.preventDefault();
    if (Object.values(data)[actualIndex].endUnit !== true || e.target.id === 'btnNavLeft') {
      this.props.clickNavigation(e.target.id);
    } else {
      console.log('Ultima página');
      showLastPage(true);
    }
  }

  // MOSTRAR EL LOGO CUANDO NO ESTÁ EN LA PÁGINA 1
  showLogo = () => {
    const { actualIndex, imageFooter } = this.props;

    if (actualIndex !== 0) {
      return(
        <img
          alt='Imagen Corporativa'
          className='imageFooter'
          src={ imageFooter }/>
      );
    } else {
      return null;
    }
  }

  // MOSTRAR EL MENU DE NAVEGACIÓN Y BLOQUEAR LOS BOTONES DEPENDIENDO DE LA PAGINA
  showNavigation = () => {
    const { actualIndex, limitNavigation, data } = this.props;

    if (actualIndex !== 0) {
      return(
        <div className = 'buttonPannel'>
          <button
            className = { 'buttonNav ' + (actualIndex === 1 || Object.values(data)[actualIndex].startUnit === true ? 'disabled': '') }
            id = 'btnNavLeft'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'chevron-left'] }
              size = '2x' />
          </button>

          <button
            className = { 'buttonNav ' + (actualIndex === 1 || actualIndex === limitNavigation || Object.values(data)[actualIndex].endCourse === true ? 'disabled ': '') + (actualIndex === 2 || actualIndex === 4 || actualIndex === 8  || actualIndex === 9 || actualIndex === 13 || actualIndex === 15 || actualIndex === 17 ? 'op-4' : '') }
            id = 'btnNavRight'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'chevron-right'] }
              size = '2x' />
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { labelFooter } = this.props;

    return (
      <div className = 'footer animated fadeIn'>
        <p className = 'labelFooter pL-3 fw-4'>{ labelFooter }</p>

        { this.showLogo() }

        { this.showNavigation() }

        { /*OLAS DE FONDO*/ }
        <div className = 'wave'></div>
        <div className = 'wave'></div>
      </div>
    );
  }
}

export default Footer;
