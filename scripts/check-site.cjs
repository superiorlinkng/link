const fs=require('node:fs'),assert=require('node:assert/strict'),path=require('node:path');
const pages=fs.readdirSync('.').filter(f=>f.endsWith('.html'));let links=0,forms=0;
for(const f of pages){const s=fs.readFileSync(f,'utf8');assert.equal((s.match(/<h1\b/g)||[]).length,1,f+' needs one h1');
 for(const m of s.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)){const u=m[1];if(/^(https?:|mailto:|tel:|data:)/.test(u))continue;let target=u.split('#')[0];if(target==='/')target='index.html';else target=target.replace(/^\//,'');assert.ok(fs.existsSync(target),`${f}: missing ${u}`);links++}
 for(const m of s.matchAll(/<form\b([^>]*)>([\s\S]*?)<\/form>/g)){assert.match(m[1],/method="POST"/);assert.match(m[1],/https:\/\/formspree.io\/f\/(mkozdqyg|xojlgkyg)/);assert.match(m[2],/name="form_type"/);assert.match(m[2],/name="privacy_consent"/);assert.match(m[2],/type="submit"/);forms++}
 assert.doesNotMatch(s,/submitForm|Dangote|href="[^\"]*\.pdf/i);
 if(f!=='index.html')assert.match(s,new RegExp('rel="canonical" href="https://superiorlinkng.com/'+f.replace('.','\\.')+'"'));
}
console.log(`${pages.length} pages, ${links} local references and ${forms} forms passed.`);
