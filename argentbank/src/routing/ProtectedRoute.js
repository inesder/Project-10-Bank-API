import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const ProtectedRoute = () => {
  const { userToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Redirection automatique vers la page de connexion si l'utilisateur n'est pas authentifié
  useEffect(() => {
    if (!userToken) {
      navigate('/login');
    }
  }, [userToken, navigate]);

  // Affiche les enfants de la route protégée si l'utilisateur est authentifié
  return userToken ? <Outlet /> : null;
};

export default ProtectedRoute;
