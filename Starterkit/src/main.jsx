import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crm from './container/dashboards/crm/crm.jsx'
import './index.scss'
import ScrollToTop from './components/ui/scrolltotop.jsx'
import Dash from './pages/dash/Dash.jsx'
import Floor from './pages/apartmentmanagement/Floor.jsx'
import Unit from './pages/apartmentmanagement/Unit.jsx'
import Room from './pages/apartmentmanagement/Room.jsx'
import Seat from './pages/apartmentmanagement/Seat.jsx'
import Login from './pages/login/Login.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
      <React.Suspense>
      <ScrollToTop/>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
            <Route index  element={<Crm />} />
            <Route path={`${import.meta.env.BASE_URL}dashboards`}  element={<Crm />} />
            <Route path={`${import.meta.env.BASE_URL}dashboards/dashboard`}  element={<Dash/>} />
            <Route path={`${import.meta.env.BASE_URL}apartment-management/floor-manage`}  element={<Floor/>} />
            <Route path={`${import.meta.env.BASE_URL}apartment-management/unit-manage`}  element={<Unit/>} />
            <Route path={`${import.meta.env.BASE_URL}apartment-management/room-manage`}  element={<Room/>} />
            <Route path={`${import.meta.env.BASE_URL}apartment-management/seat-manage`}  element={<Seat/>} />
            <Route path={`${import.meta.env.BASE_URL}auth/login`}  element={<Login/>} />
          </Route>

          
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.Fragment>
)
