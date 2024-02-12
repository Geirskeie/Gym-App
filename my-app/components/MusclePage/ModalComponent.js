import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Modal from 'react-native-modal';

const ModalComponent = ({ text, name }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <View style={{ flex:1}}>
      <TouchableOpacity onPress={openModal}>
        <Text numberOfLines={2} style={{ flexWrap: "wrap" }}>
          {name}
        </Text>
      </TouchableOpacity>
      <View style={{ justifyContent:'center' }}>
      <Modal
        isVisible={showModal}
        onBackdropPress={closeModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >

        <View
          style={{
            height:'50%',
            marginTop: 0,
            marginHorizontal: 20,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <ScrollView>
              <TouchableOpacity onPress={closeModal}>
            <View>
                <Text style={{ color:'red', fontSize:16}}>X</Text>
            </View>
              </TouchableOpacity>
            <Text style={{ fontSize: 18 }}>{text}</Text>
          </ScrollView>
        </View>
      </Modal>
        </View>
    </View>
  );
};

export default ModalComponent;