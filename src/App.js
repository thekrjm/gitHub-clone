import { Route, Routes } from 'react-router-dom';
import Issue from './pages/Issue.js';
import CreateIssue from './pages/CreateIssue.js';
import Projects from './pages/Projects.js';
import PullsRequest from './pages/PullsRequest.js';
import Code from './pages/Code.js';
import Security from './pages/Security.js';
import Actions from './pages/Actions.js';
import Header from './Header.js';
import Nav from './components/Nav.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GITHUB_API } from './api.js';

function App() {
    const [user, setUser] = useState();
    useEffect(()=>{
        getUserInfo()
    }, []);

    async function getUserInfo(){
        const data = await axios(`${GITHUB_API}/user`,{
            headers:{
                Authorization: process.env.REACT_APP_GITHUB_TOKEN,
                'Content-Type' : 'application/json',
            },
        });
        setUser(data.data) 
    }
    return (
        <>
            <Nav />
            <Header />
            <Routes>
                <Route path="/" element={<Issue />} />
                <Route path="/issue" element={<Issue />} />
                <Route path="/new" element={<CreateIssue />} />
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
