import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";

export default function PagestoRead() {
  const books = useLoaderData();

  const data = books.map(book => ({
    name: book.bookName.slice(0, 15),
    pages: book.totalPages
  }));

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f7f",
    "#00c49f",
    "#a28fd0",
    "#ff9f40",
    "#4bc0c0",
    "#9966ff"
  ];

  return (
    <div className="p-5 mt-5">
        <BarChart width='100%' height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar 
        dataKey="pages" 
        barSize={80}
        isAnimationActive={true}
        animationDuration={1000}
        animationEasing='ease-out'
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </Bar>

      </BarChart>
    </div>
  );
}