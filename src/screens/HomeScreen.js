import { View } from "react-native";
import React, { useCallback } from "react";
import { Header } from "../components/Header/Header";
import { Spacer } from "../components/Spacer";
import { CustomButton } from "../components/CustomButton";
import { Typography } from "../components/Typography";
import LottoNumberView from "../components/LottoNumberView";
import { useDispatch, useSelector } from "react-redux";
import { createNewNumbers } from "../action/lottoNumbers";

export default function HomeScreen() {
  const numbers = useSelector((state) => state.numbers.currentNumber);
  const dispatch = useDispatch();

  const onPressGetNumber = useCallback(() => {
    dispatch(createNewNumbers());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="Home" />
      </Header>
      <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", paddingHorizontal: 12 }}>
        <View
          style={{
            height: 250,
            flexDirection: "column",
            paddingHorizontal: 24,
            backgroundColor: "white",
            borderColor: "gray",
          }}
        >
          {numbers.length === 6 && <LottoNumberView numbers={numbers} />}
        </View>
        <Spacer space={20} />
        <CustomButton onPress={onPressGetNumber}>
          <View style={{ backgroundColor: "black", paddingVertical: 24, alignItems: "center" }}>
            <Typography color="white" fontSize={18}>
              Get Lotto Numbers
            </Typography>
          </View>
        </CustomButton>
      </View>
    </View>
  );
}
