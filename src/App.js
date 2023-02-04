import { Header } from "./components";
import { Signup, Login, Landing, CreateQueue, MyQueues, JoinQueue } from "./screens";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './assets/styles/header.css'
import './assets/styles/index.css'
function App() {
  const isLoggedIn = localStorage.getItem('isSignedIn')
  return (
    <div>
      <BrowserRouter>
        <Header />
        {!isLoggedIn &&
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        }
        {isLoggedIn &&
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/queue/create" element={<CreateQueue />} />
            <Route path="/queue/join" element={<JoinQueue />} />
            <Route path="/queue/created" element={<MyQueues />} />
          </Routes>
        }

      </BrowserRouter>

    </div>
  );
}

export default App;
