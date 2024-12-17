"use client";  // Need this for useState

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [visibleCards, setVisibleCards] = useState({
    card1: true,
    card2: true,
  });

  const handleClose = (cardId: 'card1' | 'card2') => {
    setVisibleCards(prev => ({
      ...prev,
      [cardId]: false
    }));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1a1f35] to-[#333f61] overflow-hidden">
      {/* Falling Snow Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="snow absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <main className="relative flex flex-col items-center justify-center min-h-screen p-8 text-white">
        {/* Snowman SVG */}
        <div className="w-48 h-48 mb-8">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Bottom circle */}
            <circle cx="50" cy="70" r="20" fill="white" />
            {/* Middle circle */}
            <circle cx="50" cy="40" r="15" fill="white" />
            {/* Head */}
            <circle cx="50" cy="18" r="12" fill="white" />
            {/* Eyes */}
            <circle cx="46" cy="15" r="2" fill="black" />
            <circle cx="54" cy="15" r="2" fill="black" />
            {/* Carrot nose */}
            <path d="M50,18 L50,22" stroke="orange" strokeWidth="2" />
            {/* Smile */}
            <path d="M45,23 Q50,26 55,23" stroke="black" strokeWidth="1" fill="none" />
            {/* Arms */}
            <path d="M35,40 L15,30" stroke="brown" strokeWidth="2" />
            <path d="M65,40 L85,30" stroke="brown" strokeWidth="2" />
            {/* Buttons */}
            <circle cx="50" cy="35" r="2" fill="black" />
            <circle cx="50" cy="45" r="2" fill="black" />
            <circle cx="50" cy="55" r="2" fill="black" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center animate-bounce">
          Happy Holidays! ⛄️
        </h1>
        
        <p className="text-xl md:text-2xl text-center mb-8 text-blue-200">
          Welcome to our winter wonderland!
        </p>

        {/* Holiday decorations */}
        <div className="flex gap-4 mb-8">
          {['🎄', '🎁', '⭐️', '🦌'].map((emoji, i) => (
            <span
              key={i}
              className="text-3xl animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4">
          {visibleCards.card1 && (
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="text-3xl">🎄</span>
                <h2 className="text-2xl font-bold text-green-200">Season's Greetings</h2>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  May your days be merry and bright! Wishing you a season filled with 
                  warm cups of cocoa, cozy fireside moments, and the joy of winter magic.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-blue-200 italic">
                  - From Santa's Workshop 🎅
                </span>
                <Button 
                  variant="secondary" 
                  className="bg-green-500/20 hover:bg-green-500/30 text-green-100"
                  onClick={() => handleClose('card1')}
                >
                  Cheers! 🎉
                </Button>
              </CardFooter>
            </Card>
          )}

          {visibleCards.card2 && (
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="text-3xl">❄️</span>
                <h2 className="text-2xl font-bold text-purple-200">Winter Wishes</h2>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  Let it snow! As snowflakes dance and winter winds blow, may your heart 
                  be light and your spirits glow with the magic of the season.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-blue-200 italic">
                  - The Winter Fairy ✨
                </span>
                <Button 
                  variant="secondary" 
                  className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-100"
                  onClick={() => handleClose('card2')}
                >
                  Cheers! 🎉
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
