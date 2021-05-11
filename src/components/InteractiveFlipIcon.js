import React, { Component } from 'react';
// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractiveFlipIcon.scss';

// CREATING LIBRARY ICONS
// library.add(fas, fab, far);

class InteractiveFlipIcon extends Component {
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
      <div className = 'interactiveFlipIcon'>
        {
          dataPage.map((item, i) => {
            const borderTop = "5px solid " + item.color;

            return(
              <div className = 'mL-05 mR-05' key = { item.id }>
                <div
                className = 'buttonFlip dF-R-cc'
                id = { item.id }
                onClick = { this.flip }
                style = { { 'borderTop': borderTop } }>
                  <img
                    alt = 'Img Flip'
                    className = 'logoFlip'
                    src = { item.img } />
                </div>

                <div className = 'infoFlip dF-R-cc dNone' id = { 'info-' + item.id } style = { { 'backgroundColor': item.color } }>
                  <p className = 'color-4'>{ item.text }</p>
                </div>
              </div>

            );
          })
        }
      </div>
    );
  }
}

export default InteractiveFlipIcon;

// <span className = 'fa-layers fa-fw iconButton' >
//   <FontAwesomeIcon icon="circle" style={{ color: item.color }} />
//   <FontAwesomeIcon icon="plus" inverse transform="shrink-6" />
// </span>
