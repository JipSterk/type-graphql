/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import { Container, GridBlock, MarkdownBlock } from "../../core/compLibrary";

const Button = ({ href, target = "_self", children }) => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={href} target={target}>
      {children}
    </a>
  </div>
);

const SplashContainer = ({ children }) => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{children}</div>
    </div>
  </div>
);

const Logo = ({ img_src }) => (
  <div className="project-logo">
    <img src={img_src} />
  </div>
);

const ProjectTitle = ({ title, tagline }) => (
  <h2 className="projectTitle">
    {title}
    <small>{tagline}</small>
  </h2>
);

const PromoSection = ({ children }) => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{children}</div>
    </div>
  </div>
);

const HomeSplash = () => (
  <SplashContainer>
    <div className="inner">
      <Logo img_src={useBaseUrl("logo.png")} />
      <ProjectTitle />
      <PromoSection>
        <Button href={useBaseUrl("introduction.html", language)}>Introduction</Button>
        {/* <Button href={docUrl("getting-started.html", language)}>Getting started</Button>
        <Button href={docUrl("examples.html", language)}>Examples</Button> */}
      </PromoSection>
    </div>
  </SplashContainer>
);

const Block = ({ id, background, className, align, children, layout }) => (
  <Container padding={["bottom", "top"]} id={id} background={background} className={className}>
    <GridBlock align={align || "center"} contents={children} layout={layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn" className="highlight features-section">
    {[
      {
        image: useBaseUrl("img/GraphQL_Logo.svg"),
        imageAlign: "top",
        title: "GraphQL",
        content:
          "Define your whole schema, including types, interfaces, enums, unions and subscriptions",
      },
      {
        image: useBaseUrl("img/ts-logo.png"),
        imageAlign: "top",
        title: "TypeScript",
        content:
          "Create the schema, types and resolvers only with TypeScript, using classes and decorators! ",
      },
      {
        image: useBaseUrl("img/tools.svg"),
        imageAlign: "top",
        title: "Advanced features",
        content:
          "Use features like automatic validation, authorization guards, dependency injection and plenty more...",
      },
    ]}
  </Block>
);

// const objectTypeSnippet = fs
//   .readFileSync(process.cwd() + "/pages/snippets/object-type.md")
//   .toString();

const DefineSchemaSection = () => (
  <Container
    id="define-schema"
    padding={["bottom", "top"]}
    background="light"
    className="snippet-container highlight"
  >
    <GridBlock
      align="left"
      contents={[
        {
          title: "Define schema",
          content:
            "Use only classes and decorators to define your GraphQL schema. No need to define types in SDL and no need to create interfaces for them!<br><br>This way you will have only one source of truth, so say goodbye to all field type mismatches, typos and annoying refactoring.",
        },
      ]}
    />
    <div className="snippet">
      <MarkdownBlock>{objectTypeSnippet}</MarkdownBlock>
    </div>
  </Container>
);

// const testabilitySnippet = fs
//   .readFileSync(process.cwd() + "/pages/snippets/testability.md")
//   .toString();

const ResolversSection = () => (
  <Container id="validation" padding={["bottom", "top"]} className="snippet-container">
    <div className="snippet">
      <MarkdownBlock>{testabilitySnippet}</MarkdownBlock>
    </div>
    <GridBlock
      align="left"
      contents={[
        {
          title: "Create resolvers",
          content:
            "Implement queries and mutation just like a normal class methods! Dependency injection support and decorators abstraction provides great separation of business logic from the underlying transport layer.<br><br>That gives you really easy testability, so you can just provide mocks of dependencies to prevent side effects and unit test your resolvers like a simple services which methods only take some parameters and return results.",
        },
      ]}
    />
  </Container>
);

// const validationSnippet = fs
//   .readFileSync(process.cwd() + "/pages/snippets/validation.md")
//   .toString();

const Validation = () => (
  <Container
    id="validation"
    padding={["bottom", "top"]}
    className="snippet-container highlight"
    background="light"
  >
    <GridBlock
      align="left"
      contents={[
        {
          title: "Easy validation",
          content:
            "Forget about manual inputs and arguments validation! No need to create custom scalars to limit the length of a string or the range of an int.<br><br>Just use decorators from <a href='https://github.com/typestack/class-validator' target='_blank'>class-validator</a> library and declare the requirements of the inputs. It couldn't be easier!",
        },
      ]}
    />
    <div className="snippet">
      <MarkdownBlock>{validationSnippet}</MarkdownBlock>
    </div>
  </Container>
);

// const typeormSnippet = fs.readFileSync(process.cwd() + "/pages/snippets/typeorm.md").toString();

const InteroperableSection = () => (
  <Container id="interoperable" padding={["bottom", "top"]} className="snippet-container">
    <div className="snippet">
      <MarkdownBlock>{typeormSnippet}</MarkdownBlock>
    </div>
    <GridBlock
      align="left"
      contents={[
        {
          title: "Interoperable",
          content:
            "Although TypeGraphQL is data-layer library agnostic, it integrates well with other decorator-based libraries, like [TypeORM](https://github.com/typeorm/typeorm), [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript) or [Typegoose](https://github.com/typegoose/typegoose).<br><br>This allows you to define both the GraphQL type and the entity in a single class - no need to jump between multiple files to add or rename some properties.",
        },
      ]}
    />
  </Container>
);

const CollectiveSection = () => (
  <>
    <Container id="collective" padding={["top"]} className="snippet-container highlight">
      <GridBlock
        align="left"
        contents={[
          {
            title: "Community supported",
            content:
              "TypeGraphQL is an MIT-licensed open source project. It doesn't have a large company that sits behind - its ongoing development is possible only thanks to the support by the community.<br><br>If you fell in love with TypeGraphQL, please consider supporting our efforts and help it grow, especially if you are using it commercially - just to ensure that the project which your product relies on is actively maintained and improved.",
          },
        ]}
      />
      <div className="collective-button">
        <a href="https://opencollective.com/typegraphql">
          <img
            srcSet="https://opencollective.com/typegraphql/donate/button.png?color=blue, https://opencollective.com/typegraphql/donate/button@2x.png?color=blue 2x"
            src="https://opencollective.com/typegraphql/donate/button.png?color=blue"
          />
        </a>
      </div>
    </Container>
    <div id="sponsors" className="snippet-container">
      <div className="wrapper">
        <h3 className="title">Gold Sponsors 🏆</h3>
        <div className="tiles">
          <a href="http://career.bluereceipt.co/">
            <img
              src={useBaseUrl("img/blue_receipt.gif")}
              style={{ width: 450, filter: "brightness(0.975)" }}
            />
            <span style={{ fontSize: 20 }}>BlueReceipt</span>
          </a>
          <a href="https://www.ecadlabs.com/">
            <img src={useBaseUrl("img/ecad.png")} style={{ width: 150 }} />
            <span style={{ fontSize: 20 }}>ECAD Labs</span>
          </a>
        </div>
        <blockquote className="note">
          <span>Please ask your company to support this open source project by</span>{" "}
          <a href="https://opencollective.com/typegraphql/contribute/gold-sponsors-8340">
            becoming a gold sponsor
          </a>{" "}
          <span>and getting a premium technical support from our core contributors.</span>
        </blockquote>
        <h3 className="title">Silver Sponsors 🥈</h3>
        <div className="tiles">
          <a href="https://gorrion.io/">
            <img src={useBaseUrl("img/gorrion.png")} style={{ width: 250 }} />
            <span>Gorrion Software House</span>
          </a>
          <a href="https://www.mryum.com/">
            <img src={useBaseUrl("img/mr-yum.png")} style={{ width: 100 }} />
            <span>Mr Yum</span>
          </a>
        </div>
        <h3 className="title">Bronze Sponsors 🥉</h3>
        <div className="tiles">
          <a href="https://www.ligrsystems.com/">
            <img src={useBaseUrl("img/live-graphics-system.png")} style={{ width: 60 }} />
            <span>Live Graphic Systems</span>
          </a>
          <a href="https://www.joinlifex.com/">
            <img src={useBaseUrl("img/lifex.svg")} style={{ width: 75 }} />
            <span>LifeX Aps</span>
          </a>
          <a href="https://www.swissmentor.com/">
            <img src={useBaseUrl("img/swiss-mentor.png")} style={{ width: 125 }} />
            <span>SwissMentor</span>
          </a>
        </div>
        <h3 className="title">Members 💪 and Backers ☕</h3>
        <a href="https://opencollective.com/typegraphql#contributors">
          <img src="https://opencollective.com/typegraphql/sponsors.svg?width=1024&button=false" />
        </a>
        <a href="https://opencollective.com/typegraphql#contributors">
          <img src="https://opencollective.com/typegraphql/backers.svg?width=1024&button=false" />
        </a>
      </div>
    </div>
  </>
);

const WantMoreSection = () => (
  <div className="want-more-section">
    <div className="productShowcaseSection" style={{ textAlign: "center" }}>
      <h2>Want more?</h2>
      That was only a tip of the iceberg. Interested?
      <br />
      Give it a try and experiment with TypeGraphQL! It will reduce your codebase size by a half or
      more!
      <br />
    </div>
    <div className="want-more-buttons">
      {/* <Button href={docUrl("getting-started.html", language)}>Getting started</Button>
      <Button href={docUrl("examples.html", language)}>Examples</Button> */}
    </div>
  </div>
);

// const Showcase = props => {
//   if ((siteConfig.users || []).length === 0) {
//     return null;
//   }
//   const showcase = siteConfig.users
//     .filter(user => {
//       return user.pinned;
//     })
//     .map((user, i) => {
//       return (
//         <a href={user.infoLink} key={i}>
//           <img src={user.image} title={user.caption} />
//         </a>
//       );
//     });

//   return (
//     <div className="productShowcaseSection paddingBottom">
//       <h2>{"Who's Using This?"}</h2>
//       <p>This project is used by all these people</p>
//       <div className="logos">{showcase}</div>
//       <div className="more-users">
//         <a className="button" href={pageUrl("users.html", props.language)}>
//           More {siteConfig.title} Users
//         </a>
//       </div>
//     </div>
//   );
// };

const Index = () => (
  <div>
    <HomeSplash />
    <div className="mainContainer">
      <Features />
      <DefineSchemaSection />
      <ResolversSection />
      <Validation />
      <InteroperableSection />
      <CollectiveSection />
      <WantMoreSection />
      {/* <Showcase language={language} /> */}
    </div>
  </div>
);

export default Index;
