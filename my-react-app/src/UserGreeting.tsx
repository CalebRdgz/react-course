interface UserProps {
  isLoggedIn: boolean;
  username: string;
}

const UserGreeting: React.FC<UserProps> = (props) => {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );

  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );
  
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
};

export default UserGreeting;
