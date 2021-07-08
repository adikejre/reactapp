import React, { Component } from 'react';
import mergeimg from './mergeimg.png';
import {Helmet} from "react-helmet";
class Sortinginfo extends Component {
    state = {  }
    render() { 




        return (
        <React.Fragment>


<Helmet>
<script src=
"https://www.jdoodle.com/assets/jdoodle-pym.min.js"
        type="text/javascript">
    </script>
</Helmet>

<div data-pym-src=
"https://www.jdoodle.com/embed/v0/3qNY">
    </div>
            
        <h3>Sorting Techniques Explained</h3> 
        <div class="sortingalgos">
            <p>
        1. Merge Sort:
        Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
       The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
        </p>
        <img src={mergeimg}></img>
        Try it out yourself!
        </div>
        
        </React.Fragment>
        
            
            
            
            
            );

    }
}
 
export default Sortinginfo;