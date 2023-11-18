import React from 'react'
import { useStateContext } from '../../context/contextProvider'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Auth = ({ children }) => {
    const navigate = useNavigate()
    const { token } = useStateContext()
    useEffect(() => {
        if (!token) {
            navigate('/login')

        }
    }, [])
    return (children)

}

export default Auth