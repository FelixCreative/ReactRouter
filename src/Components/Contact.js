import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Countact Us
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div
            className="row contact-form-area wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-block">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Email"
                          id="email"
                          className="form-control"
                          name="email"
                          required
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          rows={7}
                          data-error="Write your message"
                          required
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="submit-button text-left">
                        <button
                          className="btn btn-common"
                          id="form-submit"
                          type="submit"
                        >
                          Send Message
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="map">
                <object
                  style={{ border: 0, height: "280px", width: "100%" }}
                  data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34015.943594576835!2d-106.43242624069771!3d31.677719472407432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d90e99d597b%3A0x6cd3eb9a9fcd23f1!2sCourtyard+by+Marriott+Ciudad+Juarez!5e0!3m2!1sen!2sbd!4v1533791187584"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
