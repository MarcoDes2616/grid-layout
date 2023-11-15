import GridLayout from "react-grid-layout";
import "./App.css";
import BarChart from "./components/BarChart";
import AreaChart from "./components/AreaChart";
import Piechart from "./components/Piechart";
import { elements } from "chart.js";

function App() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 7, static : true, element: <BarChart />},
    { i: "b", x: 6, y: 0, w: 6, h: 7, element: <AreaChart /> },
    { i: "c", x: 8, y: 0, w: 6, h: 10, minW: 4, maxW: 8, minH: 8, maxH: 12, element: <Piechart /> },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1360}
    >
      {layout.map((item) => (
        <div className="box" key={item.i}>{item.element}</div>
      ))}
    </GridLayout>
  );
}

export default App;
