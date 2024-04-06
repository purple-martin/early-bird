import * as React from 'react';

import { Button, Card, Tooltip } from "@nextui-org/react";
import { Chart, Heart, Home, Setting, ShieldDone } from "react-iconly";

const EntryLink = (props: {
  icon: React.ReactNode;
  description: string;
}) => {
  return (
    <Tooltip placement="bottom" content={props.description} >
      <Button />
    </Tooltip>
  )
}

export const QuickEntry = () => {
  return (
    <Card >
      
    </Card>
  );
};
