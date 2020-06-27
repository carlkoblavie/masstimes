import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import ChurchServiceWrapper from '../churchServiceWrapper'
export default function StRaphael() {
  return (
    <div>
      <Header as="h3">
        St. Raphael the Archangel Catholic Church
        <Header.Subheader>Community 18 Lashibi, Tema</Header.Subheader>
      </Header>
      <p>Mass Schedules</p>
      <Divider visible />
      <ChurchServiceWrapper
        church="St. Raphael the Archangel Catholic Church"
        day="Sat. 26 June"
        time="7:00PM"
        closed
      ></ChurchServiceWrapper>
      <Divider hidden />
      <ChurchServiceWrapper
        church="St. Raphael the Archangel Catholic Church"
        day="Sun. 27 June"
        time="7:00AM"
        closed
      ></ChurchServiceWrapper>
      <Divider hidden />
      <ChurchServiceWrapper
        church="St. Raphael the Archangel Catholic Church"
        day="Sun. 27 June"
        time="9:00AM"
        closed
      ></ChurchServiceWrapper>
      <Divider hidden />
      <ChurchServiceWrapper
        church="St. Raphael the Archangel Catholic Church"
        day="Sun. 27 June"
        time="12:00PM"
        closed
      ></ChurchServiceWrapper>
      <Divider hidden />
      <ChurchServiceWrapper
        church="St. Raphael the Archangel Catholic Church"
        day="Sun. 27 June"
        time="6:00PM"
      ></ChurchServiceWrapper>
    </div>
  )
}
