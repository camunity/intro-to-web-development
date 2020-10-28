import React from 'react';

const TableHeader = () => {
    // Table header functional component
    return (
        <thead>
            <tr>
                <th>NAME</th>
                <th>URL</th>
                <th>REMOVE</th>
            </tr>
        </thead>
    );
}

function TableContainer(props) {
  
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td><a href={row.url}>{row.url}</a></td>
                <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {

    const {linkData,removeLink} = props;
    return (
        <div>
            <TableHeader/>
            <TableContainer linkData={linkData} removeLink={removeLink} />
        </div>
    )
}

export default Table;
