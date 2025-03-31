import Lamp from "@/components/ui/lamp";
import TimelineContent from "./TimelineContent";
import Aurora from "@/backgrounds/Aurora/Aurora";

const TimelineTab = () => {
  return (
    <section id='timeline' className='min-h-screen relative -mt-16 font-satoshi bg-pink-950 text-gray-50'>
      <Aurora colorStops={["#FF10F0", "#FFC0CB", "#FF10F0"]} blend={0.5} amplitude={1} speed={1} />
      <Lamp />
      <TimelineContent />
    </section>
  );
};

export default TimelineTab;
