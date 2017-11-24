import React from 'react';
import PropTypes from 'prop-types';
// import ReservationList from './ReservationList.jsx';
import RestaurantEntry from './RestaurantEntry.jsx';

const AvailableReservations = props =>
  (
    <div>
      Available Reservations
      {props.restaurantData.map(restaurant =>
        (<RestaurantEntry
          key={restaurant.name}
          restaurant={restaurant}
          time={props.time}
          party={props.party}
          onAcceptClick={props.onAcceptClick}
        />))}
    </div>
  );


export default AvailableReservations;

AvailableReservations.propTypes = {
  time: PropTypes.string.isRequired,
  party: PropTypes.string.isRequired,
  restaurantData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  onAcceptClick: PropTypes.func.isRequired,
};
