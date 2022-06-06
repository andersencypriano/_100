import { Link } from 'react-router-dom';
export function MenuList() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/trabalhos">/trabalhos</Link></li>
          <li><Link to="/skills">/skills</Link></li>
          <li><Link to="/contato">/contato</Link></li>
        </ul>
      </nav>
    </>
  );
}
