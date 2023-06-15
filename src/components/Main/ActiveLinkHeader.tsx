import styled from '@emotion/styled'
import React, { ReactElement } from 'react'

const Section = styled.section<{ clr: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8em;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  background: ${({ clr }) => clr};
`

const sectionColors = {
  home: 'yellow',
  about: 'blue',
  posts: 'beige',
  portfolio: 'violet',
  contact: 'white',
}

type ActiveLinkHeaderProps = {
  isSignedIn: boolean
}

export default function ActiveLinkHeader(): ReactElement<ActiveLinkHeaderProps> {
  return (
    <>
      <header>
        <a href="#">Logo</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#posts">Posts</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <Section id="home" clr={sectionColors['home']}>
        home
      </Section>
      <Section id="about" clr={sectionColors['about']}>
        about
      </Section>
      <Section id="posts" clr={sectionColors['posts']}>
        posts
      </Section>
      <Section id="portfolio" clr={sectionColors['portfolio']}>
        portfolio
      </Section>
      <Section id="contact" clr={sectionColors['contact']}>
        contact
      </Section>
    </>
  )
}
