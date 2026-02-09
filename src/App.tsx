
import MemberCard from "./MemberCard";
import './App.css'


function App() {
 const Member = [
  {
    name: "Gadgad, Mara" ,
    course:"BSIT" ,
    status:"Active" ,
    email: "gadgadmarasyldeni@gmail.com" ,
    phone: "(123) 456 7890" ,
    activities: [ "Orientation ", "Web Dev ", "Networking"]
  },
  {
    name: "Opena, Isabel" ,
    course:"BSIT" ,
    status:"Active" ,
    email: "openaisabel@gmail.com" ,
    phone: "(098) 765 4321" ,
    activities: [ "Fundrasing ", "Web Dev ", "Networking"]
  },
  {
    name: "Topacio, Erika" ,
    course:"BSIT" ,
    status:"Active" ,
    email: "topacioerika@gmail.com" ,
    phone: "(246) 812 1234)" ,
    activities: [ "Orientation ", "Web Dev ", "Networking"]
  }
 ]

  return (
    <>
    <section>
      <h1>University Club Member Dashboard</h1>

      {Member.map((member, index) => (
        <MemberCard
        key= {index}
        name={member.name}
        course={member.course}
        status={member.status}
        email={member.email}
        phone={member.phone}
        activities={member.activities}
     />   


      ))}
      </section>
      </>
  );
  };


export default App
