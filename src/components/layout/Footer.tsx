import { Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-600">
            <span>© {currentYear} Controle Financeiro.</span>
            <span className="hidden md:inline">
              Todos os direitos reservados.
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <span>Feito com</span>
            <Heart className="size-4 text-red-500 fill-red-500" />
            <span>para ajudar suas finanças</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
