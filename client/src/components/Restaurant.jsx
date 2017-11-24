import React from 'react';
import PropTypes from 'prop-types';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      city: '',
    };

    this.onStateChange = this.onStateChange.bind(this);
  }

  onStateChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
    // console.log(this.state);
    });
  }

  render() {
    return (
      <div>
          City:
        <input
          type="text"
          name="city"
          onChange={this.onStateChange}
        />
        <button onClick={() =>
          this.props.onCitySubmitClick(this.state.restaurant, this.state.city)}
        >
          Submit
        </button>
        <div>
          Restaurant:
          <input
            type="text"
            name="restaurant"
            onChange={this.onStateChange}
          />
        </div>
      </div>);
  }
}

export default Restaurant;

Restaurant.propTypes = {
  onCitySubmitClick: PropTypes.func.isRequired,
};
