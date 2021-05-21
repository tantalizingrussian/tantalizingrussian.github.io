window.PEPERoadmap = [
  {
    gif: "",
    title: "",
    desc: `Pre-sale (2021-05-21T08:00:00Z, 2021-05-23T08:00:00Z) <br /><span class="text-info">Pancakeswap lising</span>`,
  },
  {
    gif: "",
    title: "",
    desc: `Partnerships<br />Marketing campaigns<br />
    <span class="text-info">Better routing for aggregator</span>`,
  },
  {
    gif: "",
    title: "",
    desc: `<span class="text-info">Governance</span><br />
    Expand marketing campaigns<br />
    <span class="text-info">Intergrations of other exchanges</span><br />
    Swaps inside aggregator`,
  },
  {
    gif: "",
    title: "",
    desc: `<span class="text-info">ILO 1.0</span><br />Limit orders<br />
    <span class="text-info">Crosschain aggregator</span><br />
    Burning event`,
  },
]
  .map(
    (item, index) => `<div class="${
      index % 2 == 1 ? "roadmap-step reversed" : "roadmap-step"
    }">
<div><img src="./assets/road/season${index}.gif" alt="" /></div>
<div class="content formal">
  <div>Season ${index + 1}</div>
  <p class="desc">${item.desc}</p>
</div>
</div>`
  )
  .join("");

$("#roadMap").append(`<div class="container">
<div class="row justify-content-center align-items-center">
  <div class="col-lg-12 text-center">
    <h2 class="text-white mt-0">Road Map</h2>
    <hr class="divider my-4 col-lg-8" />
    <div class="road-map-content">${window.PEPERoadmap}</div>
  </div>
</div>
</div>`);
