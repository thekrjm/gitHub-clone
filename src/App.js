import { Route, Routes } from 'react-router-dom';
import Issue from './pages/Issue.js';
import New from './pages/New.js';
import Projects from './pages/Projects.js';
import PullsRequest from './pages/PullsRequest.js';
import Code from './pages/Code.js';
import Security from './pages/Security.js';
import Actions from './pages/Actions.js';
import Header from './Header.js';
import Nav from './components/Nav.js';

function App() {
    return (
        <>
            <Nav />
            <Header />
            <Routes>
                <Route path="/" element={<Issue />} />
                <Route path="/issue" element={<Issue />} />
                <Route path="/new" element={<New />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/pulls" element={<PullsRequest />} />
                <Route path="/code" element={<Code />} />
                <Route path="/security" element={<Security />} />
                <Route path="/actions" element={<Actions />} />
            </Routes>
        </>
    );
}

export default App;
