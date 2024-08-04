import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <div className="container mx-auto">
            <Head title="Welcome" />
        </div>
    );
}
