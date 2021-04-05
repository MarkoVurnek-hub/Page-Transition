import { gsap } from "gsap";
export default node => {
  gsap.from(
    [node.children[0].firstElementChild, node.children[0].lastElementChild],
    0.6,
    {
      y: 30,
      delay: 0.6,
      ease: "power3.InOut",
      opacity: 0,
      stagger: { amount: 0.6 }
    }
  );
};
