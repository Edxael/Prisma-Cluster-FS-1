import React from 'react'
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Style/style.css'
import { client } from './PrismaEndPoint/EndPoint'

import Home from './01-Home'
import Singers from './02-AddSingers'
import Update1 from './03-UpdateSinger'
import Delete1 from './04-DeleteSinger'


export default class extends React.Component{
    render(){

        return(
            <ApolloProvider client={client}>
                <Router>
                    <div>
                
                        <div className="menu1">
                            <Link className="menuButton" to="/">Home Page</Link>
                            <Link className="menuButton" to="/2">Add-Singer</Link>
                            <Link className="menuButton" to="/3">Update-Singer</Link>
                            <Link className="menuButton" to="/4">Delete-Singer</Link>
                        </div>
                
                        <hr/>
                
                        <Route exact path="/" component={Home}/>
                        <Route path="/2" component={Singers}/>
                        <Route path="/3" component={Update1}/>
                        <Route path="/4" component={Delete1}/>
                
                    </div>
                </Router>
            </ApolloProvider>
        )
    }
}

