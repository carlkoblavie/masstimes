import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Container, Segment } from 'semantic-ui-react'
import history from './utils'
import churches from './churches'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import StRaphael from './massServices/stRaphael'
import StJoseph from './massServices/stJoseph'
import StBakhita from './massServices/stBakhita'
import DonBosco from './massServices/donBosco'
import CorpusChristi from './massServices/corpusChristi'
import MaryMotherOfGod from './massServices/maryMotherOfGod'

const source = churches()
const initialState = { isLoading: false, results: [], value: '' }

export default class SearchChurch extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title })
    console.log('state', this.state.results)
    window.location.href = 'http://' + window.location.host + '/' + result.url
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Container>
        <Grid>
          <Grid.Column width={12}>
            <Search
              className="church-search"
              fluid
              aligned="right"
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              value={value}
              {...this.props}
            />
          </Grid.Column>
        </Grid>
        <Router history={history}>
          <Segment>
            <Switch>
              <Route exact path="/StRaphaelTema">
                <StRaphael />
              </Route>
              <Route exact path="/StJosephTema">
                <StJoseph />
              </Route>
              <Route exact path="/StBakhitaTema">
                <StBakhita />
              </Route>
              <Route exact path="/DonBoscoTema">
                <DonBosco />
              </Route>
              <Route exact path="/CorpusChristiTema">
                <CorpusChristi />
              </Route>
              <Route exact path="/MaryMotherOfGodTema">
                <MaryMotherOfGod />
              </Route>
            </Switch>
          </Segment>
        </Router>
      </Container>
    )
  }
}
