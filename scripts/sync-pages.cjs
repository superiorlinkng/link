const fs=require('node:fs');
for(const file of fs.readdirSync('.').filter(file=>file.endsWith('.html')&&file!=='index.html')){
 const dir=file.slice(0,-5);fs.mkdirSync(dir,{recursive:true});
 fs.writeFileSync(`${dir}/index.html`,fs.readFileSync(file,'utf8').replaceAll('href="assets/','href="/assets/').replaceAll('src="assets/','src="/assets/'));
}
