import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './SlidesUpDown.scss';

library.add(fas, fab, far);

class SlidesUpDown extends Component {
  state = {
    page: 1
  }

  mSlides = e => {
    const { dataPage } = this.props;
    if (e.currentTarget.id === 'btnAnt') {
      this.setState({
        page: this.state.page - 1
      });
    }
    if (e.currentTarget.id === 'btnSig') {
      this.setState({
        page: this.state.page + 1
      });

      // console.log(this.state.page);

      if (this.state.page === dataPage.length - 1) {
        this.props.isEnded(true);
      }
    }
  }

  render() {
    // console.log(this.props.dataPage[this.state.page - 1] );
    // console.log(this.state.page);
    const { dataPage } = this.props;
    return (
      <div className = 'slidesUpDown dF-R-cc'>
        {
          dataPage.map((item, i) =>
          <div className = { 'itemInfo pL-2 pR-2 dF-R-bc animated fadeIn ' + (item.id !== this.state.page ? 'dNone' : '') } key = { item.id } id = { item.id } >
            <p className = 'textInfo' dangerouslySetInnerHTML = {{ __html: item.text }} />
            {
              item.img !== '' ? <img alt = 'Img Slide' className = 'image' src = { item.img } /> : <h1 className = 'numInfo color-4 fw-4 dF-R-cc'>{ item.id }</h1>
            }
          </div>)
        }

        <div className = 'buttons dF-C-cc'>
          <button className = { 'buttonSlide mB-05 ' + (this.state.page === 1 ? 'disabled' : 'pulse-2') } id = 'btnAnt' onClick = { this.mSlides }>
            <FontAwesomeIcon className = 'iconButton' icon="chevron-up" size = 'lg' />
          </button>
          <button className = { 'buttonSlide mT-05 ' + (this.state.page === dataPage.length ? 'disabled' : 'pulse-2') } id = 'btnSig' onClick = { this.mSlides }>
            <FontAwesomeIcon className = 'iconButton' icon="chevron-down" size = 'lg' />
          </button>
        </div>
      </div>
    );
  }
}

export default SlidesUpDown;
