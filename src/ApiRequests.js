import React, { Component } from 'react'
import axios from 'axios'
export default class ApiRequests extends Component {
    constructor(){
        super();
        this.state = {
            arr : []
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all').then(
            (posRes) => {
                this.setState({arr: posRes.data})
            },
            (errRes)=>{
                    console.log(errRes);
            }
        )
    }
    render() {
        return (
            <div>
              <table border="1" align="center">
                  <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Flag</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.arr.map(
                          (el,i)=>(
                              <tr key={i}>
                                  <td>
                                    {i+1}
                                  </td>
                                  <td>
                                    {el.name}
                                  </td>
                                  <td>
                                    {el.capital}
                                  </td>
                                  <td>
                                    <img src={el.flag} alt={el.name} size="100px" height="50px"/>
                                  </td>
                              </tr>
                      )
                      )}
                  </tbody>
                  </table>  
            </div>
        )
    }
    
}

