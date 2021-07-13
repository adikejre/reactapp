let num=0;
let n=0;
var found=false;
var blockcells=new Map();
let animations=[];

class Queue extends Array {
    enqueue(val) {
        this.push(val);
    }

    dequeue() {
        return this.shift();
    }

    peek() {
        return this[0];
    }

    isEmpty() {
        return this.length === 0;
    }
}

let q = new Queue();
let path=[];
let visited=[]; 


function getneighbours(ele)
{
 var i,vert,no;

 let direction=[1,n,-n,-1];


 for(i=0;i<4;i++)
 {
     vert=ele+direction[i];

     if(vert>=0&&vert<num&&visited[vert]!=1&&!blockcells.has(vert))
     {
         if((ele%n==0&&vert==ele-1)||(vert%n==0&&ele==vert-1))
             continue;
         else{

         q.enqueue(vert);
         visited[vert]=1;
         path[vert]=ele;
         animations.push([vert]);
         }

     }
 }
 
}


export function bfspath(src,dst,ncols,blocks){
num=ncols**2;
n=ncols;
for(var x=0;x<num;x++)
{
    path.push([-1]);
    visited.push([0]);
}
found=false;
animations=[];

blockcells=new Map();
for(var y=0;y<blocks.length;y++)
{
    blockcells.set(blocks[y],blocks[y]);
}


    var ele=src;

    q.enqueue(src);
    visited[src]=1;

    while(!q.isEmpty())
    {
        ele=q.peek();
        animations.push([ele,ele]);
        q.dequeue();
        animations.push([ele,ele,ele]);


        if(ele==dst)
        {
            found=true;
            break;
        }
     getneighbours(ele);

    }
    // if(found==true)
    //     return true ;
    // else
    //     {

    //     return false;
    //     }

    if(found)
    {
    var jj=dst;
    while(jj!=-1)
    {

        animations.push([jj,jj,jj,jj]);
        jj=path[jj];
    }
    
   
}


    return animations

}