import React, { useState, useEffect } from "react";

import MasonryGrid from "./MasonryGrid";

export default {
  component: MasonryGrid,
  title: "Components/MasonryGrid",
};

export const Primary = () => {
  const images = [
    "054dce82-51c9-49d5-bc7c-4d76e8288d33.jpg",
    "05f4b372-d8ff-42f0-8c11-b78c45d9eaa1.jpg",
    "062013b4-8bad-4a6a-a69c-e4de7fdd86d8.jpg",
    "068fc183-d4e3-4780-b01c-6cce0d019d13.jpg",
    "06c96920-38c5-4883-95ac-0968a4ecd4f1.JPG",
    "06ec5d00-6da0-46cb-ab4a-f6ea1e6a461f.gif",
    "075bfcba-f13c-43a9-983c-740bcce9d876.png",
    "07688b1f-08ee-46f2-b475-19446a9bbcb4.jpg",
    "07c4e089-a7da-430a-ac09-a0da419efefa.JPG",
    "07e51206-2967-4632-ad03-a7f12675bc55.jpg",
    "07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg",
    "08630019-c6ae-43ef-b075-4fe5b2077c90.jpg",
    "0886de63-9a5d-41c5-b750-4e7633f63ce1.jpg",
    "08b34a90-ffc6-4f80-829a-2c3e7414f26e.jpg",
    "08f5398d-7f89-47da-a5cd-1ed74967dc1f.jpg",
    "09173a0b-5f07-4184-bf43-4cf71142ded8.gif",
    "093a41da-e2c0-4535-a366-9ef3f2013f73.jpg",
    "0942ac81-f65b-4503-8220-40ad3c28a94e.jpg",
    "09584fb1-baa4-45b7-a801-cff37a0a4c74.jpg",
  ];

  const babies = images.map((image) => {
    return (
      <div className="img-container">
        <img src={`https://random.dog/${image}`} style={{ width: "100%" }} />
      </div>
    );
  });

  const fake = <div className="img-container"></div>;

  return <MasonryGrid>{[...babies, fake]}</MasonryGrid>;
};
