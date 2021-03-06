import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import './css/windowWrapper.css';

class WindowWrapper extends React.Component {

  constructor(props) {

    super(props);

    this.headerRef = React.createRef();
    this.headerButtonsRef = React.createRef();

    this.state = {
      headerHeight: 0,
      headerButtonsWidth: 0
    };
  }

  componentDidMount() {

    this.setState({
      headerHeight: this.headerRef.current.clientHeight
    });
  }

  render() {

    let characterId = this.props.characterId;
    let characterName = this.props.characterName;
    
    return (
      <div className='window-wrapper'>
        <div ref={this.headerRef}>

          <Segment className='header-segment'>
            <div>
              <img src={'images/characters/' + characterId + '.png'} alt='' />
              <div><Header>{characterName}</Header></div>
            </div>

            <div>{this.props.headerButtons}</div>
          </Segment>
          
        </div>
        <div className='body-segment' style={{top: 'calc(' + this.state.headerHeight + 'px + 1em)'}}>
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default WindowWrapper;
