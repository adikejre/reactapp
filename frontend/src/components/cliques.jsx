import React, { Component } from 'react';
import { useState } from "react";
import './cliquestyle.css';
import { Line } from 'react-lineto';
import person from './person.png';
import greenimg from './greenimg.png';
import Draggable from 'react-draggable';
import { SteppedLineTo } from 'react-lineto';
import LineTo from 'react-lineto';
import { Button } from 'bootstrap';
import * as linefn from './clique1lines.js';



class Cliques extends Component {
    state = { 
   
disparr:[],
numnodes:8,

line1:true,
node1x:0,
node1y:0,
node2x:0,
node2y:0,



     }


// componentDidMount(){
//     setTimeout(()=>{
//         <LineTo from="node1" to="node2"  />


//     },100);
// }

    
 trackPos=(data)=>{
this.setState({
    node1x:data.x,
    node1y:data.y
    
})

//console.log(data.x);
//console.log(data.y);
};




makeline2=()=>{




var num=this.state.numnodes;
const dispgraph=linefn.gengraph(num);

// console.log(dispgraph);


    
this.setState({
disparr:dispgraph
})


  


}


nodeclicked=(node_name)=>{


    var mynode=document.getElementsByClassName(node_name.mynode);
    var mycolor=mynode[0].style.backgroundImage;
    console.log(mycolor);
    if(mycolor=="linear-gradient(blue, blue)")
     {mynode[0].style.backgroundImage=`url(${person})`;
     mynode[0].style.height="60px";
    }
     else
     {mynode[0].style.backgroundImage=`linear-gradient(blue, blue)`;
     mynode[0].style.height="59px";
    }


    //  mynode[0].style.backgroundImage=`url(${greenimg})`;

}





    render() { 
const dispgraph=this.state.disparr;
const numnodes=this.state.numnodes;
const nodepos=[];
for(var x=1;x<=numnodes;x++)
{
    nodepos.push(x);
}

//console.log(dispgraph);

        return (  <React.Fragment>


{/* <button onClick={this.makeline2}>makeline</button>
 */}

<button onClick={()=>{this.setState({numnodes:this.state.numnodes+1})}}>Add nodes</button>
<button onClick={this.makeline2}>makeline</button>
<button onClick={linefn.viewsoln}>Get Solution</button>
<button onClick={linefn.checksol}>Check Solution</button>
<button onClick={()=>{this.setState({numnodes:this.state.numnodes-1})}}>Remove nodes</button>



{dispgraph.map((item, idx) => {

     
    const[n1,n2]= item;
    var st=`node${n1}`;
    var end=`node${n2}`;
    //console.log(st,end);

    return(
        <LineTo from={st} to={end} key={idx.valueOf()} borderColor="black" borderWidth={2} />

    )

})}


{nodepos.map((item,index)=>{
var mynode=`node${item}`;
var xpos=50*(index+1);
var ypos=30*(index+1);
let xdpos=xpos.valueOf();
xdpos=Math.floor(Math.random() * (850 - 10) + 10);
let ydpos=ypos.valueOf();
ydpos=Math.floor(Math.random() * (90 - 80) + 80);



return(

    <React.Fragment>

        
        <Draggable  defaultPosition={{x: xdpos, y: ydpos}} key={index.valueOf()} onDrag={(e, data) => {this.trackPos(data)}} >
        <div className={mynode} onClick={()=>this.nodeclicked({mynode})}  style={{height:60 ,width:60, borderRadius:"50%",backgroundImage:`url(${person})`, margin:20,backgroundPosition: 'center',
  backgroundSize: 'cover',
  cursor:"pointer",
  backgroundRepeat: 'no-repeat' }} >
        </div>
        </Draggable>
    </React.Fragment>

)

})}







            {/* <Draggable onDrag={(e, data) => {this.trackPos(data)}}>
                <div className="node1">
                    <img className="personimg" src={person}></img>
                </div>
            </Draggable>


            <Draggable onDrag={(e, data) => {this.trackPos(data)}}>
                <div className="node2">
                    
                </div>
            </Draggable>

            <Draggable onDrag={(e, data) => {this.trackPos(data)}}>
                <div className="node3">
                    
                </div>
            </Draggable> */}


            

        {/* {this.state.line1&&<LineTo from="node1" to="node2"  />} */}
          
        {/* {this.state.line1&&React.createElement(LineTo, {
  from: "node1",
  to: "node2"
})}
 */}




{/* {items.map((item, index) => {})} */}
        


            {/* <Line x0={20} y0={50} x1={10} y1={80} /> */}




        </React.Fragment>);
    }
}
 
export default Cliques;