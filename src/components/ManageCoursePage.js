import React,{ useState } from 'react';
import CourseForm from './CourseForm';
// import { Prompt } from 'react-router-dom';
const ManageCoursesPage = props => {
   const [course , setCourse] = useState({
        id:null,
        slug:"",
        title:"",
        authorId:null,
        category:""
   });
   function handleTitleChage(event){
       const updatedCourse =  {...course,title:event.target.value};
       setCourse(updatedCourse);
   }
    return (
        <>
        <h2>Manage Course</h2>
        <CourseForm course={course} onTitleChange={handleTitleChage}/>
        {props.match.params.slug}
        </>
    )
}

export default ManageCoursesPage;