import React from 'react';

const ManageCoursesPage = props => {
    debugger;
    return (
        <>
        <h2>Manage Course</h2>
        {props.match.params.slug}
        </>
    )
}

export default ManageCoursesPage;