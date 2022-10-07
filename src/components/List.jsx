import Item from "./Item";

export default function List({ apparts = [] }) {
    if (apparts.length === 0) {
        return "Apparts not found";
    }

    return (
        <ul>
            {apparts.map((appart, index) => (
                <Item key={index} title={appart.title} status={appart.status}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis ullam sequi adipisci? Pariatur, deleniti sunt!
                    Totam laboriosam quaerat nisi explicabo modi! Hic mollitia
                    maiores eius nihil itaque odio recusandae laudantium.
                </Item>
            ))}
        </ul>
    );
}
