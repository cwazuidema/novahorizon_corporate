export default function Card({ className = '', children }) {
    return (
        <div className={[
            'rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08),0_10px_30px_rgba(0,0,0,0.04)]',
            className,
        ].filter(Boolean).join(' ')}>
            {children}
        </div>
    );
}


