import React from "react"
import Layout03 from "./Componets03/Layout03"


const problemsList = [
  { id: 'p0', problem: '--Choose--', subProblem: '--Choose--' },
  { id: 'p1', problem: 'A', subProblem: ['--Choose--', 'a1', 'a2', 'a3'] },
  { id: 'p2', problem: 'B', subProblem: ['--Choose--', 'b2', 'b2', 'b3'] },
  { id: 'p3', problem: 'C', subProblem: ['--Choose--', 'c1', 'c2', 'c3'] },
  { id: 'p4', problem: 'D', subProblem: ['--Choose--', 'd1', 'd2', 'd3'] },
];

const urgLevel = [
  { id: 'l1', level: 1, text: 'Not Urgent', color: "#008000" },
  { id: 'l2', level: 2, text: 'Ahhh OK!', color: "#FFFF00" },
  { id: 'l3', level: 3, text: 'Urgent', color: "#FFA500" },
  { id: 'l4', level: 4, text: 'Very Urgent', color: "#FF0000" },
]


function App() {
  return (
    <Layout03 problemsList={problemsList} urgLevel={urgLevel} />
  )
}

export default App