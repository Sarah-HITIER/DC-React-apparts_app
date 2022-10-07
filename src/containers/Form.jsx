import { useState } from "react";
import List from "components/List";
import data from "data.json";

export default function Form() {
    const [value, setValue] = useState("");
    const [filteredApparts, setFilteredApparts] = useState(data);

    const handleChange = (ev) => {
        setValue(ev.target.value);
        setFilteredApparts(
            data.filter((appart) =>
                appart.title
                    .toLowerCase()
                    .includes(ev.target.value.toLowerCase())
            )
        );
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                ></input>
                <p>La valeur recherchée est : {value}</p>
            </div>
            <List apparts={filteredApparts}></List>
        </>
    );
}
