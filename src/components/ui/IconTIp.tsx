import { Info } from "lucide-react";

interface TipProps {
  children: React.ReactNode;
  content: string;
}

const TipWrapper: React.FC<TipProps> = ({ children, content }) => {
  return (
    <div className="relative inline-block group">
      {children}

      <div
        className={`
          absolute z-50 
          bottom-full left-1/2 transform -translate-x-1/2 
          mb-2 
          px-3 py-1 text-xs whitespace-nowrap 
          bg-second-text text-white rounded-md 
          opacity-0 invisible 
          group-hover:opacity-100 group-hover:visible 
          transition-all duration-200 
          pointer-events-none 
        `}
      >
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-second-text"></div>
      </div>
    </div>
  );
};

function IconTip() {
  return (
    <>
      <TipWrapper
        content="The password must be 8 characters long, 
        including one uppercase letter, one number, and one special character."
      >
        <Info className="w-4  text-kiwi" />
      </TipWrapper>
    </>
  );
}

export default IconTip;
