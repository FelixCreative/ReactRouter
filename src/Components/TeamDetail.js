import React, { Component } from "react";
import teams from './../teams-data.json';
class TeamDetail extends Component {
  render() {
    let teamDetail = teams.filter(x=>x.id === this.props.match.params.id);
    console.log(teamDetail);
    return (
      <div className="team-item wow team-detail">
        <div className="team-img">
          <img className="img-fluid" src="assets/img/team/team-01.png" alt="" />
        </div>
        <div className="contetn">
          <div className="info-text">
            <h3>
              <a href="/">David Smith</a>
            </h3>
            <p>Front-end Developer</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur.
          </p>
          <ul className="social-icons">
            <li>
              <a href="/">
                <i className="lni-facebook-filled" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="lni-twitter-filled" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="lni-instagram-filled" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamDetail;
