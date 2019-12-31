import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Career</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Senior Engineer @ Netflix{"  "}
                          <span>2018 - Present</span>
                        </h2>
                        <p>
                          Part of Netflix's Data Science & Engineering
                          organization developing content and marketing data
                          products. Responsible for the data model that powers
                          enterprise products servicing 2000+ employees
                          throughout Netflix's content and marketing
                          organization, from creatives to buyers and analysts.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Head of Product & Analytics @ Scopely{"  "}
                          <span>2016 - 2018</span>
                        </h2>
                        <p>
                          Head of Product for Scopely's central publishing
                          technology team which supports the UA, Product
                          Marketing, and Ad Monetization verticals. Responsible
                          for the vision and execution of several critical
                          platform tools and services. Was also responsible for
                          line management of the analytics team for Scopely's
                          top grossing title, from recruiting and technical
                          training to defining the overarching Scopely analytics
                          strategy--in addition to functioning as an individual
                          contributor. My team drove key initiatives around
                          early game funnel improvements and long term
                          engagement.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Biopharmaceutical Research & Engineering{"  "}
                          <span>2011 - 2016</span>
                        </h2>
                        <p>
                          In a previous life, I was a biomedical research
                          scientist at Baxter Healthcare. Was responsible for
                          line management of engineers in addition to diagnosing
                          and implementing solutions for complex manufacturing
                          issues that spanned across facilities in multiple
                          countries (US, Austria, Italy, Belgium, China). Prior
                          I also worked in academia at UCLA's premier
                          oncological drug delivery lab.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
