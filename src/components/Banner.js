import React from "react";
import "../css/Banner.css";

console.log(process.env.REACT_APP_API_KEY);
console.log("kewa blay");

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div>
      <header
        className="banner"
        style={{
          background: `center/cover  url(https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg)`,
        }}
      >
        <div className="banner__content">
          <h1 className="banner__title">Movie tilte</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
          </div>
          <p className="banner__description">
            {truncate(
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ab nemo suscipit adipisci nostrum dignissimos voluptatum corporis eveniet. Recusandae natus corporis rem, mollitia officia, voluptas et sint quisquam hic expedita, aperiam itaque quaerat consequatur. Recusandae rerum laboriosam, illum alias cumque architecto possimus exercitationem voluptatibus ex voluptate necessitatibus repudiandae, provident delectus nam dicta? Perspiciatis, similique. Obcaecati cumque sed ipsum incidunt et exercitationem magnam excepturi cum, aspernatur accusantium debitis facere adipisci voluptatibus doloribus, repellendus voluptate molestiae! Harum iure dolorem esse eius dicta illum soluta porro nam eaque, quas explicabo consectetur, quasi veritatis ratione saepe reiciendis enim veniam quo incidunt aspernatur, autem deleniti est facilis vero. Accusamus repudiandae quod nisi totam possimus, placeat ab error deleniti quaerat ducimus veniam cupiditate eveniet, eius sequi ut corporis dolore repellendus. Dolorem numquam eius optio similique labore sint sed aspernatur incidunt tenetur voluptatibus odit saepe, ex perferendis sit, quos ullam ipsam ratione aut illo officiis id aperiam rerum error eaque. Facere ipsam hic deserunt inventore ab voluptate harum rerum, assumenda sed enim error atque aliquid magni rem, iste obcaecati culpa illum consequatur modi, optio sequi libero. Fuga?",
              150
            )}
          </p>
        </div>

        <div className="banner--fadeButtom"></div>
      </header>
    </div>
  );
}

export default Banner;
