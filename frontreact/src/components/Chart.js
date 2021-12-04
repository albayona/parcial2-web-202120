import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';

export const Chart = ({width = 600, height = 600, data, searchKey}) => {
    const barChart = useRef();

    useEffect(() => {
        const margin = {top: 10, left: 50, bottom: 40, right: 10};
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top - margin.bottom;

        const svg = d3.select(barChart.current);
        svg.attr('width', width);
        svg.attr('height', height);

        let g = svg
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

        const x = d3
            .scaleBand()
             .domain(data.map((d) => d.name))
            .range([0, iwidth])
            .padding(0.1);

        // Continue with implementation. Don't forget the tooltip


        const bars = g.selectAll("rect").data(data);

        bars.enter().append("rect")
            .attr("class", "bar")
            .style("fill", "steelblue")
            .attr("x", d => x(d.name))
            .attr("y", d => y(parseInt(d.stock)))
            .attr("height", d => iheight - y(parseInt(d.stock)))
            .attr("width", x.bandwidth())

        g.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", `translate(0, ${iheight})`)


        g.append("g")
            .classed("y--axis", true)
            .call(d3.axisLeft(y));


    }, [data, searchKey]);

    return (
        <div id='chartArea'>
            <svg ref={barChart}/>
        </div>
    );
};
