import React from "react";
import PropTypes from "prop-types";
import "./githubCard.scss";

class GithubCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      typing: false
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/" + this.props.gitUsername)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
        //console.log(data);
        //console.log(this.state);
      });
  }

  render() {
    let { data } = this.state;
    // let {username} = this.props.gitUsername;
    return (
      <div className="card border-success">
        <div className="card-header border-success">
          <div className="col">
            {data && (
              <img src={data.avatar_url} alt="..." className="img-thumbnail" />
            )}
          </div>
          <div className="col">
            {data ? <strong>{data.name}</strong> : "loading"}
            {data ? (
              <span>{"@" + this.props.gitUsername}</span>
            ) : (
              <span>"No Git User"</span>
            )}
          </div>
        </div>
        <div className="card-body border-success">card body</div>
        <div className="card-footer border-success">card footer</div>
      </div>
    );
  }
}
GithubCard.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  email: PropTypes.string.isRequired,
  gitUsername: PropTypes.string.isRequired
};
GithubCard.defaultProps = {
  email: null,
  gitUsername: "plucodev"
};
export default GithubCard;

// <div className="card user-card">
// 			    <div className="header">
// 			    <a className="avatar" href={"https://github.com/" + this.props.gitUsername} target="_top">
// 			    {data&&(<img src={data.avatar_url}/>)}
// 			    {data?(<strong>{data.name}</strong>):"loading"}{data?(<span>{"@" + this.props.gitUsername}</span>):(<span>"No Git User"</span>)}</a>
// 			    </div>

// 			    <ul className="status">
// 			        <li><a href={"https://github.com/" + this.props.gitUsername + "?tab=repositories"} target="_top">{(data)?(<strong>{data.public_repos}</strong>):(<strong>0</strong>)}Repos</a>
// 			        </li>
// 			        <li><a href={"https://gist.github.com/"+ this.props.gitUsername} target="_top">{(data)?(<strong>{data.public_gists}</strong>):(<strong>0</strong>)}Gists</a>
// 			        </li>
// 			        <li><a href={"https://github.com/"+ this.props.gitUsername + "/followers"} target="_top">{(data)?(<strong>{data.followers}</strong>):(<strong>0</strong>)}Followers</a>
// 			        </li>
// 			    </ul>
