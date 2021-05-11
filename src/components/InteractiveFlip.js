import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractiveFlip.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class InteractiveFlip extends Component {
  state = {
    count: 1
  }

  flip = e => {
    const { dataPage } = this.props;
    // console.log(e.currentTarget.classList);

    let idBtn = parseInt(e.currentTarget.id);

    // console.log(idBtn);

    // console.log(Object.values(dataPage)[idBtn - 1].text);

    e.currentTarget.classList.add('animated', 'flipOutY');

    // console.log(e.currentTarget.classList);

    this.setState({ count: this.state.count + 1 });
    if (this.state.count === dataPage.length) {
      this.props.isEnded(true);
    }

    this.flipShow(idBtn);
  }

  flipShow = (item) => {
    // console.log(document.getElementById('info-' + item));
    setTimeout(function(){
      document.getElementById('info-' + item).classList.remove('dNone');
      document.getElementById('info-' + item).classList.add('animated', 'flipInY');
    }, 800);
  }

  render() {
    const { dataPage } = this.props;
    return (
      <div className = 'interactiveFlip'>
        {
          dataPage.map((item, i) => {
            return(
              <div key = { item.id }>
                <div className = 'buttonFlip dF-R-cc' id = { item.id } onClick = { this.flip }>
                  <span className = 'fa-layers fa-fw iconButton' >
                    <FontAwesomeIcon icon="circle" style={{ color: '#FF6A3D' }} />
                    <FontAwesomeIcon icon="plus" inverse transform="shrink-6" />
                  </span>
                </div>

                <div className = 'infoFlip dF-R-cc dNone' id = { 'info-' + item.id }>
                  <p>{ item.text }</p>
                </div>
              </div>

            );
          })
        }
      </div>
    );
  }
}

export default InteractiveFlip;
