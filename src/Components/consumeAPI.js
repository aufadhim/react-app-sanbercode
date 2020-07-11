import React,{Component} from 'react';
import '../App.css';

export default class ConsumeAPI extends Component{
    constructor(props){
        super(props)
        this.state={
            items : [],
            isLoading : true
        }
    }

    coomponentDidMount(){
        fetch("http://newsapi.org/v2/everything?q=apple&from=2020-07-02&to=2020-07-02&sortBy=popularity&apiKey=9166bcc7e93b48d09be0f264ac02dfbd")
            .then(response => response.json())
            .then(data => this.setState({items:data,isLoading:false}))
    }

    render(){
        const {items,isLoading} = this.state
        if(isLoading){
            return(
            <div className="Content">
                <p>Loading.....</p>
            </div>);
        }
        return(
            <div className="Content">   
                <ul>
                    {items.map((item,index) => <li key={index}>{item.author}</li>)}
                </ul>
            </div>
        );
    }
}