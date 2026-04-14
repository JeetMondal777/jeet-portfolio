import { motion, useTransform, MotionValue } from "framer-motion";
import { ReactNode } from "react";

type ExperienceNodeProps = {
  side: "left" | "right";
  progress: MotionValue<number>;
  range: [number, number];
  company: string;
  role: string;
  tech: string;
  logo: ReactNode;
  verticalAlign: "top" | "bottom";
};

export default function ExperienceNode({
  side,
  progress,
  range,
  company,
  role,
  tech,
  logo,
  verticalAlign,
}: ExperienceNodeProps) {
  // Animations mapped to the given scroll progress range
  const opacity = useTransform(progress, [range[0], range[0] + 0.05], [0, 1]);
  const scale = useTransform(progress, [range[0], range[0] + 0.05], [0.8, 1]);
  const xOffset = useTransform(
    progress,
    [range[0], range[0] + 0.05],
    [side === "left" ? 50 : -50, 0],
  );

  // Positioning
  const isLeft = side === "left";
  const alignmentClasses = "items-start text-left";
  const positionClasses = isLeft
    ? "right-[50%] mr-[16vw] md:mr-[20vw]"
    : "left-[50%] ml-[16vw] md:ml-[20vw]";
  const verticalClasses =
    verticalAlign === "top"
      ? "top-[15%] md:top-[20%]"
      : "bottom-[15%] md:bottom-[20%]";

   

  return (
    <motion.div
      style={{ opacity, scale, x: xOffset }}
      className={`absolute ${positionClasses} ${verticalClasses} flex flex-col ${alignmentClasses} w-48 md:w-64 z-20`}
    >
      <div className={`flex items-center gap-4 mb-4 ${isLeft ? "ml-10" : ""}`}>
        <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center p-2 shadow-xl text-primary relative z-10 glass-effect">
          {logo}
        </div>
        <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface whitespace-nowrap">
          {company}
        </h3>
      </div>

      {/* Connector Line Container relative to the Logo box */}
      <div
        className={`w-full h-px relative mb-4 ${isLeft ? "mr-6 md:mr-7" : "ml-6 md:ml-7"}`}
      >
        <div
          className={`absolute top-0 w-[20vw] md:w-[25vw] h-[2px] ${isLeft ? "bg-gradient-to-l left-0" : "bg-gradient-to-r right-0"} from-primary/60 to-transparent`}
        />
      </div>

      <h4 className={`text-primary font-bold text-base md:text-lg ${isLeft ? "ml-10" : ""}`}>{role}</h4>
      <p className={`text-[10px] md:text-xs text-on-surface-variant font-medium mt-2 leading-relaxed ${isLeft ? "ml-10" : ""}`}>
        {tech}
      </p>
    </motion.div>
  );
}
