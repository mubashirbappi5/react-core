
import PropTypes from 'prop-types';

function List({friend}){
    
    const {name, email} = friend
    return(
<div>
    
<h4>testing:{name}</h4>
        <h4> testing2{email}</h4>

     
 
</div>
    )

}
List.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

export default List;