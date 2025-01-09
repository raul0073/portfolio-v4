import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { EXPERIENCE_DATA } from "@/app/Data/ExperiencePage/experienceData";

export function ExperienceTimeline() {
 
  return (
    <div className="w-full">
      <Timeline data={EXPERIENCE_DATA} />
    </div>
  );
}
