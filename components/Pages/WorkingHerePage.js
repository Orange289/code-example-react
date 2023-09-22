"use client"

import Intro from "../WorkingHere/Intro"
import HybridRemote from "../WorkingHere/HybridRemote"
import Calendar from "../WorkingHere/Calendar"
import WorkingHours from "../WorkingHere/WorkingHours"
import Payroll from "../WorkingHere/Payroll"
import Benefits from "../WorkingHere/Benefits"
import Performance from "../WorkingHere/Performance"
import Slider from "../WorkingHere/Slider"
import Policies from "../WorkingHere/Policies"

export default function WorkingHerePage() {
  return (
    <>
      <Intro />
      <HybridRemote />
      <Calendar />
      {/* <WorkingHours /> */}
      <Payroll />
      <Benefits />
      <Performance />
      <Slider />
      <Policies />
    </>
  )
}
