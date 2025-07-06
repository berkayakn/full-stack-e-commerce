import { Row, Col, Card, Statistic } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashboardPage = () => {
  const productSalesData = [
    { name: "January", numberOfProductSold: 10 },
    { name: "February", numberOfProductSold: 15 },
    { name: "March", numberOfProductSold: 20 },
    { name: "April", numberOfProductSold: 25 },
    { name: "May", numberOfProductSold: 30 },
    { name: "June", numberOfProductSold: 35 },
  ];

  const customerData = [
    { name: "January", numberOfCustomer: 20 },
    { name: "February", numberOfCustomer: 25 },
    { name: "March", numberOfCustomer: 30 },
    { name: "April", numberOfCustomer: 10 },
    { name: "May", numberOfCustomer: 40 },
    { name: "June", numberOfCustomer: 45 },
  ];

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Product Sales" value={120} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total Number of Customer" value={50} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total Revenue" value={3000} prefix="$" />
          </Card>
        </Col>
      </Row>
      <Card style={{ marginTop: "20px" }}>
        <h2>Product Sales Growth in the Last Month</h2>
        <LineChart
          width={600}
          height={600}
          data={productSalesData}
          margin={{ top: 5, right: 30, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="numberOfProductSold"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
      <Card style={{ marginTop: "20px" }}>
        <h2>Customer Growth in the Last Month</h2>
        <LineChart
          width={600}
          height={300}
          data={customerData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="numberOfCustomer"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
    </div>
  );
};

export default DashboardPage;
