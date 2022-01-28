import { useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state) => state.user.name);

  return <h1> Home {count}</h1>;
}
