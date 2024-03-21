interface StudentProps {
    name: string;
}

const Student: React.FC<StudentProps> = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  );
}

export default Student;
