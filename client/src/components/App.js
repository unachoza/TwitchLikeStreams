import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
    return (
        <div>
            PageOne<br/>
            <Link to="/pagetwo"><button>Back</button></Link>
        </div>
    )
}
const PageTwo = () => {
    return (
        <div>
            PageTwo<br/>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
    
}
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/"  exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App