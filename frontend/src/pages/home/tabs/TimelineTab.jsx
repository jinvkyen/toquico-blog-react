import Lamp from "@/components/ui/lamp";
import TimelineContent from "./TimelineContent";
const TimelineTab = () => {
    return (
      <section id='timeline' className='min-h-screen relative -top-16 font-satoshi'>
        <Lamp />
        <TimelineContent />
      </section>
    );
}

export default TimelineTab;