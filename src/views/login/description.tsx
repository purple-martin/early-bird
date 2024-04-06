import * as React from "react";

import { Avatar } from "@nextui-org/react";
import { Box } from "@/components/box";

const pictureUsers = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
  "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
];

export const HomeDescription = () => {
  return (
    <div>
      <h1> Sign In to </h1>
      <h2> NextUI Design Pro </h2>
      <h3>
        Use templates to quickly create your projects.
      </h3>
      <div>
          {pictureUsers.map((url, index) => (
            <Avatar
              key={index}
              size="lg"
              src={url}
            />
          ))}
        <p>Join Web Developer.</p>
      </div>
    </div>
  );
};
