import { User } from 'firebase';
import React from 'react';

export type AuthContext = null | User;

const AuthUserContext: React.Context<AuthContext> = React.createContext(null);

export default AuthUserContext;
