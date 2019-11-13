const container = d3.select("div.container");

container
  .append("h1")
  .attr("id", "title")
  .text("Movie Sales");

container
  .append("h3")
  .attr("id", "description")
  .text("Highest Grossing Movies, by Genre");
const tooltip = container
  .append("div")
  .attr("id", "tooltip");

tooltip
  .append("p")
  .attr("class", "name");

const colorScale = d3
  .scaleOrdinal(d3.schemeSet2);
const margin = {
  top: 20,
  right: 20,
  bottom: 50,
  left: 20
}
const width = 800 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

const svgContainer = container
  .append("svg")
  .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`);
const svgCanvas = svgContainer
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
const URL = "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json";

fetch(URL)
  .then((response) => response.json())
  .then((json) => drawDiagram(json));

function drawDiagram(data) {
  let hierarchy = d3.hierarchy(data);
  hierarchy.sum((d) => d.value);
  const treemap = d3.treemap();

  const treemapLayout = treemap(hierarchy);
  let movies = [];
  for(let i = 0; i < treemapLayout.children.length; i++) {
    for(let j = 0; j < treemapLayout.children[i].children.length; j++) {
      movies.push(treemapLayout.children[i].children[j]);
    }
  }
  svgCanvas
    .selectAll("rect")
    .data(movies)
    .enter()
    .append("rect")
    .attr("class", "tile")
    .attr("data-name", (d, i) => d.data.name)
    .attr("data-category", (d, i) => d.data.category)
    .attr("data-value", (d, i) => d.data.value)
    .on("mouseenter", (d, i) => {
      tooltip
        .style("opacity", 1)
        .attr("data-value", () => d.data.value)
        .style("left", `${d3.event.layerX + 5}px`)
        .style("top", `${d3.event.layerY + 5}px`);
      tooltip
        .select("p.name")
        .text(() => d.data.name);
    })
    .on("mouseout", () => tooltip.style("opacity", 0))
    .attr("width", (d, i) => (d.x1 - d.x0) * width)
    .attr("height", (d, i) => (d.y1 - d.y0) * height)
    .attr("x", (d, i) => d.x0 * width)
    .attr("y", (d, i) => d.y0 * height)

    .attr("fill", (d, i) => colorScale(d.data.category));


  
  let categoriesArr = movies.map((movie) => movie.data.category);
  let categories = categoriesArr.filter((category, i) => {
    if (categoriesArr.slice(0, i).indexOf(category) === -1) {
      return category;
    }
  });
  
  const legend = svgCanvas
    .append("g")
    .attr("id", "legend")
    .attr("transform", `translate(0, ${height + 10})`);

  legend
    
    .selectAll("rect")
    .data(categories)
    .enter()
    .append("rect")
    .attr("class", "legend-item")
    .attr("width", 50)
    .attr("height", 20)
    .attr("x", (d, i) => i*50)
    .attr("y", 0)
    .attr("fill", (d, i) => colorScale(d))
    .attr("opacity", 0.7);

  legend
    .selectAll("text")
    .data(categories)
    .enter()
    .append("text")
    .attr("x", (d, i) => i*50)
    .attr("font-size", "0.5rem")
    .attr("y", 30)
    .text((d, i) => d);

}