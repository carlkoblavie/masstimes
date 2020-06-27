import React from 'react'
import { Divider, Header } from 'semantic-ui-react'
import ChurchServiceWrapper from '../churchServiceWrapper'
export default function StRaphael() {
  return (
    <div>
      <Header as="h3">
        Corpus Christi Catholic Church
        <Header.Subheader>Community 16 Sakumono, Tema</Header.Subheader>
      </Header>
      <p>Mass Schedules</p>
      <Divider visible />
      <ChurchServiceWrapper day="Sun. 27 June" time="6:30AM" closed />
      <Divider hidden />
      <ChurchServiceWrapper day="Sun. 27 June" time="9:00AM" closed />
    </div>
  )
}
