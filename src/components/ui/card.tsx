import type { ReactNode } from "react";

interface amountProps {
  nameCard: string;
  balance: string;
  icon: ReactNode;
}

function Card({ nameCard, balance, icon }: amountProps) {
  let cardColor: string = "text-kiwi";

  if (nameCard == "saldo") {
    cardColor = "text-blue-500";
  } else if (nameCard == "gasto") {
    cardColor = "text-red-500";
  }

  return (
    <div className="grow h-40 rounded-md border-1 border-second-text p-5">
      <div className="w-full flex justify-between">
        <h1 className="text-lg capitalize text-white ">{nameCard}</h1>
        <span className={cardColor}>{icon}</span>
      </div>
      <div className="w-full h-full flex items-center">
        <h2 className={"text-3xl " + cardColor}>R$: {balance}</h2>
      </div>
    </div>
  );
}

export default Card;
