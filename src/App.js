import React from 'react';
import { scaleBand, scaleLinear, max, format } from 'd3';
import { useData } from './hooks/useData'
import { AxisBottom } from './components/AxisBottom'
import { AxisLeft } from './components/AxisLeft'
import { Marks } from './components/Marks'

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 70, left: 220 };
const xAxisLabelOffset = 50;

export const App = () => {
  const data = useData();

  if (!data) {
    return <pre>"Loading..."</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = d => d.Country;
  const xValue = d => d.Population;

  // Invoking format function only once
  const siFormat = format(".2s");

  // Using above formatter to format every tick (more performant
  // than invoking format function for every tick).
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace("G", "B");

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          textAnchor="middle"
          y={innerHeight + xAxisLabelOffset}
        >
          Population
        </text>
        <Marks
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          data={data}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};