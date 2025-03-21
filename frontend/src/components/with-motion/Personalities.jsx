import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Personalities() {
  const testimonials = [
    {
      quote:
        "A master of the art of yawning, she battles sleepiness with stubborn wakefulness - her eyelids heavy with dreams she refuses to claim.",
      name: "The Sleepy Sovereign",
      title: '"Drowsy Duchess"',
      date: "February 14, 2024",
      src: "/assets/images/traits/sleepy.jpg",
    },
    {
      quote:
        "In her kingdom of chaos, she reigns as court jester - a whirlwind of paws and nonsense where gravity is optional and laughter mandatory.",
      name: "The Goofy Gladiator",
      title: '"Whimsical Warrior"',
      date: "February 15, 2024",
      src: "/assets/images/traits/goofy.jpg",
    },
    {
      quote:
        "With eyes brighter than detective's lantern, she investigates life's mysteries - particularly the enigma of 'Why is this rubber band not in my mouth?'",
      name: "The Curious Cartographer",
      title: '"Inquisitive Explorer"',
      date: "February 16, 2024",
      src: "/assets/images/traits/curious.jpg",
    },
    {
      quote:
        "She wears sunlight like couture, turning ordinary moments into portrait galleries - a natural supermodel who photobombs her own life with elegance.",
      name: "The Photogenic Phenomenon",
      title: '"Lens Luminary"',
      date: "February 17, 2024",
      src: "/assets/images/traits/photogenic.jpg",
    },
    {
      quote:
        "Her love language is written in warm presses and head bonks - a living heating pad with a purr that could melt glaciers and hearts with equal efficiency.",
      name: "The Affectionate Alchemist",
      title: '"Cuddle Connoisseur"',
      date: "February 18, 2024",
      src: "/assets/images/traits/affectionate.JPEG",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
