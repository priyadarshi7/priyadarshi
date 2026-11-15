import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface Props {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export default function Reveal({ as: Tag = "div", className = "", children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-opacity duration-500 motion-reduce:transition-none ${
        shown ? "opacity-100" : "opacity-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
