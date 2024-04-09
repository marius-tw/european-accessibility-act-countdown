import Image from "next/image";
import Countdown from './countdown';

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Countdown/>
      </main>
  );
}
