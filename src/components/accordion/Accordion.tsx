import { type ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  return (
    <details>
      <summary>{title}</summary>
      <p>{children}</p>
    </details>
  );
}
