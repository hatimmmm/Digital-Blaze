import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axiosClient from "../api/axios-client";
import { useNavigate } from "react-router-dom";
import { RenderNav, RenderRoutes } from "../../routes/routes";
import { Provider } from "react-redux";
import store from "../../store/store";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";

const AuthContext = createContext({
    user: null, token: null, errors: null, login: () => { }, register: () => { }, logout: () => { }
})

export const AuthData = () => useContext(AuthContext)

export const AuthWrapper = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        if (token) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    setUser({ data: data, isAuthenticated: true })
                }).catch(err => console.log(err))
        }
    }, [])
    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    const login = (payload) => {

        setErrors(null);
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setUser({ data: data.user, isAuthenticated: true });
                setToken(data.token);
                navigate('/products')
            })
            .catch((err) => {
                console.log(err);
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({ email: [response.data.message] });
                    }
                }
            });
        ;
    }
    const register = (payload) => {

        setErrors(null);
        axiosClient
            .post("/signup", payload)
            .then(({ data }) => {
                setUser({ data: data.user, isAuthenticated: true });
                setToken(data.token);
                navigate('/products')
            })
            .catch((err) => {
                console.log(err);
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({ email: [response.data.message] });
                    }
                }
            });
        ;
    }
    const logout = () => {
        axiosClient
            .post("/logout")
            .then(() => {
                setUser({});
                setToken(null);
            })
            .catch((response) => {
                //handle error
                console.log(response);
            });
    };
    return (
        <AuthContext.Provider value={{ user, token, errors, login, register, logout }}>
            <Provider store={store}>
                <NavBar></NavBar>
                <RenderRoutes />
                <Footer />
            </Provider>
        </AuthContext.Provider>
    )
}