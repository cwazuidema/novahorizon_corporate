export default function Container({ className = '', children }) {
    return (
        <div className={["mx-auto w-full max-w-6xl px-4 md:px-6", className].filter(Boolean).join(' ')}>
            {children}
        </div>
    );
}


