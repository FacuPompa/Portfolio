const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Facundo Pompa. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
