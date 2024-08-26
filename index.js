#!/usr/bin/env node

const quotes = [
    "Debugging: Because that’s where the real fun begins!",
    "Why fix bugs when you can just feature them?",
    "When you’re stuck, remember: even bugs need love!",
    "Code hard, nap harder!",
    "Remember, there’s always a StackOverflow post for that!",
  ];
  
  const asciiArt = [
    `
     (╯°□°）╯︵ ┻━┻
     Time to take a break!
    `,
    `
      (¬‿¬)
      Your code’s fine… probably.
    `,
    `
     (☞ﾟヮﾟ)☞
     You got this, coder!
    `,
    `
      (ノಠ益ಠ)ノ彡┻━┻
      Deep breaths. Keep going!
    `,
  ];
  
  // Function to get a random quote and ASCII art
  function getCheer() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomArt = asciiArt[Math.floor(Math.random() * asciiArt.length)];
    
    console.log("\n" + randomQuote + "\n" + randomArt + "\n");
  }
  
  // Execute the function if this file is run directly
  if (require.main === module) {
    getCheer();
  }
  
  module.exports = { getCheer };
  