import React from 'react'
import { useStateContext } from '../../context/contextProvider'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const LoginAuth = ({ children }) => {
    const navigate = useNavigate()
    const { token } = useStateContext();
    useEffect(() => {
        if (token) {
            navigate('/products')
        }
    }, [])
    return (
        children
    )
}

export default LoginAuth