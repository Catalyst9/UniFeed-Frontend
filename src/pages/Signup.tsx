import React, { useState } from "react";
import { Link } from "react-router-dom"; //Import Link from react-router-dom for navigation
import "../styles/LoginSignupStyles.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [university, setUniversity] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle signup logic here, including password confirmation
    console.log(
      "Signup with:",
      email,
      password,
      firstName,
      surname,
      dob,
      gender,
      university
    );
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-signup">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Surname"
            required
          />
        </div>
        <div className="form-signup">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Date of Birth"
            required
          />
        </div>
        {/* Continue wrapping fields in .form-row as needed */}
        <div className="form-signup">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="form-signup">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <select
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
          >
            <option value="">Select University</option>
            <option value="Loughborough">Loughborough</option>
            <option value="Nottingham">Nottingham</option>
            <option value="Leicester">Leicester</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login/">Log In</Link>
      </p>{" "}
      {/* Link to the login page */}
    </div>
  );
};

export default Signup;
