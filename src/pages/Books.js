import Table from "../components/Table";

const books = [
    {
        "id": "1",
        "name": "Wings of fire"
    },

    {
        "id": "2",
        "name": "Harry Potter"
    },

    {
        "id": "3",
        "name": "Dusk Till Dawn"
    },

    {
        "id": "4",
        "name": "Speak less shit !"
    }
]



const headers = [
    {
        "id": "1",
        "label": "id"
    },

    {
        "id": "2",
        "label": "name"
    }
];



function Books() {
    return <Table headers={headers} body={books} />
}


export default Books;