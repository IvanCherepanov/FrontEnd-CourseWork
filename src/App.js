// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./components/AppRoute";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";
import Footer from "./components/UI/Footer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import agreementReducer from "./utils/old/agreementReducer";

const App = observer(() => {
    const {user} = useContext(Context)
    console.log(user)
    const [loading, setLoading] = useState(true)
    const store = createStore(agreementReducer);

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])
    console.log(user)

    if (loading){
        return <Spinner animation={"grow"}/>
    }

  return (
      <Provider store={store}>
          <BrowserRouter>
              <NavBar/>
              <AppRoute/>
              <Footer/>
          </BrowserRouter>
      </Provider>
  );
});

export default App;
