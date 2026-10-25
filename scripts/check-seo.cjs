const fs=require('node:fs'),assert=require('node:assert/strict');
const pages=fs.readdirSync('.').filter(f=>f.endsWith('.html')),titles=new Set(),descs=new Set();
const map=fs.readFileSync('sitemap.xml','utf8'),urls=[...map.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);assert.equal(new Set(urls).size,urls.length);
let graphs=0;
for(const f of pages){const s=fs.readFileSync(f,'utf8');const canonical=s.match(/rel="canonical" href="([^"]+)"/)[1];const title=s.match(/<title>(.*?)<\/title>/)[1],desc=s.match(/name="description" content="([^"]+)"/)[1];assert.ok(!titles.has(title),'duplicate title '+f);assert.ok(!descs.has(desc),'duplicate description '+f);titles.add(title);descs.add(desc);
assert.ok(title.length<100,f+' title too long');assert.equal(s.match(/<meta property="og:title"/g).length,1);assert.ok(s.includes('property="og:url" content="'+canonical+'"'));
const data=JSON.parse(s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);assert.equal(data['@context'],'https://schema.org');const graph=data['@graph'];assert.ok(graph.some(n=>n['@type']==='WebPage'&&n.url===canonical));graphs++;
if(f==='index.html'){assert.ok(graph.some(n=>n['@type']==='Organization'));assert.ok(graph.some(n=>n['@type']==='WebSite'))}else{const crumbs=graph.find(n=>n['@type']==='BreadcrumbList');assert.equal(crumbs.itemListElement.at(-1).item,canonical);assert.ok(s.includes('aria-label="Breadcrumb"'));const alias=fs.readFileSync(f.slice(0,-5)+'/index.html','utf8');assert.equal(alias,s.replaceAll('href="assets/','href="/assets/').replaceAll('src="assets/','src="/assets/'))}
if(!['payments.html','thank-you.html'].includes(f))assert.ok(urls.includes(canonical));
assert.doesNotMatch(s,/aggregateRating|reviewCount|"price"|"sameAs"/);
// Validate local fragments as well as file references.
for(const m of s.matchAll(/href="(\/[^"#]*|)#[^"]+"/g)){const [p,fragment]=m[0].slice(6,-1).split('#');const target=p?(p==='/'?'index.html':p.slice(1)):f;assert.ok(fs.readFileSync(target,'utf8').includes('id="'+fragment+'"'),f+' missing fragment '+fragment)}
}
assert.match(fs.readFileSync('thank-you.html','utf8'),/noindex/);assert.ok(!urls.some(u=>u.includes('thank-you')));assert.match(fs.readFileSync('robots.txt','utf8'),/Sitemap: https:\/\/superiorlinkng.com\/sitemap.xml/);
console.log(`${pages.length} unique metadata sets and JSON-LD graphs; ${urls.length} sitemap URLs; aliases and local fragments passed.`);
