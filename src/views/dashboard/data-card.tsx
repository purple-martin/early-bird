import * as React from "react";

import { Card } from "@nextui-org/react";

export interface DataCardProps {
  status?: "success" | "error";
  title: string;
  subText: string;
  content: React.ReactNode;
  trendText?: string;
}

export const DataCard: React.FC<DataCardProps> = () => {
  return (
    <Card >
      data-card
    </Card>
  );
};
