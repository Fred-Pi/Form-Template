import "./App.css";
import {useState} from "react";

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        // Check if the first name is not empty
        const isFirstNameValid = firstName.trim() !== "";

        // Check if the email is valid and not empty
        const isEmailValid = email.trim() !== "" && validateEmail(email);

        // Check if the password is at least 8 characters long
        const isPasswordValid = password.value.length >= 8;

        // Check if the role is either individual or business
        const isRoleValid = role === "individual" || role === "business";

        // Return true if all conditions are met, otherwise, return false
        return isFirstNameValid && isEmailValid && isPasswordValid && isRoleValid;
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role");
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        alert("Account created!");
        clearForm();

        const handleFirstNameChange = (event) => {
            setFirstName(event.target.value);
        };

        const handleLastNameChange = (event) => {
            setLastName(event.target.value);
        };

        const handleEmailChange = (event) => {
            setEmail(event.target.value);
        };

        const handlePasswordChange = (event) => {
            setPassword({
                value: event.target.value,
                isTouched: true,
            });
        };

        const handleRoleChange = (event) => {
            setRole(event.target.value);
        };


        return (
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h2>Sign Up</h2>
                        <div className="Field">
                            <label>
                                First name <sup>*</sup>
                            </label>
                            <input
                                type="text"
                                placeholder="First name"
                                value={firstName}
                                onChange={handleFirstNameChange}/>
                        </div>
                        <div className="Field">
                            <label>Last name</label>
                            <input
                                type="text"
                                placeholder="Last name"
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                        </div>
                        <div className="Field">
                            <label>
                                Email address <sup>*</sup>
                            </label>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={handleEmailChange}/>
                        </div>
                        <div className="Field">
                            <label>
                                Password <sup>*</sup>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password.value}
                                onChange={handlePasswordChange}/>
                            {password.isTouched && password.value.length < 8 && <PasswordErrorMessage/>}
                        </div>
                        <div className="Field">
                            <label>
                                Role <sup>*</sup>
                            </label>
                            <select value={Role} onChange={handleRoleChange}>
                                <option value="role">Role</option>
                                <option value="individual">Individual</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <button type="submit" disabled={!getIsFormValid()}>
                            Create account
                        </button>
                    </fieldset>
                </form>
            </div>
        );
    }

    export default App;
}
