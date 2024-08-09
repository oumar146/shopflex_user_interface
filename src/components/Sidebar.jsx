import { useNavigate } from 'react-router-dom';


const handleLogout = async (navigate) => {
  localStorage.removeItem('token'); 
  navigate('/admin/login');
};

const Sidebar = () => {
  const navigate = useNavigate();

    return (
      <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item" onClick={() => {navigate('/admin/dashboard')}}>
          <div className="nav-link collapsed">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </div>
        </li>
        
        <li className="nav-item" onClick={() => {navigate('/admin/user')}}>
          <div className="nav-link collapsed">
          <i class="bi bi-people"></i>
          <span>Utilisateur</span>
          </div>
        </li>

        <li className="nav-item" onClick={() => {navigate('/admin/order')}}>
          <div className="nav-link collapsed">
          <i class="bi bi-cart"></i>
          <span>Commande</span>
          </div>
        </li>
        
        <li className="nav-item" onClick={() => {navigate('/admin/category')}}>
          <div className="nav-link collapsed">
          <i class="bi bi-cart"></i>
          <span>Catégorie</span>
          </div>
        </li>

        <li className="nav-item" onClick={() => {navigate('/admin/color')}}>
          <div className="nav-link collapsed">
          <i class="bi bi-palette"></i>
          <span>Couleur</span>
          </div>
        </li>

        <li className="nav-item" onClick={() => {navigate('/admin/brand')}}>
          <div className="nav-link collapsed">
          <i class="bi bi-grid-fill"></i>
          <span>Marque</span>
          </div>
        </li>

        <li className="nav-item" onClick={() => {navigate('/admin/product')}}>
          <div className="nav-link collapsed">
          <i class="bi bi-box-seam"></i>
          <span>Produit</span>
          </div>
        </li>

        <li className="nav-item" onClick={() => {handleLogout(navigate)}}>
          <div className="nav-link collapsed">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Déconnexion</span>
          </div>
        </li>
      
      </ul>
    </aside>
    );
  };
  
  export default Sidebar;
  