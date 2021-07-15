import React, { Component } from 'react';
import './mazestyle.css'
import Button from 'react-bootstrap/Button';
import * as pathans from '../mazealgos/mazeans';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'; 

class Mazesolver extends Component {
    state = {  
        colnum:25,
        src:0,
        dst:0,
        blocks:[],
        speedOfAnim:10
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
        cells[i].style.backgroundColor="red";
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
    const speedanim=this.state.speedOfAnim;
    const start=this.state.src;
    const end=this.state.dst;
    const cols=this.state.colnum;
    const obstruct=this.state.blocks;
    const animate=pathans.bfspath(start,end,cols,obstruct);
    //console.log(animate);
    const alen=animate.length;
const cells=document.getElementsByClassName("cell");
let ccolor=true;

    for(let i=0;i<alen;i++)
    {
        if(animate[i].length==1)
        {
            
             const[node]=animate[i];
            setTimeout(()=>{
             cells[node].style.backgroundColor="orange";

            },i*speedanim);
        
        

        }
        else if(animate[i].length==2)
        {
            if(ccolor)
            {
                const[node,node2]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="yellow";

            },i*speedanim);
            ccolor=false;
        }
            else{
                const[node,node2]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="white";

            },i*speedanim);
            ccolor=true;

            }

        }
    //   else if(animate[i].length==3)
    //     {
    //         const[node,node2]=animate[i];
    //         setTimeout(()=>{
    //             cells[node].style.backgroundColor="white";

    //         },i*speedanim);

    //     }
        else{
            const[node,node2]=animate[i];

                setTimeout(()=>{
                    cells[node].style.backgroundColor="green";
    
                },i*speedanim);
            
        }

    }
}


dfsmazeanimate=()=>{
    const speedanim=this.state.speedOfAnim;
    const start=this.state.src;
    const end=this.state.dst;
    const cols=this.state.colnum;
    const obstruct=this.state.blocks;
    const animate=pathans.dfspath(start,end,cols,obstruct);
    console.log(animate);
    const alen=animate.length;
const cells=document.getElementsByClassName("cell");
let ccolor=true;

for(let i=0;i<alen;i++)
    {
        if(animate[i].length==2)
        {
            if(ccolor)
            {
                const[node]=animate[i];
                setTimeout(()=>{
                cells[node].style.backgroundColor="yellow";

            },i*speedanim);
            ccolor=false;
        }
        else{
            const[node]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="white";

            },i*speedanim);
            
            ccolor=true;


        }

        }
        else if(animate[i].length==1)
        {
            const[node]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="orange";

            },i*speedanim);

        }
    //   else if(animate[i].length==3)
    //     {
    //         const[node,node2]=animate[i];
    //         setTimeout(()=>{
    //             cells[node].style.backgroundColor="white";

    //         },i*speedanim);

    //     }
        else if(animate[i].length==3){
            const[node,node2]=animate[i];

                setTimeout(()=>{
                    cells[node].style.backgroundColor="green";
    
                },i*speedanim);
            
        }
        // else{
        //     const [node]=animate[i];
        //     for( let itm in node)
        //     {
        //         console.log(itm);
        //         cells[itm].style.backgroundColor="white";

        //     }
        // }

    }



}

handleChangeDims=(value)=>{
this.setState({
    colnum:value
})
this.genmaze();
}

handleSpeed=(value)=>{
    this.setState({
        speedOfAnim:value
    })
}




    render() { 
const speedOfAnim=this.state.speedOfAnim;
const colnum=this.state.colnum;
const cellnum=colnum**2;
const griddim=window.innerWidth*0.75;
const mygrid=[];
for(var x=1;x<=cellnum;x++)
mygrid.push(x);

        return ( 
            <React.Fragment>


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
    Path Finding
      <h3 class="navbar-brand" ><h1>Path Finding</h1></h3>
    </div>
    <button  class="btn btn-success navbar-btn" onClick={this.genmaze} style={{ margin: "2px" }}> Generate Maze </button>
    <button  class="btn btn-success navbar-btn" onClick={this.mazeanimate} style={{ margin: "2px" }}> BFS </button>
    <button  class="btn btn-success navbar-btn" onClick={this.dfsmazeanimate} style={{ margin: "2px" }}> DFS </button>
   

    <ul class="nav navbar">
      <li class="links"><a href="#" class="links">Home</a></li>
      
    </ul>
   
    
  </div>
</nav>


                {/* <Button onClick={this.genmaze}>Generate maze</Button>
                <Button onClick={this.mazeanimate}>Solve maze</Button>
                <Button onClick={this.dfsmazeanimate}>Dfs maze</Button> */}


<div className="allbtns">
    <div className='sliderdims' style={{ marginLeft:"20px"}}>
            <h4>Maze Size</h4>
               <Slider
              min={5}
              max={120}
              value={colnum}
             // onChangeComplete={this.handlecompleteanim}
              onChange={this.handleChangeDims}
    
            />
          </div>
          <div className='speedslider' style={{ marginLeft:"20px"}}>
            <h4>Animation Speed</h4>
               <Slider
              min={1}
              max={50}
              value={speedOfAnim}
             // onChangeComplete={this.handlecompleteanim}
              onChange={this.handleSpeed}
    
            />
          </div>
</div>





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