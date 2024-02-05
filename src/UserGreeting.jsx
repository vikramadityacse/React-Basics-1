import PropTypes from 'prop-types'

function UserGreeting(props){

   return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username}!!!!</h2> : 
                             <h2 className="log-prompt">Please Log in to continue...</h2> )
    


}

UserGreeting.proptypes ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps ={
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting