import { readFile, writeFile, mkdir } from 'node:fs/promises';
const html=await readFile('dist/index.html','utf8');
for(const [route,title] of Object.entries({'about-us':'About Us','services':'Services','projects':'Project Gallery','contact':'Contact'})){await mkdir(`dist/${route}`,{recursive:true});await writeFile(`dist/${route}/index.html`,html.replace('<title>Fineline Groundcare</title>',`<title>${title} | Fineline Groundcare</title>`));}
console.log('Generated four direct-entry routes.');
