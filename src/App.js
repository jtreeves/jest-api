import { Route, Switch } from 'react-router-dom'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import Results from './components/pages/Results'
import './style/main.css'

function App() {
    return (
        <>
            <Header />

            <Switch>
                <Route 
                    exact path="/" 
                    component={Home} 
                />

                <Route 
                    path="/search" 
                    component={Search} 
                />

                <Route 
                    path="/results" 
                    component={Results} 
                />
            </Switch>

            <Footer />
        </>
    )
}

export default App