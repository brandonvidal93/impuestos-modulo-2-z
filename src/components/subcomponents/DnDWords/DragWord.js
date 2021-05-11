import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const DragWord = ({ name, type, id, countWords }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO

        // console.log(document.getElementById('infoDrop-' + id));
        // console.log(document.getElementById('dragBox-' + id));
        document.getElementById('dragWord-' + id).classList.add('dNone');
        // document.getElementById('boxDrop-' + type).classList.add('dNone');
        // console.log(document.getElementById('boxDrop-' + type));
        document.getElementById('boxDrop-' + type).classList.add('WordDropped');
        document.getElementById('boxDrop-' + type).innerHTML = '<p>' + type + '</p>';
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.4 : 1

  return (
    <div className = 'dragWord' ref = { drag } style = {{ ...style, opacity }} id = {'dragWord-' + id } onDragEnd = { countWords }>
      <p>{ type }</p>
    </div>
  )
}

export default DragWord;
