
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './page/Contact'

data = [
    {
        id: 1,
        name: Tohir,
    }
]

function App() {

    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Home />}></Route> */}
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App