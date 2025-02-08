import React from "react";
import Button from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Rocket, TrendingUp, Users, Wallet, DollarSign } from "lucide-react";
import logo from "./assets/peruesclave_logo_t.jpg"; // Importing the image

function ShitcoinPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-6 text-center">
      <header className="py-10 w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-5xl font-bold text-yellow-400">PERUESCLAVE COIN 🚀</h1>
		<img src={logo} alt="Shitcoin Logo" className="w-10 h-10 mb-6 object-contain" /> {/* Centered Image */}

        <div className="flex justify-center gap-4 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Follow on X</Button>
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Join Telegram</Button>
          </a>
        </div>
        <p className="text-lg text-gray-300 mt-4">The next big 1000x crypto opportunity! Don't miss out! 💎 And make your dreams come true!</p>
      </header>

      <section className="flex flex-col gap-6 w-full max-w-4xl text-center">
        <Card className="bg-gray-800 p-6 rounded-2xl flex items-center gap-6 text-left">
          <Rocket size={50} className="text-yellow-400" />
          <CardContent>
            <h2 className="text-2xl font-semibold">Skyrocket Gains</h2>
            <p className="text-gray-400">Early investors will ride the moon wave! 🚀</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 p-6 rounded-2xl flex items-center gap-6 text-left">
          <TrendingUp size={50} className="text-yellow-400" />
          <CardContent>
            <h2 className="text-2xl font-semibold">Pump Guaranteed</h2>
            <p className="text-gray-400">The community is hyped and ready! 🔥</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 p-6 rounded-2xl flex items-center gap-6 text-left">
          <Users size={50} className="text-yellow-400" />
          <CardContent>
            <h2 className="text-2xl font-semibold">Massive Community</h2>
            <p className="text-gray-400">Join thousands of diamond hands! 💎</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10 w-full max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-yellow-400">TOKENOMICS</h2>
        <div className="flex justify-center gap-6 mt-6">
          <Card className="bg-gray-800 p-6 rounded-2xl flex items-center gap-6 text-left">
            <Wallet size={50} className="text-yellow-400" />
            <CardContent>
              <h3 className="text-2xl font-semibold">Total Supply: 1T</h3>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 p-6 rounded-2xl flex items-center gap-6 text-left">
            <DollarSign size={50} className="text-yellow-400" />
            <CardContent>
              <h3 className="text-2xl font-semibold">Liquidity Locked</h3>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-10 mt-10 border-t border-gray-700 w-full max-w-4xl text-center">
        <p className="text-gray-400">© 2025 PERUESCLAVE COIN. Not financial advice. DYOR!</p>
      </footer>
    </div>
  );
}

export default ShitcoinPortal;
