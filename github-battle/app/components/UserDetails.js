var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails (props) {
  return (
    <div>
      {!!props.score && <li className="list-group-item"><h3>Score: {props.score}</h3></li>}
      <li className="list-group-item"> <img src={props.user.avatar_url} className="img-rounded img-responsive"/></li>
      {props.user.name && <li className="list-group-item">Name: {props.user.name}</li>}
      <li className="list-group-item">Username: {props.user.login}</li>
      {props.user.location && <li className="list-group-item">Location: {props.user.location}</li>}
      {props.user.company && <li className="list-group-item">Company: {props.user.company}</li>}
      <li className="list-group-item">Followers: {props.user.followers}</li>
      <li className="list-group-item">Following: {props.user.following}</li>
      <li className="list-group-item">Public Repos: {props.user.public_repos}</li>
      {props.user.blog && <li className="list-group-item">Blog: <a href={props.user.blog}> {props.user.blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  })
}

module.exports = UserDetails;