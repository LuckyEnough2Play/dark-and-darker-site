// scripts/generateSummaryMap.js
const fs = require('fs');
const path = require('path');

const summariesDir = path.join(__dirname, '../app/journal/summaries');
const outputFile = path.join(__dirname, '../app/journal/summaryMap.ts');

const files = fs.readdirSync(summariesDir).filter(f => f.endsWith('Journal.tsx'));

const importLines = [];
const mapLines = ['const summaryMap: Record<string, React.ComponentType> = {'];

files.sort().reverse().forEach(filename => {
  const base = filename.replace('Journal.tsx', '');
  const varName = `Journal_${base}`;
  const importPath = `./summaries/${filename.replace(/\.tsx$/, '')}`;
  importLines.push(`const ${varName} = dynamic(() => import('${importPath}'));`);
  mapLines.push(`  "${filename}": ${varName},`);
});

mapLines.push('};');
mapLines.push('');
mapLines.push('export default summaryMap;');

const header = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
'use client';
import dynamic from 'next/dynamic';

`;

const fullContent = header + importLines.join('\n') + '\n\n' + mapLines.join('\n');
fs.writeFileSync(outputFile, fullContent);
console.log('✅ summaryMap.ts generated');
