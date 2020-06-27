import React from 'react'
import { Divider, Header } from 'semantic-ui-react'
import ChurchServiceWrapper from '../churchServiceWrapper'
export default function StRaphael() {
  return (
    <div>
      <Header as="h3">
        St. Bakhita Catholic Church
        <Header.Subheader>Community 20, Sakumono, Tema</Header.Subheader>
      </Header>
      <p>Mass Schedules</p>
      <Divider visible />
      <ChurchServiceWrapper
        day="Sat. 26 June"
        time="7:00PM"
        status="closed"
      ></ChurchServiceWrapper>
      <Divider hidden />
      <ChurchServiceWrapper
        day="Sun. 27 June"
        time="7:00AM"
        closed
      ></ChurchServiceWrapper>
      <Divider hidden />
      <ChurchServiceWrapper
        day="Sun. 27 June"
        time="9:00AM"
        closed
      ></ChurchServiceWrapper>
      <Divider hidden />
      <ChurchServiceWrapper
        day="Sun. 27 June"
        time="12:00PM"
      ></ChurchServiceWrapper>
      <Divider hidden />
      <ChurchServiceWrapper
        day="Sun. 27 June"
        time="6:00PM"
      ></ChurchServiceWrapper>
    </div>
  )
}
