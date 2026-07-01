const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // "section-bg py-24" -> bg-[#0D0A0A]
  content = content.replace(/"section-bg py-24/g, 'bg-[#0D0A0A]');
  // bg-luxury-black -> bg-[#0D0A0A] (I will assume they want luxury-black converted too since they specified black)
  content = content.replace(/bg-luxury-black/g, 'bg-[#0D0A0A]');
  // bg-luxury-dark -> bg-[#1A0B0E]
  content = content.replace(/bg-luxury-dark/g, 'bg-[#1A0B0E]');
  // text-gold -> text-[#8B1E2D]
  content = content.replace(/text-gold/g, 'text-[#8B1E2D]');
  // hover:text-gold -> hover:text-[#8B1E2D]
  content = content.replace(/hover:text-gold/g, 'hover:text-[#8B1E2D]');
  // bg-gold -> bg-[#5E0B15]
  content = content.replace(/bg-gold/g, 'bg-[#5E0B15]');
  // hover:bg-gold -> hover:bg-[#8B1E2D]
  content = content.replace(/hover:bg-gold/g, 'hover:bg-[#8B1E2D]');
  // border-gold -> border-[#8B1E2D] or border-[#5E0B15]? user didn't specify border, but gold/yellow colors. Let's use #5E0B15 for border.
  content = content.replace(/border-gold/g, 'border-[#5E0B15]');

  // What about hover:bg-gold-light? That should be hover:bg-[#8B1E2D] 
  content = content.replace(/hover:bg-gold-light/g, 'hover:bg-[#8B1E2D]');

  // also gold-light in tailwind if used directly
  content = content.replace(/text-gold-light/g, 'text-[#8B1E2D]');

  // Update buttons classes text-luxury-black to [#2D1A12]
  content = content.replace(/text-luxury-black/g, 'text-main');

  // other occurrences of luxury-black
  content = content.replace(/luxury-black/g, 'white'); // Wait, text-luxury-black is replaced above.

  fs.writeFileSync(filePath, content, 'utf8');
});

// Also index.css
const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/bg-luxury-black/g, 'bg-[#0D0A0A]');
cssContent = cssContent.replace(/bg-luxury-dark/g, 'bg-[#1A0B0E]');
cssContent = cssContent.replace(/bg-gold/g, 'bg-[#5E0B15]');
cssContent = cssContent.replace(/hover:bg-gold-light/g, 'hover:bg-[#8B1E2D]');
cssContent = cssContent.replace(/hover:bg-gold/g, 'hover:bg-[#8B1E2D]');
cssContent = cssContent.replace(/border-gold/g, 'border-[#5E0B15]');
cssContent = cssContent.replace(/text-gold/g, 'text-[#8B1E2D]');
cssContent = cssContent.replace(/text-luxury-black/g, '[#2D1A12]');
cssContent = cssContent.replace(/text-cream/g, '[#2D1A12]');
fs.writeFileSync(cssPath, cssContent, 'utf8');

console.log('Replacement done.');
