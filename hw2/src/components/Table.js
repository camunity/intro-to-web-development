import React from 'react';



const TableHeader = () => { 
    // boilerplate table header functional component
    return (
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Remove</th>
                </tr>
            </thead>
        </table>
    );
}

const TableBody = props => { 
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return (
            <tbody>
                <tr scope="row" key={index}>
                    <td>{row.name}</td>
                    <td><a href={row.URL}>{row.URL}</a></td>
                    <td><button onClick={() => props.removeLink(index)} class="btn btn-primary" >Delete</button></td>
                </tr>
            </tbody>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
   const { linkData, removeLink } = props;
    {/*TODO - return <table> component, TableHeader and TableBody  */}
    return (
        <React.Fragment>
            <TableHeader/>
            <TableBody
                linkData={linkData}
                removeLink={removeLink}
            />
        </React.Fragment>
    )
}


export default Table;