// styles
import './AboutView.css';

export default function AboutView() {
  return (
    <div className="aboutview">
      <p>About this website</p>
      <div className="aboutview__text">
        <p>As you may have noticed, this is not a real webshop. It is a MERN stack project I made for my programming portfolio.</p>
        <p>My name is Dorine van Belzen and I am a software developer with a MSc in Clinical Psychology.</p>
        <p>One day I hope to develop the virtual games that you see on this website.</p>
        <p>Although I think virtual experiences should never replace life in the real world,<br></br>
            I do believe they can give us the opportunity to practice skills in a safe environment,<br></br> 
            and to experience sensations that are not always within our reach (like walking on a sunny beach).<br></br>
            Virtual reality games can help us improve our mental health and function better in the outside world,<br></br>
            while being fun to play at the same time!
        </p>
      </div>
    </div>
  )
}
