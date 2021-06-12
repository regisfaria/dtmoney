import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">R$12.000,00</td>
            <td>Work</td>
            <td>06/12/2020</td>
          </tr>

          <tr>
            <td>PlayStation Store</td>
            <td className="withdraw">- R$300,00</td>
            <td>Games</td>
            <td>06/006/2020</td>
          </tr>

          <tr>
            <td>Mechanical Keyboard</td>
            <td className="withdraw">- R$700,00</td>
            <td>Shopping</td>
            <td>06/03/2020</td>
          </tr>
        </tbody>
        
      </table>
    </Container>
  );
}