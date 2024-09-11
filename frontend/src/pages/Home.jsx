import { useState, useEffect } from "react";
import Select from "react-select";
import api from "../api";
import Assignment from "../components/Assignment";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

function Home() {
    const [assignments, setAssignments] = useState([]);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [due_date, setDueDate] = useState("");
    const [class_name, setClassName] = useState(null);
    const [options, setOptions] = useState([]);  // Use state to store options

    const classNameValue = class_name ? class_name.value : " ";

    useEffect(() => {
        getAssignments();
        getClasses();
    }, []);

    const getClasses = () => {
        api.get("/api/classes/")
            .then((res) => res.data)
            .then((data) => {
                // Map the data and set it to the options state
                const classOptions = data.map((x) => ({ value: x.class_name, label: x.class_name }));
                setOptions(classOptions); // Update options state
            })
            .catch((err) => alert(err));
    };

    const getAssignments = () => {
        api.get("/api/assignments/")
            .then((res) => res.data)
            .then((data) => {
                setAssignments(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteAssignment = (id) => {
        api.delete(`/api/assignments/delete/${id}/`)
            .then(() => {
                getAssignments();
            })
            .catch((error) => alert(error));
    };

    const createAssignment = (e) => {
        e.preventDefault();
        api.post("/api/assignments/", { description, title, class_name: classNameValue, due_date })
            .then(() => {
                getAssignments();
            })
            .catch((err) => alert(err));
    };


    return (
        <div className="w-min-screen h-min-screen bg-gray-200">
            <Navbar />
            <div className="bg-[#e5e7eb] h-full pb-10 mt-10 w-[90%] sticky mx-auto">
                <div className="flex flex-col  h-[80%] space-y-2 gap-x-2 items-start  sm:flex-row sm:space-x-2 w-full">
                    <form
                        className="flex flex-col gap-2 bg-white border-2 border-gray-300  h-full p-8 content-center mx-auto sm:mr-auto sm:mx-0 w-full sm:w-max md:w-max"
                        onSubmit={createAssignment}
                    >
                        <h1 className="text-2xl font-Poppins">Create An Assignment</h1>
                        <div className="h-1/2">
                            <label className="text-xl mr-4 font-Poppins">Title:</label>
                            <br />
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                className="h-7 border-[1px] p-2 w-full rounded-lg border-solid border-black"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>
                        <div className="h-1/2">
                            <label className="text-xl mr-2 font-Poppins" htmlFor="description">Description:</label>
                            <br />
                            <textarea
                                id="description"
                                name="description"
                                required
                                className="h-7 border-[1px] px-2 w-full rounded-lg border-solid border-black"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="h-1/2 max-w-[90%] font-Poppins">
                            <label htmlFor="class_name">Class:</label>
                            <br />
                            <Select
                                className="basic-single"
                                options={options}  // Use options from state
                                type="text"
                                name="class_name"
                                required
                                className="w-full border-[1px]  w-full rounded-lg border-solid border-black"
                                onChange={(selectedOption) => setClassName(selectedOption)}  // Update class_name state
                                value={class_name}
                            />
                        </div>
                        <div className="h-1/2 font-Poppins">
                            <label htmlFor="due_date">Due Date:</label>
                            <br />
                            <input
                                type="date"
                                id="due_date"
                                name="due_date"
                                required
                                className="h-7 border-[1px] p-2  w-full rounded-lg border-solid border-black"
                                onChange={(e) => setDueDate(e.target.value)}
                                value={due_date}
                            />
                        </div>
                        <br />
                        <input type="submit" className="bg-green-300 h-1/4 rounded-lg px-4 py-1" value="Submit">
                            {console.log(title, class_name, due_date)}
                        </input>
                    </form>

                    <div className="grid overflow-y-scroll overflow-x-none bg-white h-full border-2 border-gray-300 mx-auto grid-cols-1 grid-auto-rows  md:grid-cols-2   lg:grid-flow-row lg:grid-cols-3  xl:grid-cols-4 gap-12 p-7 w-full ">
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
