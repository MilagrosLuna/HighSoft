import React, { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return {isOpen,setIsOpen,toggleModal};
};

export default useModal;
