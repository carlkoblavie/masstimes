import React from 'react'
import { Button, List } from 'semantic-ui-react'
import RegModal from './regModal'
const ChurchServiceWrapper = ({ day, time, closed }) => (
  <>
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          {closed ? (
            <Button disabled color="black">
              Reg. Closed
            </Button>
          ) : (
            <RegModal day={day} time={time} />
          )}
        </List.Content>
        <List.Content>
          <strong>{day}</strong> <em>{time}</em>
        </List.Content>
      </List.Item>
    </List>
  </>
)

export default ChurchServiceWrapper
