import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React, { ReactNode } from "react";




interface SectionHeadingWrapperProps {
  children?: ReactNode;
  className?: string
}

export function SectionHeadingWrapper({ children, className }: SectionHeadingWrapperProps) {
  return (
    <div className={`w-full relative flex flex-col flex-nowrap justify-center items-center pt-9 m-auto before:content-[''] before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:w-22.5 before:h-1.5 before:bg-primary-500  ${className}`}>
      {children}
    </div>
  )
}

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-nowrap w-full mb-11 last:mb-0">
      {children}
    </div>
  )
}

interface SectionHeadingProps {
  children?: ReactNode;
  className?: string;
  title: string;

}
export function SectionHeading({ children, className, title }: SectionHeadingProps) {
  return (
    <>
      <h1 className={`text-center mx-32 lg:text-[38px] text-[32px] w-full ${className}`}>{title}</h1>
      {children && (
        <Breadcrumbs>{children}</Breadcrumbs>
      )}
    </>
  )
}

export function Breadcrumbs({ children }) {
  const items = React.Children.toArray(children);
  return (
    <nav aria-label="Breadcrumb" className="flex flex-row flex-nowrap items-center">
      <ol className="flex items-center">
        {items.map((child, index) => (
          <React.Fragment key={index}>
            {child}

            {index < items.length - 1 && (
              <li
                aria-hidden="true"
                className="mx-2 inline-flex items-center text-slate-400"
              >
                <IconChevronRight size={14} className="text-gray-400" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}


export function BreadcrumbsItem({ href, children }) {
  const itemStyles = `
    relative inline-flex items-center mr-6 no-underline text-base font-normal 
    text-slate-500 hover:text-slate-900 transition-colors duration-200
    last:mr-0`;

  return (
    <li className="inline-flex items-center">
      {href ? (
        <Link href={href} className={itemStyles}>
          {children}
        </Link>
      ) : (
        // If no href is passed, render as plain text (perfect for the current active page)
        <span aria-current="page" className={`${itemStyles} text-slate-900 font-medium`}>
          {children}
        </span>
      )}
    </li>
  );
}

