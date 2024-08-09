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

        <li class="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="">
          <i className="bi bi-box-seam"></i>
          <span>Produit</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li onClick={() => {navigate('/admin/product')}}>
            <a>
              <i class="bi bi-circle"></i><span>Tous les produits</span>
            </a>
          </li>
          <li onClick={() => {navigate('/admin/category')}}>
            <a>
              <i class="bi bi-circle"></i><span>Catégorie</span>
            </a>
          </li>
          <li onClick={() => {navigate('/admin/color')}}>
            <a>
              <i class="bi bi-circle"></i><span>Couleur</span>
            </a>
          </li>
          <li onClick={() => {navigate('/admin/brand')}}>
            <a>
              <i class="bi bi-circle"></i><span>Marque</span>
            </a>
          </li>
        </ul>
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
  