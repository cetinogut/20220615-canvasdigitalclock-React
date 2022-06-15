import React, { Component } from 'react';

import { renderDigitalClock } from './digital';

export default class CanvasDigiClock extends Component {

  
  static defaultProps = {
    size: 400, 
    bgColor: "#fff7f7", // day mode color
    timeoffset: 0,
    dialColor: "#1beb4f",
    dialFontSize: 200,
    time24h: true,
  }
  

  componentDidMount() {
    const { id } = this.props;
    const node = document.getElementById(`digitalClock${id}`);
    const context = node.getContext('2d');
    renderDigitalClock(context, this.props);
  }

  render() {
  

    const { id, top, left, width, height } = this.props;
    return (
      // <canvas id={`digitalClock${id}`} width={size} height={size} />
      <canvas id={`digitalClock${id}`} top={top} left={left} width={width} height={height} />
      
    )
  }
}