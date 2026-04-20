const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function reverseInFile(filePath) {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx') && !filePath.endsWith('.sql')) return;
  
  let code = fs.readFileSync(filePath, 'utf8');
  let original = code;
  
  // Reversing Replacements
  code = code.replace(/\bvady\b/g, 'voha');
  code = code.replace(/\bvadyTeam\b/g, 'vohaTeam');
  code = code.replace(/\bvadyStats\b/g, 'vohaStats');
  code = code.replace(/\bVady\b/g, 'Voha');
  code = code.replace(/Вади/g, 'Вохи');
  code = code.replace(/Вадя/g, 'Воха');

  if (code !== original) {
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`Reversed: ${filePath}`);
  }
}

walkDir('./src', reverseInFile);
reverseInFile('./supabase-init.sql');

console.log('Reverse replacement complete.');
