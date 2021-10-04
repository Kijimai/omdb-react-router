import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Movie from "./components/SingleMovie"
import Error from "./components/Error"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies/:id" children={<Movie />} />
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  )
}

export default App
