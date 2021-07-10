import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Counter from './components/counter';
import Sortinginfo from './components/sortinginfo';
import Sortexecute from './components/sortexecute';
import Implementalgos from './components/implementalgos';
import Heapsortcode from './components/heapsortcode';
import Quicksortcode from './components/quicksortcode';

import Cliques from './components/clique2';
import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(
<Router><React.Fragment>

    <Switch>
    <Route exact path="/visualizesorting">
        <Counter />
    </Route>
     <Route exact path="/sortinfo">
        <Sortinginfo />
    </Route >
    <Route exact path="/sortexecute">
<Sortexecute/>
    </Route>

<Route exact path="/implementalgos">
<Implementalgos/>
</Route>

<Route exact path="/heapsortcode">
<Heapsortcode/>
</Route>

<Route exact path="/quicksortcode">
<Quicksortcode/>
</Route>

<Route exact path="/cliques">
    <Cliques/>
</Route>


</Switch> </React.Fragment></Router>
 , document.getElementById('root'));

//ReactDOM.render(<Sortinginfo />, document.getElementById('root'));