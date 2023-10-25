import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descriptionbox</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          praesentium facilis eos harum. Quod aliquid eum molestias dolorum
          neque nisi, libero doloremque assumenda vero adipisci a similique
          magni quas. Pariatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, pariatur?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quas
          sequi, modi impedit velit expedita doloremque tempore quidem quam
          laboriosam tenetur, ad voluptatem voluptas neque!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
