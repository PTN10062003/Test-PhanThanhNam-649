const menuItems = ["Trang chủ", "Khám phá", "Hồ sơ"];

export default function Navigation() {
    return (
        <>
            {/* Desktop */}
            <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 flex-col border-r border-white/10 bg-neutral-950 p-6 text-white md:flex">
                <h1 className="mb-10 text-xl font-bold">Video Feed</h1>

                <nav className="flex flex-col gap-3">
                    {menuItems.map((item, index) => (
                        <button
                            key={item}
                            type="button"
                            className={`rounded-lg px-4 py-3 text-left ${index === 0
                                ? "bg-white text-black"
                                : "hover:bg-white/10"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Mobile */}
            <nav className="fixed inset-x-0 bottom-0 z-40 flex h-16 items-center justify-around border-t border-white/10 bg-black/90 text-white backdrop-blur md:hidden">
                {menuItems.map((item, index) => (
                    <button
                        key={item}
                        type="button"
                        className={`px-3 py-2 text-sm ${index === 0 ? "font-bold text-white" : "text-neutral-400"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </nav>
        </>
    );
}