const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          suscipit non veritatis totam ea, ullam fugiat sequi vero eos quisquam
          vel, harum, rerum odit saepe placeat! Reiciendis blanditiis ullam
          ducimus?
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, eos
          cumque cupiditate unde perspiciatis, accusantium eaque beatae nesciunt
          accusamus odio laboriosam culpa. Numquam aliquam, ipsam reiciendis
          amet corporis laborum alias pariatur harum a maiores repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos
          corporis obcaecati.
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
