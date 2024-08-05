import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <div className="container mx-auto max-w-full min-h-lvh bg-yellow-200 p-4 flex">
            <Head title="Welcome" />

            <aside className="p-4 bg-blue-200 basis-2/12">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci a, aliquam dicta asperiores cum sapiente, quod ex
                    tempora, laboriosam maxime quo veritatis. Inventore esse
                    alias iure laborum quae in delectus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci a, aliquam dicta asperiores cum sapiente, quod ex
                    tempora, laboriosam maxime quo veritatis. Inventore esse
                    alias iure laborum quae in delectus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci a, aliquam dicta asperiores cum sapiente, quod ex
                    tempora, laboriosam maxime quo veritatis. Inventore esse
                    alias iure laborum quae in delectus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci a, aliquam dicta asperiores cum sapiente, quod ex
                    tempora, laboriosam maxime quo veritatis. Inventore esse
                    alias iure laborum quae in delectus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci a, aliquam dicta asperiores cum sapiente, quod ex
                    tempora, laboriosam maxime quo veritatis. Inventore esse
                    alias iure laborum quae in delectus.
                </p>
            </aside>
            <main className="p-4 bg-white basis-10/12">
                <h1 className="text-3xl">Headline</h1>
                <h3 className="text-xl">Subheadline</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum voluptas saepe sit qui, veniam, distinctio quos
                    suscipit provident dolorum tempore officia eaque, delectus
                    reiciendis. Ad odio quam ullam nostrum nisi.
                </p>
            </main>
        </div>
    );
}
