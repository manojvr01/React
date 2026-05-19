import Profile from "./components/Profile";
import Students from "./components/Students";
function App() {
  return (
    <div>
      <h1>Student Details</h1>
      <Profile name="Manoj" role="Frontend Developer" />
      <Profile name="Rahul" role="Backend Developer" />
      <Students name="Dhanush" usn="4yg23cs028" branch="cse"/>
    </div>
  );
}

export default App;