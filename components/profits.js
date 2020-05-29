import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Link, Route, HashRouter, Redirect } from 'react-router-dom';
import App from '../src/index';


class Profits extends Component{
    state={
        profits:[]
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        fetch(`https://acme-users-api-rev.herokuapp.com/api/companies/${id}/companyProfits`)
            .then(res=>res.json())
            .then(data=>
                this.setState({
                    profits: `$${data[0].amount}`
                })
            )}

    componentDidUpdate(prevProps){
        const { id } = this.props.match.params;
        if(prevProps.match.params.id !== id){
            fetch(`https://acme-users-api-rev.herokuapp.com/api/companies/${id}/companyProfits`)
            .then(res=>res.json())
            .then(data=>
                this.setState({
                    profits: `$${data[0].amount}`
                })
                )}
            }
            
    render() {
        console.log(this.state.profits);
        return <h1>{this.state.profits}</h1>
    }
}

export default Profits;