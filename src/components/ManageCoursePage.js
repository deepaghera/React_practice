import React,{ useState , useEffect} from 'react';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';
// import { Prompt } from 'react-router-dom';
const ManageCoursesPage = props => {
    const [errors, setErrors] = useState({});
   const [course , setCourse] = useState({
        id:null,
        slug:"",
        title:"",
        authorId:null,
        category:""
   });
   useEffect ( () => {
       const slug = props.match.params.slug;
       if(slug){
           courseApi.getCourseBySlug(slug).then( _course => setCourse(_course))
       }
   },[props.match.params.slug])
   function handleChange(event){
       const updatedCourse =  {...course,[event.target.name]:event.target.value};
       setCourse(updatedCourse);
   }

   function formIsValid(){
       const _errors = {};
       if(!course.title) _errors.title = "Title is Required";
       if(!course.authorId) _errors.authorId = "Author Id is Required";
       if(!course.category) _errors.category = "Category Id is Required";
       setErrors(_errors);
       return Object.keys(_errors).length === 0;

   }

   function handleSubmit(event){
       event.preventDefault();
       if(!formIsValid()) return;
       courseApi.saveCourse(course).then(() => {                                                                        
           props.history.push("/courses");
           toast.success("Course Saved.");
       });
   }
    return (
        <>
        <h2>Manage Course</h2>
        <CourseForm course={course} 
            errors={errors}
            onChange={handleChange} 
            onSubmit={handleSubmit}
         />
        {props.match.params.slug}
        </>
    )
}

export default ManageCoursesPage;