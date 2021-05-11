import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoxDrop from './subcomponents/DnD/BoxDrop';
import DragItem from './subcomponents/DnD/DragItem';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableCircle.scss';

library.add(fas, fab, far);

class DraggableCircle extends Component {
  state = {
    showItem: false,
    actualItem: 0
  }

  hideModal = (e) => {
    // console.log(e.currentTarget.id);
    let idButton = parseInt(e.currentTarget.id);

    document.getElementById('infoDrop-' + idButton).classList.add('dNone');
  }

  countDrag = () => {
    this.setState({
      actualItem: this.state.actualItem + 1
    });

    if (this.state.actualItem === 2) {
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  render() {
    const { multimedia } = this.props;
    // console.log(this.state);
    return (
      <div className = 'draggableCircle'>
        <DndProvider backend={HTML5Backend}>
          <div>
            {
              multimedia.dragItems.map( (item, i) => {
                return(
                  <div key = { item.drag }>
                    <DragItem
                      id = { item.drag }
                      name = { item.data }
                      path = { item.img }
                      posY = { item.posY }
                      posX = { item.posX }
                      type = { item.type }
                      yTarget = { item.posYTarget }
                      xTarget = { item.posXTarget }
                      countDrag = { this.countDrag } />

                    <div className = 'dragBg' style = { { 'top': item.posY, 'left': item.posX } }>
                      <img
                        alt = 'Drag'
                        className = ''
                        src = { item.img } />
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div>
            {
              multimedia.dropZone.map( (item, i) => {
                return(
                  <div key = { item.drop }>
                    <BoxDrop
                      data ={ item.data }
                      path = { item.img }
                      pathTarget = { item.imgTarget }
                      posY = { item.posY }
                      posX = { item.posX }
                      type = { item.type } />

                    <div
                      className = { 'infoGloble dF-C-cs animated dNone ' + (item.infoBox.posTriang === 'left' ? 'triang-izq fadeInRight' : 'triang-der fadeInLeft')}
                      id = { 'infoDrop-' + (item.drop) } style = {{ 'width': item.infoBox.width, 'top': item.infoBox.posY, 'left': item.infoBox.posX }}>

                      <h4 className = 'color-4 mB-1'>{ item.infoBox.title }</h4>
                      <div className = 'dF-C-cs' dangerouslySetInnerHTML = { {__html: item.infoBox.text} }/>
                      <button
                        className = 'buttonClose'
                        onClick = { this.hideModal }
                        id = { item.drop }
                        >
                        <span className = 'fa-layers fa-fw iconButton' >
                          <FontAwesomeIcon icon="circle" />
                          <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                        </span>
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default DraggableCircle;
