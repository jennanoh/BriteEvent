import './bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import { Container } from 'react-bootstrap';
import React from 'react'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';
import CreateEvent from './screens/CreateEvent';
import Music from './IconScreens/Music';
import VisualArts from './IconScreens/VisualArt';
import Nightlife from './IconScreens/Nightlife';
import Holidays from './IconScreens/Holidays';
import Health from './IconScreens/Health';
import Hobbies from './IconScreens/Hobbies';
import Business from './IconScreens/Business';
import FoodDrink from './IconScreens/Food&Drink';

function App() {
  return (
    <>
      <Router>
          <Header />
            <main className="flex-wrapper">
             <Container fluid>
              <Routes>
                <Route path='/' exact element= {<HomeScreen />} />
                <Route path='/event/:id' exact element= {<EventScreen />}/>
                <Route path='/login' exact element= {<LoginScreen/>}/>
                <Route path='/register' exact element= {<RegisterScreen/>}/>
                <Route path='/profile' exact element= {<ProfileScreen/>}/>
                <Route path='/order/:id' element= {<OrderDetailsScreen/>}/>
                <Route path='/organizer' element={<CreateEvent/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/visualarts' element={<VisualArts/>}/>
                <Route path='/nightlife' element={<Nightlife/>}/>
                <Route path='/holidays' element={<Holidays/>}/>
                <Route path='/health' element={<Health/>}/>
                <Route path='/hobbies' element={<Hobbies/>}/>
                <Route path='/business' element={<Business/>}/>
                <Route path='/food&drink' element={<FoodDrink/>}/>
              </Routes> 
             </Container>
            </main>
          <Footer />
        </Router>
    </>
  );
}

export default App;
