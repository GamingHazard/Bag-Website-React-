import React from "react";
import "w3-css/w3.css";

function DashboardScreen() {
  return (
    <div className="w3-mobile  w3-animate-right " style={{ display: "flex" }}>
      <div
        style={{ width: 260, height: 700 }}
        className="w3-bar-block w3-center w3-mobile w3-hide-small  w3-card"
      >
        <h1> Admin Panel</h1>
        <div class="w3-bar-item w3-button">Orders</div>
        <div class="w3-bar-item w3-button">Requests</div>
        <div class="w3-bar-item w3-button">Messages</div>
        <div class="w3-bar-item w3-button">Complaints</div>
        <div
          class="w3-bar-item w3-button w3-bottom "
          style={{ fontWeight: "bold" }}
        >
          Logout
        </div>
      </div>

      {/* <div className="w3-padding w3-mobile">
        <p style={{ width: 1000 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae
          obcaecati debitis pariatur cum, accusamus id delectus culpa quo
          corporis asperiores ipsam et amet fuga non, saepe deserunt distinctio
          voluptates! Nihil quod sit necessitatibus labore. Facere unde dolorum
          voluptatibus? Minima repudiandae voluptate tenetur facere at officia
          culpa quod molestias veniam optio dolore quo eos consequatur totam,
          iusto sequi, provident eum? Doloremque alias nesciunt minus odit
          mollitia vero excepturi soluta id fuga, inventore incidunt voluptatum
          explicabo exercitationem aspernatur dolore deserunt in facilis quasi
          corrupti. Aperiam architecto dolor repudiandae voluptas dolorum
          asperiores! Hic, dignissimos. Aut atque error quo veritatis, nam in ex
          illum aspernatur totam? Vitae obcaecati, voluptatibus sed pariatur
          adipisci non! Commodi blanditiis sunt velit. Eius sint hic
          reprehenderit error est. Architecto, laborum? Corporis sit accusantium
          tempore voluptate maiores quisquam! Nobis, rem autem aut dolorem
          repellat doloremque voluptatibus enim in aperiam quia quidem provident
          hic. Beatae non incidunt odio praesentium dolores.
        </p>
      </div> */}
    </div>
  );
}

export default DashboardScreen;
