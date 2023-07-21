
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './page/Contact'
import Home from './page/Home';
import {data} from './page/Db'

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {data.map( item => 
                <Route key={item.id} exact path={`/contact/${item.id}`} element={<Contact data={item} />} />
                )}
            </Routes>
        </Router>
    );
}

export default App