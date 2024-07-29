import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../Services/Services.module.css"

export const CardSpecialty = ({specialty, description}) => {
  return (
    <>
      <Card style={{ width: "18rem", padding: "2em"}} className={styles.card}>
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
