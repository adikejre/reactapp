import React, { Component } from 'react';
import './mazestyle.css'
import Button from 'react-bootstrap/Button';
import * as pathans from '../mazealgos/mazeans';

class Mazesolver extends Component {
    state = {  
        colnum:20,
        src:0,
        dst:0,
        blocks:[]
    }


genmaze=()=>{
const cells=document.getElementsByClassName("cell");
console.log(cells[0].style.backgroundColor);

const n=this.state.colnum**2;
let blockcells=[];


for(var i=0;i<n;i++)
{
    cells[i].style.backgroundColor="white";
    var prob=Math.random() * (100 - 1) + 1;
    if(prob<20)
    {
        cells[i].style.backgroundColor="black";
        blockcells.push(i);
    }
}
this.setState({
    blocks:blockcells
})

for(var i=0;i<n;i++)
{
    if(cells[i].style.backgroundColor=="white")
    {
        cells[i].style.backgroundColor="yellow";
        // cells[i].innerText="S";
        this.setState({
            src:i
        })
        break;
    }

    
}
for(var i=n-1;i>=0;i--)
{
    if(cells[i].style.backgroundColor=="white")
    {
        cells[i].style.backgroundColor="Green";
        this.setState({
            dst:i
        })
        // cells[i].innerText="E";
        break;
    }

}


}

mazeanimate=()=>{
    const start=this.state.src;
    const end=this.state.dst;
    const cols=this.state.colnum;
    const obstruct=this.state.blocks;
    const animate=pathans.bfspath(start,end,cols,obstruct);
    //console.log(animate);
    const alen=animate.length;
const cells=document.getElementsByClassName("cell");


    for(let i=0;i<alen;i++)
    {
        if(animate[i].length==1)
        {
            const[node]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="orange";

            },i*10);

        }
        else if(animate[i].length==2)
        {
            const[node,node2]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="yellow";

            },i*10);

        }
      else if(animate[i].length==3)
        {
            const[node,node2]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="white";

            },i*10);

        }
        else{
            const[node,node2]=animate[i];

                setTimeout(()=>{
                    cells[node].style.backgroundColor="green";
    
                },i*10);
            
        }

    }
}


dfsmazeanimate=()=>{
    const start=this.state.src;
    const end=this.state.dst;
    const cols=this.state.colnum;
    const obstruct=this.state.blocks;
    const animate=pathans.dfspath(start,end,cols,obstruct);
    //console.log(animate);
    const alen=animate.length;
const cells=document.getElementsByClassName("cell");
for(let i=0;i<alen;i++)
    {
        if(animate[i].length==1)
        {
            const[node]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="orange";

            },i*10);

        }
        else if(animate[i].length==2)
        {
            const[node,node2]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="yellow";

            },i*10);

        }
      else if(animate[i].length==3)
        {
            const[node,node2]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="white";

            },i*10);

        }
        else{
            const[node,node2]=animate[i];

                setTimeout(()=>{
                    cells[node].style.backgroundColor="green";
    
                },i*10);
            
        }

    }



}




    render() { 

const colnum=this.state.colnum;
const cellnum=colnum**2;
const griddim=window.innerWidth*0.75;
const mygrid=[];
for(var x=1;x<=cellnum;x++)
mygrid.push(x);

        return ( 
            <React.Fragment>
                <Button onClick={this.genmaze}>Generate maze</Button>
                <Button onClick={this.mazeanimate}>Solve maze</Button>
                <Button onClick={this.dfsmazeanimate}>Dfs maze</Button>



                <div className="mymaze" display="grid" width="70%" style= {{height:`${griddim}px`,width:`${griddim}px`,gridTemplateColumns: `repeat(${colnum}, auto)`} }>
                

                    {mygrid.map((item,idx)=>{
                    //console.log(item);

                        return(
                            <div className="cell" id={idx} key={idx}  padding="20px" border="1px" style={{backgroundColor:"white"}} >

                            {/* {idx} */}
                            </div>
                        )

                    })}

                </div>



            </React.Fragment>
         );
    }
}
 
export default Mazesolver;