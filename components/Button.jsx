'use client';
import Link from 'next/link';

function cx(...c) { return c.filter(Boolean).join(' '); }

export default function Button({ children, variant = 'primary', className = '', href, ...props }) {
    const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
    const styles = {
        primary: cx(base, 'shadow-sm text-white bg-cta hover:bg-cta/90 focus:ring-cta ring-offset-white'),
        ghost: cx(base, 'text-primary hover:bg-secondary'),
        outline: cx(base, 'text-primary border border-primary/20 bg-white hover:bg-background'),
    };

    if (href) {
        return (
            <Link href={href} className={cx(styles[variant], className)}>{children}</Link>
        );
    }

    return (
        <button className={cx(styles[variant], className)} {...props}>
            {children}
        </button>
    );
}


