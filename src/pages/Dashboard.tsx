import Header from "../components/layout/Header";
import Card from "../components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  Search,
  Plus,
  History,
} from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState, type ChangeEvent } from "react";
import Footer from "../components/layout/Footer";

interface oi {
  id: string;
  name: string;
  category: string;
  type: string;
  date: string;
  valor: string;
}

function Dashboard() {
  const [search, setSearch] = useState<string>("");

  const lists: oi[] = [
    {
      id: "1",
      name: "Tenis",
      category: "Roupas",
      type: "output",
      date: "07/12/25",
      valor: "1500",
    },
    {
      id: "2",
      name: "Tenis",
      category: "Roupas",
      type: "output",
      date: "07/12/25",
      valor: "1500",
    },
    {
      id: "3",
      name: "Tenis",
      category: "Roupas",
      type: "output",
      date: "07/12/25",
      valor: "1500",
    },
    {
      id: "4",
      name: "Tenis",
      category: "Roupas",
      type: "output",
      date: "07/12/25",
      valor: "1500",
    },
    {
      id: "5",
      name: "Tenis",
      category: "Roupas",
      type: "output",
      date: "07/12/25",
      valor: "1500",
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col overflow-hidden items-center">
      <Header />
      <main className="w-[80%] h-auto flex-grow overflow-y-auto">
        <div className="w-full h-auto flex flex-grow space-x-4 mt-10 px-1">
          <Card nameCard="receita" icon={<TrendingUp />} balance={"1000"} />
          <Card nameCard="gasto" icon={<TrendingDown />} balance={"1000"} />
          <Card nameCard="saldo" icon={<Wallet />} balance={"1000"} />
        </div>
        <div className="w-full h-auto px-1 flex mt-8">
          <div className="w-[50%] flex h-full">
            <Input
              type="text"
              value={search}
              placeholder="Procurar Transações..."
              className="h-10 text-secondt-text"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
            <Button
              name={""}
              icon={<Search />}
              className="ml-5 px-2"
              width="w-auto"
              height="h-10"
            />
          </div>
          <div className="w-[50%] flex justify-end space-x-5">
            <Button
              name="nova transação"
              icon={<Plus />}
              width="w-auto"
              height="h-10"
              className="flex items-center px-3"
            />
            <Button
              name="nova categoria"
              icon={<Plus />}
              width="w-auto"
              height="h-10"
              className="flex items-center px-3"
            />
            <Button
              name="Histórico"
              icon={<History />}
              width="w-auto"
              height="h-10"
              className="flex items-center px-3"
            />
          </div>
        </div>
        <div className="w-full h-auto grid grid-cols-4 gap-4 mt-10">
          <div className="col-span-3 px-1 h-200 rounded-md border-1 border-second-text px-5">
            <div className="mt-3">
              <span className="capitalize font-bold text-kiwi">dezembro</span>
            </div>
            <table className="w-full border-colapse mt-3">
              <colgroup>
                <col className="w-2/5" />
                <col className="w-1/6" />
                <col className="w-1/6" />
                <col className="w-1/6" />
                <col className="w-1/5" />
              </colgroup>
              <thead>
                <tr className="border-b-1 text-kiwi text-left capitalize border-second-text">
                  <th className=" py-2">Nome</th>
                  <th className="">categoria</th>
                  <th className="">tipo</th>
                  <th className="">data</th>
                  <th className="">valor</th>
                </tr>
              </thead>
              <tbody>
                {lists.map((list: oi) => (
                  <tr
                    key={list.id}
                    className="text-white border-b-1 border-second-text"
                  >
                    <td className="text-left py-2">{list.name}</td>
                    <td className="text-left">{list.category}</td>
                    <td className="text-left">{list.type}</td>
                    <td className="text-left">{list.date}</td>
                    <td className="text-left">R$: {list.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-md border-1 border-second-text px-5">
            <p>flengo</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
