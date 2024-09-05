import { useState, useEffect } from "react";
import Select from "react-select";
import api from "../api";
import Assignment from "../components/Assignment"
import "../styles/Home.css"
import Navbar from "../components/Navbar";

function Home() {
    const [assignments, setAssignments] = useState([]);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [due_date, setDueDate] = useState("");

    const [class_name, setClassName] = useState(null);
    const classNameValue = class_name ? class_name.value: " ";
    const options = [
        {value: "EVPP 109", label: "EVPP 109"},
        {value: "MATH 203", label: "MATH 203"},
        {value: "EVPP 108", label: "EVPP 108"},
        {value: "CS 330", label: "CS 330"},
        {value: "CS 110", label: "CS 110"},
    ]

    useEffect(() => {
        getAssignments();
    }, []);

    const getAssignments = () => {
        api
            .get("/api/assignments/")
            .then((res) => res.data)
            .then((data) => {
                setAssignments(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteAssignment = (id) => {
        api
            .delete(`/api/assignments/delete/${id}/`)
            .then((res) => {
                
                getAssignments();
            })
            .catch((error) => alert(error));
    };

    const createAssignment = (e) => {
        e.preventDefault();
        api
            .post("/api/assignments/", { description, title, class_name:classNameValue , due_date })
            .then((res) => {
                
                getAssignments();
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="w-screen h-screen bg-gray-200">
        <Navbar />
        <div className="bg-[#e5e7eb] pb-10 mt-10 w-[80%] sticky mx-auto">
            <div className="flex flex-col space-y-2 gap-x-2  items-start sm:flex-row sm:space-x-2 w-full ">
                
            <form className="flex flex-col gap-2 bg-white border-2 border-gray-300 max-h-[40%] p-6  content-center mx-auto sm:mr-auto sm:mx-0 w-full sm:w-max md:w-max" onSubmit={createAssignment}>
                <h1 className="text-2xl font-Poppins">Create An Assignment</h1>
                    <div className="h-full ">
                <label className="text-xl mr-4">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="h-7 border-[1px] border-solid border-black"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                </div>
                <div className="h-full ]">
                <label className="text-xl mr-2"htmlFor="description">Description:</label>
                <br />
                <textarea
                    id="description"
                    name="description"
                    required
                    className="h-7  border-[1px] border-solid border-black"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                </div>
                <div className="h-full  max-w-[50%]">
                <label classNamehtmlFor="title">Class:</label>
                <br />
                <Select
                className="basic-single"
                    options={options}
                    type="text"
                    name="class_name"
                    required
                    className=" w-full border-[1px] border-solid border-black"

                    onChange={(selectedOption) => setClassName(selectedOption)} // Updated handler
                    value={class_name}
                    
                />
                </div>
                <div className="h-full">
                
                <label classNamehtmlFor="title">Due Date:</label>
                <br/>
                <input
                    type="date"
                    id="due_date"
                    name="due_date"
                    required
                    className="h-7 border-[1px] border-solid border-black"

                    onChange={(e) => setDueDate(e.target.value)}
                    value={due_date}
                />
                </div>
                <br></br>
                <input type="submit" className="bg-green-300 px-4 py-1 "  value="Submit">{console.log(title, class_name, due_date)}</input>
            </form>

            <div className="grid overflow-y-scroll max-h-[70%] bg-white border-2 border-gray-300 mx-auto grid-cols-1 auto-rows-auto md:grid-cols-2 lg:grid-flow-row lg:grid-cols-3 xl:grid-cols-5 gap-4  w-full  bg-[#94a3b8]">
                {assignments.length === 0 && <h1>No Assignments</h1>}
                {assignments.map((assignment) => (
                    <Assignment assignment={assignment} onDelete={deleteAssignment} key={assignment.id} />
                ))}
            </div>

            </div>
            
           
            
        </div>
        </div>
    );
}

export default Home;