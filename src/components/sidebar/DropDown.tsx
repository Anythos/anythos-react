import React, { useState } from "react";

import { Menu } from "./Menu";

export type MenuProps = {
  openProfile: () => void;
  openHr: () => void;
  openLearning: () => void;
  openCareer: () => void;
  openCommunity: () => void;
  profile: boolean;
  hr: boolean;
  learning: boolean;
  career: boolean;
  community: boolean;
};

export function DropDown() {
  const [expanded, setExpanded] = useState({
    profile: false,
    hr: false,
    learning: false,
    career: false,
    community: false,
  });

  const openProfile = () => {
    setExpanded((prev) => ({
      ...prev,
      profile: !prev.profile,
    }));
  };

  const openHr = () => {
    setExpanded((prev) => ({
      ...prev,
      hr: !prev.hr,
    }));
  };

  const openLearning = () => {
    setExpanded((prev) => ({
      ...prev,
      learning: !prev.learning,
    }));
  };

  const openCareer = () => {
    setExpanded((prev) => ({
      ...prev,
      career: !prev.career,
    }));
  };

  const openCommunity = () => {
    setExpanded((prev) => ({
      ...prev,
      community: !prev.community,
    }));
  };
  return (
    <Menu
      profile={expanded.profile}
      hr={expanded.hr}
      learning={expanded.learning}
      career={expanded.career}
      community={expanded.community}
      openProfile={openProfile}
      openHr={openHr}
      openLearning={openLearning}
      openCareer={openCareer}
      openCommunity={openCommunity}
    />
  );
}
