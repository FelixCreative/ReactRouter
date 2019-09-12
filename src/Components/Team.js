import React, { Component } from "react";
import { Link } from "react-router-dom";
import teams from "./../teams-data.json";
class Team extends Component {
  slug = (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  
    return str;
  }
  render() {
    return (
      <section id="team" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Meet our team
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div className="row">
            {/* Team Item Starts */}
            {teams.map((team, i) => {
              return (
                <div className="col-lg-6 col-md-12 col-xs-12" key={i}>
                  <div
                    className="team-item wow fadeInRight"
                    data-wow-delay="0.2s"
                    key={i}
                  >
                    <div className="team-img">
                      <img
                        className="img-fluid"
                        src={team.img}
                        alt=""
                      />
                    </div>
                    <div className="contetn">
                      <div className="info-text">
                        <h3>
                          <Link to={`/team/${this.slug(team.position)}.${team.id}.html`}>{team.name}</Link>
                        </h3>
                        <p>{team.position}</p>
                      </div>
                      <p>
                        {team.description}
                      </p>
                      <ul className="social-icons">
                        <li>
                          <a href="/">
                            <i
                              className="lni-facebook-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i
                              className="lni-twitter-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i
                              className="lni-instagram-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Team Item Ends */}
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
