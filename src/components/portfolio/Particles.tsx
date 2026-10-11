import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
export default function Particles() {
 const ref=useRef<HTMLCanvasElement>(null); const reduced=useReducedMotion();
 useEffect(() => {
  const canvas=ref.current; if(!canvas || reduced) return; const ctx=canvas.getContext('2d'); if(!ctx) return;
  let width=0,height=0,frame=0,last=0,visible=true; const points=Array.from({length:30},()=>({x:Math.random(),y:Math.random(),v:0.000015+Math.random()*0.000015}));
  const color=getComputedStyle(canvas).getPropertyValue('--gold').trim();
  function resize(){ if(!canvas) return; width=canvas.clientWidth; height=canvas.clientHeight; const dpr=Math.min(devicePixelRatio,1.5); canvas.width=width*dpr; canvas.height=height*dpr; ctx?.setTransform(dpr,0,0,dpr,0,0); }
  function draw(t:number){ frame=0; if(!visible || document.hidden) return; if(t-last>45 && ctx){ last=t; ctx.clearRect(0,0,width,height); points.forEach((p,i)=>{p.y-=p.v*3; if(p.y<0)p.y=1; const x=p.x*width,y=p.y*height; ctx.fillStyle=`hsl(${color} / 0.4)`; ctx.beginPath();ctx.arc(x,y,1.3,0,Math.PI*2);ctx.fill(); if(i%4===0){ctx.strokeStyle=`hsl(${color} / 0.08)`;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+32,y);ctx.lineTo(x+44,y-12);ctx.stroke();} }); } frame=requestAnimationFrame(draw); }
  function resume(){if(visible&&!document.hidden&&!frame)frame=requestAnimationFrame(draw);else if(!visible||document.hidden){cancelAnimationFrame(frame);frame=0;}}
  const observer=new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??false;resume();}); observer.observe(canvas);
  const ro=new ResizeObserver(resize);ro.observe(canvas);document.addEventListener('visibilitychange',resume);resize();resume();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();ro.disconnect();document.removeEventListener('visibilitychange',resume);};
 },[reduced]);
 return reduced ? null : <canvas ref={ref} className="particle-canvas" aria-hidden="true" />;
}
