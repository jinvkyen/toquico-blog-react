import FlowingMenu from "./FlowingMenu";

const flowingui = [
  { link: "#", text: "Timothy Hay", image: "https://picsum.photos/600/400?random=1" },
  { link: "#", text: "Lettuce (Romaine)", image: "https://picsum.photos/600/400?random=2" },
  { link: "#", text: "Banana (Latundan)", image: "https://picsum.photos/600/400?random=3" },
  { link: "#", text: "Grapes (No Seeds)", image: "https://picsum.photos/600/400?random=4" },
];

<div style={{ height: "600px", position: "relative" }}>
  <FlowingMenu items={flowingui} />
</div>;

export default flowingui;
