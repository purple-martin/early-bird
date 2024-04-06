import * as React from "react";

interface RootLayoutProps {
  children?: React.ReactNode;
  isLayout?: boolean;
}

export default function ({
  children,
  isLayout = true,
}: RootLayoutProps): React.ReactElement {
  if (!isLayout) return <>{children}</>;

  return (
    <div></div>
  );
}
