import React from 'react'
import { Divider, Header } from 'semantic-ui-react'
import ChurchServiceWrapper from '../churchServiceWrapper'
export default function StRaphael() {
  return (
    <div>
      <Header as="h3">
        Mary Mother of God Catholic Church
        <Header.Subheader>New Dawhenya Prampram, Tema</Header.Subheader>
      </Header>
      <p>Mass Schedule</p>
      <Divider visible />
      <ChurchServiceWrapper
        day="Sun. 27 June"
        time="7:00AM"
        closed
      ></ChurchServiceWrapper>
    </div>
  )
}
