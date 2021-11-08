import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [author, setAuthor] = useState("mario");
    let [isPending, setIsPending] = useState(false);
    let history = useHistory();

    let handleSubmit = (e) =>{
        e.preventDefault();
        let blog ={ title, body, author};
        setIsPending(true);
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("complete blog added");
            setIsPending(false);
            // history.go(-1);
            history.push("/");
        })
        
    }


    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label> blog title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label> blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog autohor:</label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled> Loading</button>}
                </form>
        </div>
     );
}
 
export default Create;