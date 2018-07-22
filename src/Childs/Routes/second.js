import React,{Component} from 'react';
import { SecondHelper } from './secondHelper';
import '../CSS/second.css';

export default class Second extends Component{

constructor(){
    super();
    this.state={Order:'',bacon:0,cheese:0,Amount:10};
    this.order='';
    this.CheeseDone='hide';
    this.BaconDone='hide';
}

Add(event){
    this.order = event.target.getAttribute('myvalue');
    if(this.order=='bacon'){
        this.setState({...this.state,'Order':this.order,'bacon':this.state.bacon+1,'Amount':this.state.Amount+2},()=>{
            if(this.state.bacon>=5){
                this.BaconDone='';
                this.setState({...this.state});
            }
            else{
                this.BaconDone='hide';
                this.setState({...this.state});
            }
        });
        
    }
    else{
        this.setState({...this.state,'Order':this.order,'cheese':this.state.cheese+1,'Amount':this.state.Amount+1},()=>{
            if(this.state.cheese>=3){
                this.CheeseDone='';
                this.setState({...this.state});
            }
            else{
                this.CheeseDone='hide';
                this.setState({...this.state});
            }
        });    
    }
    
    // console.log("INSIDE");
}

Remove(event){
    this.order = event.target.getAttribute('myvalue');
    if(this.order=='bacon'){
        // this.order=this.order/5;
    this.setState({...this.state,'Order':this.order,'bacon':this.state.bacon-1,'Amount':this.state.Amount-2},()=>{
        if(this.state.bacon>=5){
            this.BaconDone='';
            this.setState({...this.state});
        }
        else{
            this.BaconDone='hide';
            this.setState({...this.state});
        }
    });
    }
    else{
        this.setState({...this.state,'Order':this.order,'cheese':this.state.cheese-1,'Amount':this.state.Amount-1},()=>{
            if(this.state.cheese>=3){
                this.CheeseDone='';
                this.setState({...this.state});
            }
            else{
                this.CheeseDone='hide';
                this.setState({...this.state});
            }
        });
    }
}

render(){
    return(
        <div>
           <h3 className="middle">Add Elements to Your Burger</h3>
           <div className="middle">
            <button myvalue="bacon" disabled={this.state.bacon==5} onClick={this.Add.bind(this)}>Add Bacon</button>
            <button myvalue="cheese" disabled={this.state.cheese==3} onClick={this.Add.bind(this)}>Add Cheese</button>
            <button myvalue="bacon" disabled={!this.state.bacon} onClick={this.Remove.bind(this)}>Remove Bacon</button>
            <button myvalue="cheese" disabled={!this.state.cheese} onClick={this.Remove.bind(this)}>Remove Cheese</button>
            </div>
            <br/><br/>
            <h2 className="middle">Total Amount: <span style={{'color':'green'}}>&#8377; {this.state.Amount | 0}</span></h2>
            <SecondHelper Order={this.state.Order} States={this.state}/>
            <br/>
            <h4 style={{'color':'red'}} className={this.CheeseDone}>No more Cheese</h4>
            <h4 style={{'color':'red'}} className={this.BaconDone}>No more Bacon</h4>
        </div>
    )
}
}