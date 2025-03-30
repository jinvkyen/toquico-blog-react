import Lamp from "@/components/ui/lamp";
import TimelineContent from "./TimelineContent";
const TimelineTab = () => {
    return (
      <section id='timeline' className='min-h-screen relative mt-4 font-satoshi bg-pink-950 text-gray-50'>
        <Lamp />
        <TimelineContent />
      </section>
    );
}

export default TimelineTab;