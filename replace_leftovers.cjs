const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace rgba for gold to burgundy
  // gold: 212,175,55
  // burgundy (#5E0B15): 94,11,21
  content = content.replace(/rgba\(212,175,55,/g, 'rgba(94,11,21,');

  // replace from-gold/20 and similar leftovers
  content = content.replace(/from-gold/g, 'from-[#5E0B15]');
  content = content.replace(/via-gold/g, 'via-[#5E0B15]');
  content = content.replace(/to-gold/g, 'to-[#5E0B15]');

  // replace text-cream to [#2D1A12]
  content = content.replace(/text-cream/g, '[#2D1A12]');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Final replacement done.');
