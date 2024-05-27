import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function App({postToPlayerlist, url, musicName}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  

  return (
    <>
      <Button color="primary" className="w-1/2 md:w-1/5" onPress={()=>{onOpen();postToPlayerlist(url, musicName);}} >
        전송
      </Button>
      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="static" className="inset-0 w-2/3 h-1/4 items-center justify-center fixed md:relative">
        <ModalContent className="w-3/4 mx-auto my-auto md:my-0">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                제출하기
              </ModalHeader>
              <ModalBody>
                음원 제출이 완료되었습니다.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  확인완료
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
