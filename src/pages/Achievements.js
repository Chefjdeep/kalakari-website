import React from "react";
import "../styles/Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Ach1",
      description: "Ach1",
      photo: "/images/achievement1.jpg",
    },
    {
      id: 2,
      title: "Ach2",
      description: "Ach2.",
      photo: "/images/achievement2.jpg",
    },
    {
      id: 3,
      title: "Ach3",
      description: "Ach3",
      photo: "/images/achievement3.jpg",
    },
  ];

  return (
    <div className="achievements-container">
      <h2>Our Achievements</h2>
      <div className="achievements-list">
        {achievements.map((achievement) => (
          <div className="achievement" key={achievement.id}>
            <img
              src={achievement.photo}
              alt={achievement.title}
              className="achievement-photo"
            />
            <div className="achievement-info">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
