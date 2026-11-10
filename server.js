// تشغيل: node server.js  ->  http://localhost:3000  (الأدمن: /tuman)
const http=require('http'),fs=require('fs'),path=require('path');
const D=path.join(__dirname,'public');
http.createServer((q,r)=>{
  let u=q.url.split('?')[0];
  if(u==='/tuman'||u==='/tuman/')u='/admin.html';
  if(u==='/')u='/index.html';
  const f=path.join(D,path.normalize(u));
  if(!f.startsWith(D))return r.writeHead(403).end();
  fs.readFile(f,(e,d)=>{if(e)return r.writeHead(404).end('Not found');
    r.writeHead(200,{'Content-Type':{'.html':'text/html; charset=utf-8'}[path.extname(f)]||'application/octet-stream'});r.end(d)});
}).listen(process.env.PORT||3000,()=>console.log('Marbid Center on :'+(process.env.PORT||3000)));
