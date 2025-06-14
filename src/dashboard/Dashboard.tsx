import { Form } from "./components/Form";
import { ShowUser } from "./components/ShowUser";

export function Dashboard() {
    return (
        <div>
            <Form />
            <ShowUser />
            <ShowUser />
        </div>
    );
}