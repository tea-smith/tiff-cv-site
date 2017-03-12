import React, { Component } from 'react';
import {browserHistory} from 'react-router';

export default class Thumb extends Component {
  
  navigateToRoute(detail) {
    browserHistory.push(`/detail/${detail}`)
  }

  render() {
    const props = this.props;
    return(
      <div className='thumb-wrapper col-xs-12 col-sm-6 col-lg-4'>
        <div
          className='thumb-inner'
          style={{ 
            backgroundImage: `url(client/images/${props.backgroundImage})`,
            backgroundSize: `${props.css.backgroundSize}`,
            backgroundPositionX: `${props.css.backgroundPositionX}`,
            backgroundPositionY: `${props.css.backgroundPositionY}`,
          }}
          onClick={() => this.navigateToRoute(props.detail)}
          >
          <div>
            <h4>{props.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}
