export const AxisBottom = ({ xScale, innerHeight, tickFormat }) => (
  xScale.ticks().map((tickValue) => (
    <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
      <line y2={innerHeight} />
       <text style={{textAnchor: "middle"}} dy="0.71em" y={innerHeight + 6}>
         {tickFormat(tickValue)}
      </text>
     </g>    
  ))
)