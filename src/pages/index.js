import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <h1>High School Materials</h1>
      <ul>
        <li>
          <a href="https://slides.com/funkfinger/coding-as-art-1">
            First Days Slides - Coding as Art I
          </a>
        </li>
        <li>
          <a href="slides/first-days-caa2/slides-coding-as-art-2-first-days.html">
            First Days Slides - Coding as Art II
          </a>
        </li>
      </ul>
      <h1>Code Examples</h1>
      <ul>
        <li>
          <a href="code/object-1/index.html">Object 1</a>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <title>PCDS Coding as Art - Course Information</title>
);
