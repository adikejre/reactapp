import React, { Component } from 'react';
import './implementalgs_style.css'
import './editorstyle.css';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/snippets/javascript";
// Import a Mode (language)
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import axios from 'axios';
import 'brace/theme/monokai';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// Import a Theme (okadia, github, xcode etc)



class Implementalgos extends Component {
    state = { 
        language:"javascript",
        apiname:"nodejs",
        snippet:"console.log('hello worldddd!')",

        options :[

            { value: 'javascript', label: 'Javascript' },
            { value: 'python', label: 'Python'},
            { value: 'java', label: 'Java' },
            { value: 'c_cpp', label: 'C++' },

            


            // 'javascript', 'python', 'java','C++'
          ],


     }
    constructor(props) {
        super(props);
        this.refName = React.createRef();
      }

componentDidMount(){

    
//     <Helmet>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.5/ace.js"
//         type="text/javascript">
//     </script>
// </Helmet>

// var editor = ace.edit("editor",{minLines: 2});
//     editor.setTheme("ace/theme/monokai");
// editor.resize()

// editor.getSession().setMode("ace/mode/javascript");
}

initeditor=()=>{
    const selectedText = this.refName.current.editor.getValue()
    console.log(selectedText);



const lang=this.state.apiname;
const editordata={selectedText,lang};



axios.post('http://localhost:4000/runcode',editordata).then((response) => {console.log('Data sent'); 


var finaloutput=response.data.output;
var cputime=response.data.cpuTime;

console.log(finaloutput);
console.log(cputime);


console.log(response.data);})


.catch(err => {
  console.error(err);
});




    // fetch('/runcode' , {
    //     method: "POST",
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
        
    //        body: JSON.stringify(jsondata)
        
        
    // }
    // ).then((result) => {
    //     console.log(result)
    //   })


    



}

onSelectlang=(option)=>{
   console.log("l",option);
   var aname="java";
   var snip= `class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}`

   if(option.value==="javascript")
{
    aname="nodejs";
    snip=`console.log('hello worldddd!')`;

}

   if(option.value==="c_cpp")
   {aname="cpp17";
    snip=`#include <iostream>

    int main() {
        std::cout << "Hello World!";
        return 0;
    }`;
}

   if(option.value==="python")
   {aname="python3";
   snip=`def my_function():
   print("Hello World")`;

}
   


    this.setState({
        language:option.value,
        apiname:aname,
        snippet:snip
        
    })
    
}



    render() { 
        var language=this.state.language;
        var apiname=this.state.apiname;
        return ( 
            <React.Fragment>
{language}
{apiname}
<div class="lang_select">
<Dropdown options={this.state.options} onChange={this.onSelectlang} value="Javascript" placeholder="Select an option" />
</div>

<div id="editor">
<AceEditor 
ref={this.refName}
mode={language}
theme="monokai" 
className="editor"
width='100%'
enableSnippets={true}
focus={true}
enableLiveAutocompletion={true}
value={this.state.snippet}
enableBasicAutocompletion={true}

setOptions={{
    
    focus:true,
    fontSize:15
  }}

/>

    
</div>

<button onClick={this.initeditor}>click</button>






            </React.Fragment>
         );
    }
}
 
export default Implementalgos;