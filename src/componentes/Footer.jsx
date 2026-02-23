import { FaHeart } from "react-icons/fa";
import "../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className=" texto-footer">© 2026 MarcusRezende | Todos os direitos reservados.</p>
      <p className="frase-footer">Feito com <FaHeart className="icone-footer" /> no Brasil </p>
    </footer>
  );
}
export default Footer;
