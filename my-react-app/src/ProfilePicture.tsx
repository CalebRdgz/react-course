function ProfilePicture() {
  const imageUrl = "./src/assets/me.png";

  const handleClick = (e: any) => {
    e.target.style.display = "none";
  };

  return <img src={imageUrl} onClick={(e) => handleClick(e)}></img>;
}

export default ProfilePicture;
