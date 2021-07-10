import React, { Component } from 'react';
import { useState } from "react";
import './cliquestyle.css';
import { Line } from 'react-lineto';
import person from './person.png';
import Draggable from 'react-draggable';
import { SteppedLineTo } from 'react-lineto';
import LineTo from 'react-lineto';
import { Button } from 'bootstrap';




class Cliques extends Component {
    state = { 
   



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

console.log(data.x);
console.log(data.y);
};


makeline=()=>{
    this.setState({
        line1:true
    })

    setTimeout(()=>{
        <LineTo from="node1" to="node2"  />
    console.log("mak");


    },1000);


}

makeline2=()=>{
//   return  (React.createElement(LineTo, {
//         from: "node1",
//         to: "node2"
//       }))


var num=3;
var i,j,n,no;

no=num*(num-1)/2;
//n=Math.floor((Math.random() * (no-num+1) ) + num) ;

n=Math.floor(Math.random() * (+no + 1 - +num/2)) + Math.floor(+num/2) +1 ;
if(n>no){
  n=no;
}

var graph=[];
graph=new Array(n);
for(i=0;i<n;i++)
graph[i]=new Array(0,0);
var temp=-1,temp1=-1;
for(i=0;i<n;i++)
{

  temp1=Math.floor((Math.random() * num) + 1);

  temp=Math.floor((Math.random() * num) + 1);
  while(temp==temp1)
  {
    temp=Math.floor((Math.random() * num) + 1);
  }
  var f=0;
  for(var k=0;k<n;k++)
  {
    if(graph[k][0]==temp1&&graph[k][1]==temp || (graph[k][0]==temp&&graph[k][1]==temp1))
    {
      f=1;
      break;
    }
  }
  if(f==1)
  {
    i--;
    continue;
  }
  graph[i][0]=temp1;
  graph[i][1]=temp;
}

for(i=0;i<n;i++){
    console.log(graph[i][0]+" "+graph[i][1]);
    //console.log();
  }
  console.log("\n");

return n;

}





    render() { 
        return (  <React.Fragment>


<button onClick={this.makeline2}>makeline</button>



            <Draggable onDrag={(e, data) => {this.trackPos(data)}}>
                <div className="node1">
                    <img className="personimg" src={person}></img>
                </div>
            </Draggable>


            <Draggable onDrag={(e, data) => {this.trackPos(data)}}>
                <div className="node2">
                    {/* <img className="personimg" src={person}></img> */}
                </div>
            </Draggable>

            <Draggable onDrag={(e, data) => {this.trackPos(data)}}>
                <div className="node3">
                    {/* <img className="personimg" src={person}></img> */}
                </div>
            </Draggable>
            

        {/* {this.state.line1&&<LineTo from="node1" to="node2"  />} */}
          
        {this.state.line1&&React.createElement(LineTo, {
  from: "node1",
  to: "node2"
})}





{/* {items.map((item, index) => {})} */}
        


            {/* <Line x0={20} y0={50} x1={10} y1={80} /> */}




        </React.Fragment>);
    }
}
 
export default Cliques;