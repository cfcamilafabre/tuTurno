import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CardSpecialty = ({specialty, description}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
          <Card.Title>{specialty}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" style={{ width:"50%" }}>Ver más</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardSpecialty;
