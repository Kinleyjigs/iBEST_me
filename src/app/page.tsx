import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="w-screen h-screen bg-red-200">
      <h1>welcome</h1>
      <Button>click me</Button>
    </div>
  );
}
