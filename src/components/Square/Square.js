import React, { PropTypes as toBe, Component } from 'react';
import './Square.css';

class Square extends Component {
  static propTypes = {
    store: toBe.object,
  };

  constructor(props) {
    super(props);

    const { store } = props;
    this.state = {
      color: store.getState().color,
    };
  }

  componentWillMount() {
    const { store } = this.props;
    store.subscribe( () => {
      this.setState({
        color: store.getState().color,
      })
    });
  }

  render() {
    const divColor = {
      backgroundColor: this.state.color
    };

    return (
      <div className='Square' style={divColor} />
    );
  }
}

export default Square;
