import styles from '../assets/Table.module.css'


function Table(props) {

    return <div>
        <table>
            <thead>
                <tr>
                    {props.headers.map((h) => {
                        return <th>{h.label}</th>
                    })}
                </tr>
            </thead>

            <tbody>
                {props.body.map((h) => {
                    return <tr>
                        <td>{h.id}</td>
                        <td>{h.name}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>

}






export default Table;