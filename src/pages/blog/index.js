import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{height: '200px'}}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
                boxShadow:
                    "style=rgb(109, 137, 173) 0.5rem 0px 0px, rgb(109, 137, 173) -0.5rem 0px 0px",
                  backgroundColor: "#6d89ad",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Blog Posts
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
