import { Button, Input, Modal } from "@nextui-org/react";

import React from "react";
import pkg from 'react-use';

//import { useBoolean } from "react-use";

const { useBoolean } = pkg;

export interface SpotlightInstance {
  open: () => void;
}

export const Spotlight = React.forwardRef<SpotlightInstance, {}>(
  (props, ref) => {
    const [isOpen, toggle] = useBoolean(false);

    React.useImperativeHandle(ref, () => ({
      open: () => toggle(true),
    }));

    return (
      <Modal
        blur
        noPadding
        autoMargin
        aria-labelledby="spotlight-modal"
        open={isOpen}
        onClose={toggle}
        width="650px"
      >
        <Modal.Body>
          <Input 
        underlined color="default" shadow={false} bordered={false} placeholder="Next UI" />
        </Modal.Body>
      </Modal>
    );
  }
);
