"use client";

import { useMemo, useState } from "react";

function getGuidance(strain: number, recovery: number) {
  const gap = strain - recovery;

  if (gap >= 4) {
    return {
      status: "Back off today",
      detail: "Your workload is outpacing recovery. Prioritize sleep, water, and a lighter session.",
      toneClassName: "bg-red-100 text-red-900 border-red-300",
    };
  }

  if (gap >= 1) {
    return {
      status: "Train with control",
      detail: "You can still move forward, but keep the session sharp and avoid extra volume.",
      toneClassName: "bg-amber-100 text-amber-900 border-amber-300",
    };
  }

  if (recovery - strain >= 3) {
    return {
      status: "Push window open",
      detail: "Recovery is strong relative to strain. This is a good day for quality work.",
      toneClassName: "bg-emerald-100 text-emerald-900 border-emerald-300",
    };
  }

  return {
    status: "Balanced day",
    detail: "Your strain and recovery are in a workable range. Stay consistent and reassess tonight.",
    toneClassName: "bg-blue-100 text-blue-900 border-blue-300",
  };
}

export function DailyCheckIn() {
  const [strain, setStrain] = useState(6);
  const [recovery, setRecovery] = useState(5);

  const guidance = useMemo(() => getGuidance(strain, recovery), [recovery, strain]);

  return (
    <section className="w-full rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
            Daily Check-In
          </p>
          <h3 className="mt-2 text-xl font-bold text-foreground">Read today before you train</h3>
        </div>
        <div className="rounded-full border-2 border-border px-3 py-1 text-sm font-semibold">
          {strain + recovery}/20
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <label className="block">
          <div className="mb-2 flex items-center justify-between text-sm font-medium">
            <span>Strain</span>
            <span>{strain}/10</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={strain}
            onChange={(event) => setStrain(Number(event.target.value))}
            className="w-full accent-blue-500"
          />
        </label>

        <label className="block">
          <div className="mb-2 flex items-center justify-between text-sm font-medium">
            <span>Recovery</span>
            <span>{recovery}/10</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={recovery}
            onChange={(event) => setRecovery(Number(event.target.value))}
            className="w-full accent-emerald-500"
          />
        </label>
      </div>

      <div className={`mt-6 rounded-base border-2 p-4 ${guidance.toneClassName}`}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em]">{guidance.status}</p>
        <p className="mt-2 text-sm leading-relaxed">{guidance.detail}</p>
      </div>
    </section>
  );
}
