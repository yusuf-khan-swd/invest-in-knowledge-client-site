import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="flex items-center justify-center space-x-2 h-screen">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-amber-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-amber-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-amber-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-amber-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-amber-400"></div>
    </div>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;

};

export default PrivateRoutes;