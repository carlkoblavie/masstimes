import React from 'react'
import { Divider, Header } from 'semantic-ui-react'
import ChurchServiceWrapper from '../churchServiceWrapper'
export default function StRaphael() {
  return (
    <div>
      <Header as="h3">
        Don Bosco Catholic Church
        <Header.Subheader>Golf City, Tema</Header.Subheader>
      </Header>
      <p>Mass Schedules</p>
      <Divider visible />
      <ChurchServiceWrapper
        day="Sun. 27 June"
        time="7:00AM"
      ></ChurchServiceWrapper>
    </div>
  )
}
