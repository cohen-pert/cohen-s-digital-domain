import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BOOKING } from './data';

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export function SectionHeading({ number, eyebrow, children }: { number: string; eyebrow: string; children: ReactNode }) {
  return <Reveal className="section-heading"><p className="eyebrow"><span>{number}</span> {eyebrow}</p><h2>{children}</h2></Reveal>;
}
export function BookButton({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  function move(e: MouseEvent<HTMLDivElement>) {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    if (ref.current) ref.current.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.12}px, ${(e.clientY-r.top-r.height/2)*0.12}px)`;
  }
  return <div className={`magnetic ${className}`} ref={ref} onMouseMove={move} onMouseLeave={() => { if(ref.current) ref.current.style.transform = ''; }}><Button asChild size="lg" className="book-button"><a href={BOOKING} target="_blank" rel="noopener noreferrer">Book a Call<ArrowUpRight aria-hidden="true" /></a></Button></div>;
}
export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  function move(e: MouseEvent<HTMLDivElement>) {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return;
    const r = e.currentTarget.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width; const y=(e.clientY-r.top)/r.height;
    e.currentTarget.style.setProperty('--pointer-x', `${x*100}%`); e.currentTarget.style.setProperty('--pointer-y', `${y*100}%`);
    e.currentTarget.style.transform = `perspective(1100px) rotateX(${(0.5-y)*4}deg) rotateY(${(x-0.5)*4}deg)`;
  }
  return <div className={`interactive-card ${className}`} onMouseMove={move} onMouseLeave={e => { e.currentTarget.style.transform=''; }}><div className="card-glare" aria-hidden="true" />{children}</div>;
}
export function Counter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once:true }); const reduced = useReducedMotion(); const [count, setCount] = useState(0);
  useEffect(() => { if(!inView || reduced) return; let frame=0; let start=0; function step(t:number) { if(!start) start=t; const p=Math.min((t-start)/1300,1); setCount(Math.round(value*(1-Math.pow(1-p,3)))); if(p<1) frame=requestAnimationFrame(step); } frame=requestAnimationFrame(step); return () => cancelAnimationFrame(frame); }, [inView, reduced, value]);
  return <span ref={ref}><span className="sr-only">{prefix}{value}{suffix}</span><span aria-hidden="true">{prefix}{reduced ? value : count}{suffix}</span></span>;
}
