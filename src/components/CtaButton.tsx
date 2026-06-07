import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

type Variant = "primary" | "outline";
type Size = "default" | "sm";

const BASE =
  "group inline-flex items-center justify-center gap-3 text-xs font-medium tracking-[0.25em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-gold text-ink hover:bg-gold-soft",
  outline: "border border-border text-foreground hover:border-gold hover:text-gold",
};

const SIZES: Record<Size, string> = {
  default: "px-7 py-4",
  sm: "px-5 py-2.5",
};

function classesFor(variant: Variant, size: Size, extra?: string): string {
  return [BASE, VARIANTS[variant], SIZES[size], extra].filter(Boolean).join(" ");
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

type LinkVariant = CommonProps & { to: LinkProps["to"]; href?: never; type?: never };
type AnchorVariant = CommonProps & {
  href: string;
  to?: never;
  type?: never;
  target?: string;
  rel?: string;
};
type ButtonVariant = CommonProps & {
  type: "submit" | "button";
  disabled?: boolean;
  to?: never;
  href?: never;
};

type CtaButtonProps = LinkVariant | AnchorVariant | ButtonVariant;

function Content({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );
}

/**
 * The single editorial CTA used across the site: Logo Blue fill (primary) or
 * hairline outline, uppercase wide-tracked label, sharp corners, and a
 * consistent Logo Blue focus-visible ring. Renders as an internal Link, an
 * external anchor, or a button depending on the props supplied.
 */
export function CtaButton(props: CtaButtonProps) {
  const { variant = "primary", size = "default", arrow, className, onClick, children } = props;
  const classes = classesFor(variant, size, className);

  if ("href" in props && props.href !== undefined) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={onClick}
        className={classes}
      >
        <Content arrow={arrow}>{children}</Content>
      </a>
    );
  }

  if ("type" in props && props.type !== undefined) {
    return (
      <button
        type={props.type}
        disabled={props.disabled}
        onClick={onClick}
        className={`${classes} disabled:cursor-not-allowed disabled:opacity-60`}
      >
        <Content arrow={arrow}>{children}</Content>
      </button>
    );
  }

  return (
    <Link to={props.to} onClick={onClick} className={classes}>
      <Content arrow={arrow}>{children}</Content>
    </Link>
  );
}
