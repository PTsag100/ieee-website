import React from "react";
import JoinCard from "../components/JoinCard";
import SectionHeading from "../components/SectionHeading";
import { AiFillTool, AiFillStar } from "react-icons/ai";
import { GiSuitcase } from "react-icons/gi";
import "./WhyJoin.css";
function WhyJoin() {
  return (
    <section id="why-join">
      <SectionHeading greek={"Γιατι να μπεις"} english={"Why join?"} />
      <p className="why-join-p">
        <span>
          Ως μέλος του IEEE, θα έχετε την ευκαιρία να συνδεθείτε με ειδικούς
          στον τομέα σας, να παρακολουθήσετε συνέδρια και εκδηλώσεις και να
          παραμείνετε ενημερωμένοι για τις τελευταίες τάσεις και τεχνολογίες.
        </span>
        <span>
          Είτε είστε φοιτητής είτε έμπειρος επαγγελματίας, το IEEE μπορεί να σας
          βοηθήσει να επιτύχετε τους επαγγελματικούς σας στόχους και να
          προωθήσετε την καριέρα σας.
        </span>
      </p>
      <ul className="join-card-list">
        <li>
          <JoinCard
            heading={"Access to technical resources"}
            text={
              "IEEE provides access to a huge range of technical resources, including research papers, books, and other publications."
            }
          >
            <AiFillTool />
          </JoinCard>
        </li>
        <li>
          <JoinCard
            heading={" Professional development"}
            text={
              "Take advantage of workshops, conferences, and courses to stay current with new technologies and learn new skills."
            }
          >
            <AiFillStar />
          </JoinCard>
        </li>
        <li>
          <JoinCard
            heading={"Career resources"}
            text={
              "IEEE offers career resources to members, including job listings, career advice, and networking opportunities. "
            }
          >
            <GiSuitcase />
          </JoinCard>
        </li>
      </ul>
    </section>
  );
}

export default WhyJoin;
