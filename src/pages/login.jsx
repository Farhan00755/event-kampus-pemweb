import LogIn from "../components/log-in";
import React, {useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Login() {
    const location = useLocation()

    useEffect(() => {
      if (location.hash === '#login') {
        const element = document.getElementById('login');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } 
    }, [location]);

    return (
        <div id="login">
            <LogIn />
        </div>
    )
}
