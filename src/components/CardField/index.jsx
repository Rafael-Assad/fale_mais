import Card from "../Card";
import { CardFieldContainer } from "./style";

const CardField = ({ plansMock }) => {
  return (
    <CardFieldContainer>
      {plansMock.map(({ id, plan, range }) => {
        return( 
          <Card key={id} plan={plan} range={range} />
        );
      })}
    </CardFieldContainer>
  );
};

export default CardField;
