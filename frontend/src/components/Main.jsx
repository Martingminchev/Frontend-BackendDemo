import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [petName, setPetName] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [friend, setFriend] = useState("");
  const [allFriends, setAllFriends] = useState([]);

  useEffect(() => {
    if (petName) {
      getFriends();
    }
  }, [buttonClicked]);

  const getFriends = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4444/pets/getFriends/${petName}`
      );
      if (response.data.friends) {
        setAllFriends(response.data.friends);
      }
    } catch (err) {
      console.log("err");
    }
  };

  const createPet = async () => {
    setButtonClicked(true);
    try {
      const response = await axios.post(
        "http://localhost:4444/pets/createPet",
        { petName: petName }
      );
      console.log(response);
    } catch (err) {
      console.log("err");
    }
  };

  const createFriend = async () => {
    setAllFriends([...allFriends, friend]);
    try {
      const response = await axios.post(
        "http://localhost:4444/pets/createFriend",
        { petName: petName, friend: friend }
      );
      console.log(response);
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <div>
      <div className="flex">
        <div>
          <h1>Your pet have friend?</h1>
          <p>Keep track of all of them in a single interface!</p>
        </div>
        <img
          src="https://www.howimetmydog.com/uploads/images/blog/_blogMain/Depositphotos_49380373_m-2015.jpg"
          alt="dogs playing"
        />
      </div>

      {!buttonClicked ? (
        <>
          <p>What is your pets name:</p>

          <input
            onChange={(e) => setPetName(e.target.value)}
            placeholder="Rocky"
            type="text"
          />
          <button onClick={createPet}>Confirm name</button>
        </>
      ) : (
        <>
          <p>Add friends of {petName}</p>
          <div>
            {allFriends.map((ele, idx) => {
              return <p key={idx}> {ele}</p>;
            })}
          </div>
          <input
            onChange={(e) => setFriend(e.target.value)}
            placeholder="Add a friend!"
          />
          <button onClick={createFriend}>Save friend</button>
        </>
      )}
    </div>
  );
}

export default Main;
