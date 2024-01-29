import { Button, Label, Modal, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "./assets/42.jpeg";
import "./Information.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import React, { ChangeEvent } from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";

/*

type InferFromTemplateLiteral<Url extends string> = 
  Url extends `${infer P}//${infer B}.${infer E}/${infer Pa}` ?
{
  protocol: P;
  baseUrl: B;
  extension: E;
  path: Pa;
} : never;

type Weburl = InferFromTemplateLiteral<"https://www.youtube.com/">;
*/

const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  const fileInput = event.target;
  const chosenFile = fileInput.files && fileInput.files[0];

  if (chosenFile) {
    const reader = new FileReader();

    reader.onload = () => {
      const imgElement = document.querySelector("#photo") as HTMLImageElement;

      if (imgElement) {
        imgElement.src = reader.result as string;
      }
    };
    reader.readAsDataURL(chosenFile);
  }
};

const YourComponent: React.FC = () => {
  return (
    <div className="flex flex-nowrap sm:flex-row justify-center">
      <div className="user-img">
        <img src={logo} id="photo" alt="" />
      </div>
      <input type="file" id="file" onChange={handleFileChange} />
      <label htmlFor="file" id="uploadbtn">
        <FontAwesomeIcon icon={faCamera} className="cameraIcon" />
      </label>
    </div>
  );
};

function ValidInformation(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header> Information </Modal.Header>
        <Modal.Body>
          <div className="p-4 md:p-5 space-y-4 Sp2">
            <form action="">
              <YourComponent />
              <div className="mt-5">
                <div className="relative h-50 mb-6">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm 
                        text-gray-900 bg-transparent rounded-lg border-1 
                        border-gray-300 appearance-none dark:text-white 
                        dark:border-gray-600 dark:focus:border-blue-500 
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 
                              duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]
                              bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600
                              peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                              peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-4 
                              rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative h-50 mb-6">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm 
                            text-gray-900 bg-transparent rounded-lg border-1 
                            border-gray-300 appearance-none dark:text-white 
                            dark:border-gray-600 dark:focus:border-blue-500 
                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 
                              duration-300 transform -translate-y-4 scale-75 top-4 z-10 
                              origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 
                              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                              peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 
                              peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Nick Name
                  </label>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="confirm_password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 
                                  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                  dark:placeholder-gray-400 dark:text-white 
                                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="fruitSelect"
                      name="fruits"
                    >
                      <option value="apple">Male</option>
                      <option value="banana">Female</option>
                    </select>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                            focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                            text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
                            dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ValidInformation;
