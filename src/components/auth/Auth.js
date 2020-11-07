import React from 'react';
import {Redirect} from 'react-router';
import AuthService from '../../services/AuthService';

export default function Auth() {
    if (AuthService.isAuthenticated()) {
        return <Redirect to="/" />
    } else {
        return (
            <>
                <h1>Auth</h1>
            </>
        )
    }
}
