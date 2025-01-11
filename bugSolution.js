```javascript
// pages/about.js
import profilePic from '/images/profile.jpg';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src={profilePic.src} width={200} height={200} alt="Profile" />
    </div>
  );
}

export default About;
```