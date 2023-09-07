import { useState } from "react";
import "./QuestionForm.css";

const QuestionForm = (props) => {
    const { addQuestion, COMPLEXITY } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [complexity, setComplexity] = useState(null);

    return (
        <form onSubmit = {handleSubmit}>
            <h2>Question Form</h2>
            <div>
                <label htmlFor = "title">Title: </label>
                <input 
                  type = "text" 
                  id = "title" 
                  value = { title } 
                  onChange = {(event) => setTitle(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor = "description">Description: </label>
                <textarea 
                  id = "description" 
                  value = { description } 
                  onChange = {(event) => setDescription(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor = "category">Category: </label>
                <input 
                  type = "text" 
                  id = "category" 
                  value = { category } 
                  onChange = {(event) => setCategory(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor = "complexity">Complexity: </label>
                <select 
                  id = "complexity"
                  value={ complexity } 
                  onChange = {(event) => setComplexity(event.target.value)}
                >
                    <option value = {null}>--Please choose an option--</option>
                    {Object.values(COMPLEXITY).map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <button type = "submit">Submit</button>
        </form>
    )
}

export default QuestionForm;