import React from "react";
import styles from "./orgchart.module.css";

export function Orgchart({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-nowrap items-center shrink-0 w-[800px] max-w-[900px] overflow-visible"> 
      {children} 
    </div>
  )
}

export function OrgchartContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden w-full max-w-full py-[36px] overflow-visible rounded-md border border-gray-100 bg-bottom min-[680px]:flex min-[680px]:justify-center bg-[url('/static/orgchart-background.jpg')]">
      {children} 
    </div>
  )
}

export function OrgchartBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="z-[1] relative flex flex-row flex-nowrap justify-center w-full pointer-events-none"> 
      {children} 
    </div>
  )
}

export function OrgchartGroup({ 
  children, 
  isRoot, 
  variant, 
  style 
}: { 
  children: React.ReactNode; 
  isRoot?: boolean; 
  variant?: string; 
  style?: React.CSSProperties 
}) {
  return (
    <div 
      style={style}
      className={`z-[1] relative flex flex-row flex-nowrap justify-center w-full pointer-events-none ${isRoot ? "pt-0" : "pb-4"} ${variant ? styles[variant] : ""}`}
    > 
      {children}
    </div>
  )
}

export function UCRTW({ children }: { children: React.ReactNode }) {
  return <div className={styles.ucrtw}> {children}</div>
}

export function UCOS2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div className={styles.ucos2} style={style}> {children}</div>
}

export function UCOS3({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div className={styles.ucos3} style={style}> {children}</div>
}

export function OrgchartItem({
  children,
  isRoot,
  isParent,
  className,
  variant,
}: {
  children: React.ReactNode;
  isRoot?: boolean;
  isParent?: boolean;
  className?:string;
  variant?: string;
}) {
  return (
    <div
      className={`
        relative isolate z-2 flex flex-col flex-nowrap items-center justify-center
        w-28 h-24 p-1.5 mx-auto rounded border border-gray-300 bg-white
        pointer-events-auto cursor-pointer transition-all duration-150
        focus-within:z-3 hover:z-3 hover:border-secondary-400
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]
        ${!isRoot ? styles.item : ""}
        ${isParent ? styles.parent : ""}
        ${variant ? styles[variant] : ""}
      ${className}`}
    >
      {children}
    </div>
  );
}

export function OrgchartAvatarCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[50px] h-[50px] mb-[6px] rounded-full overflow-hidden border border-gray-100">
      {children}
    </div>
  )
}

export function OrgchartAvatarRectangle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[50px] h-[50px] mb-[6px] overflow-hidden border border-gray-100">
      {children}
    </div>
  )
}

export function OrgchartData({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] uppercase font-bold text-center leading-tight text-gray-800">{children}</span>
  )
}