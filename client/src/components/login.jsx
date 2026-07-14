import react from 'react'
import axios from 'axios'
const loginUser = () => {
            const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (<>
        <div>

            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>

        </div>

    </>)

}

export default loginUser