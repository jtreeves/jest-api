import { Route, Switch } from 'react-router-dom'
import Header from './components/partials/Header'
import Navigation from './components/partials/Navigation'
import Footer from './components/partials/Footer'
import Home from './components/pages/Home'
import './style/main.css'

function App() {
    return (
        <>
            <Header />

            <Navigation />

            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>

            <Footer />
        </>
    )
}

export default App