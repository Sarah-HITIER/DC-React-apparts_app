import { useQuery } from "react-query";

export default function Fetch() {
    const { isLoading, error, data } = useQuery(["repoData"], () =>
        fetch("https://baconipsum.com/api/?type=meat-and-filler").then((res) =>
            res.json()
        )
    );

    if (isLoading) return "Loading...";
    if (error) return error;
    return <>{data}</>;
}

// import { useState, useEffect } from "react";

// export default function Datas() {
//     const [datas, setDatas] = useState("");
//     const [isLoading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchAPI = async () => {
//         try {
//             const response = await fetch(
//                 "https://baconipsum.com/api/?type=meat-and-filler"
//             );
//             const data = await response.json();
//             setDatas(data);
//             setLoading(false);
//         } catch (err) {
//             setError(err);
//             setLoading(false);
//             throw err;
//         }
//     };

//     useEffect(() => {
//         fetchAPI();
//     }, []);

//     // useEffect(() => {
//     //     setLoading(true);
//     //     fetch("https://baconipsum.com/api/?type=meat-and-filler")
//     //         .then((res) => res.json())
//     //         .then((json) => {
//     //             setDatas(json);
//     //             setLoading(false);
//     //         });
//     // }, []);

//     if (isLoading) return "Loading...";
//     if (error) return error;
//     return <>{datas}</>;
// }
