export const AxisLeft = ({ yScale }) => (
  yScale.domain().map((tickValue) => (
    <g key={tickValue} className="tick">
      <text style={{ textAnchor: "end" }} dy="0.32em" x={-9} y={yScale(tickValue) + yScale.bandwidth() / 2} >
        {tickValue}
      </text>
    </g>
  ))
)