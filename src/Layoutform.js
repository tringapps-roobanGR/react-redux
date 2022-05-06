import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Rightside from "./Rightside";
import { Provider } from 'react-redux'
import appReducer from './reducer'
import { createStore } from 'redux'
const store = createStore(appReducer)
export default function Layoutform(){
    return (
      <Provider store={store}>
        <div>
         
          <Header />
          <Sidebar/>
          <Rightside />
          <Footer />
        </div>
      </Provider>
    )
}