import Header from "../components/layout/Header";
import Card from "../components/ui/card";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

function Dashboard() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden items-center">
      <Header />
      <main className="w-[80%] flex-grow overflow-y-auto">
        <div className="w-full h-auto flex flex-grow space-x-4 p-3 mt-10">
          <Card nameCard="receita" icon={<TrendingUp />} balance={"1000"} />
          <Card nameCard="gasto" icon={<TrendingDown />} balance={"1000"} />
          <Card nameCard="saldo" icon={<Wallet />} balance={"1000"} />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
