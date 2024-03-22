interface StudentProps {
  name?: string;
  age?: number;
  isStudent?: boolean;
}

const Student: React.FC<StudentProps> = (props) => {

  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Name: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
};

Student.defaultProps = {
  name: "Guest",
  age: 20,
  isStudent: false,
};

export default Student;
