import React from 'react'
import Landing from '../Landing'
import Adopt from '../Adopt'
import Adopt2 from '../Adopt2'
import { Switch } from 'react-router-dom'


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Petful</h1>
        <Switch>
          <Landing exact path={'/'} />
          <Adopt2 path={'/adopt'} />
        </Switch>
      </div>
    )
  }
}

export default Root
