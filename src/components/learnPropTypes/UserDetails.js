import propTypes from 'prop-types';

const UserDetails = ({ name, id}) => {
   return <>
     <label>Id is {id} and name is {name}</label>
   </>
}

UserDetails.propTypes = {
    name: propTypes.string.isRequired,
    id: propTypes.number
}

export default UserDetails;