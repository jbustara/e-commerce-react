import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Commodo elit aute velit duis dolore qui id ea laborum eu. Irure
            culpa nostrud ea est eiusmod incididunt eiusmod ea amet cupidatat id
            deserunt officia. Commodo aliquip pariatur pariatur enim occaecat
            amet aliqua veniam excepteur anim laboris officia eiusmod cupidatat.
            Ut duis incididunt adipisicing in consequat excepteur incididunt
            excepteur aute. Ullamco culpa et et aliquip sint aliqua culpa sunt
            duis magna adipisicing est duis. Ea deserunt esse aliquip est.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
