import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="container mx-auto py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                minima saepe excepturi blanditiis? Quisquam eveniet ullam
                impedit tempore quis alias, provident eos omnis quasi? Voluptas
                labore reprehenderit expedita consectetur id?
            </div>
        </>
    );
}
