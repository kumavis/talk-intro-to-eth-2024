import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, Slide, FlexBox, Heading, SpectacleLogo } from 'spectacle'

const theme = {
  colors: {
    primary: 'white',
    secondary: 'reg',
    tertiary: 'black',
    quaternary: 'blue',
  },
  fonts: {
    header: 'Montserrat, sans-serif',
    text: 'Lato, sans-serif',
  },
}

const BlurHeading = (props: any) => (
  <Heading {...props} style={{
    textShadow: '2px 2px 1px red, -2px -2px 1px blue'
  }} />
)

const Presentation = () => (
  <Deck theme={theme} template={() => <DefaultTemplate />}>
    <Slide>
      <FlexBox height="100%">
        <BlurHeading>cryptography</BlurHeading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <BlurHeading>blockchain</BlurHeading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <BlurHeading>ethereum</BlurHeading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <BlurHeading>eth roadmap</BlurHeading>
      </FlexBox>
    </Slide>
    
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);