import React, { useEffect, useState } from "react";
import { Wrapper } from "../AddReminder/styles";
import { useSelector } from "react-redux";
export default function EditReminder() {
  const { editModal } = useSelector((state) => state.toggleModal);

  return (
    <>
      {editModal && (
        <>
          <Wrapper>Hello</Wrapper>
        </>
      )}
    </>
  );
}
