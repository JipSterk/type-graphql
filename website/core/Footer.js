/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";

export const Footer = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <a href={siteConfig.baseUrl} className="nav-home">
          {siteConfig.footerIcon && (
            <img
              src={siteConfig.baseUrl + siteConfig.footerIcon}
              alt={siteConfig.title}
              width="66"
              height="58"
            />
          )}
        </a>
        <div>
          <h5>Docs</h5>
          <a href={this.docUrl("introduction.html")}>Introduction</a>
          <a href={this.docUrl("getting-started.html")}>Getting Started</a>
          <a href={this.docUrl("scalars.html")}>Advanced Guides</a>
          <a href={this.docUrl("dependency-injection.html")}>Features</a>
          <a href={this.docUrl("emit-schema.html")}>Others</a>
        </div>
        <div>
          <h5>Community</h5>

          <a
            href={
              siteConfig.repoUrl +
              '/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A"Enhancement+%3Anew%3A"'
            }
            target="_blank"
          >
            Feature requests and proposals
          </a>
          <a
            href={
              siteConfig.repoUrl +
              '/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A"Bug+%3Abug%3A"'
            }
            target="_blank"
          >
            Issues
          </a>
          <a href="https://gitter.im/type-graphql/Lobby" target="_blank">
            Project Chat
          </a>
          <a href="https://twitter.com/typegraphql" target="_blank">
            Twitter
          </a>
          <a href="https://opencollective.com/typegraphql" target="_blank">
            Open Collective
          </a>
        </div>
        <div>
          <h5>More</h5>
          <a href={siteConfig.baseUrl + "blog"}>Blog</a>
          <a href={siteConfig.repoUrl} target="_blank">
            GitHub
          </a>
          <a
            className="github-button"
            href={siteConfig.repoUrl}
            data-icon="octicon-star"
            data-count-href="/facebook/docusaurus/stargazers"
            data-show-count={true}
            data-count-aria-label="# stargazers on GitHub"
            aria-label="Star this project on GitHub"
          >
            Star
          </a>
        </div>
      </section>
      <section className="copyright">{siteConfig.copyright}</section>
    </footer>
  );
};
