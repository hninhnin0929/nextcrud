import Image from "next/image";
import ItemList from "./components/item-list";

export default function Home() {
  return (
    <div>
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
    </div>
  );
}
