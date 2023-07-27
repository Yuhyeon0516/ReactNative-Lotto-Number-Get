import { View } from "react-native";
import React, { useCallback } from "react";
import { Header } from "../components/Header/Header";
import { Spacer } from "../components/Spacer";
import { CustomButton } from "../components/CustomButton";
import { Typography } from "../components/Typography";

export default function HomeScreen() {
  const onPressGetNumber = useCallback(() => {}, []);

  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor((Math.random() * 10) % 6);

    if (randomNumber === 0) return "red";
    if (randomNumber === 1) return "blue";
    if (randomNumber === 2) return "gray";
    if (randomNumber === 3) return "green";
    if (randomNumber === 4) return "purple";

    return "black";
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
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <View
                  style={{
                    backgroundColor: getNumberBackgroundColor(),
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography fontSize={20} color="white">
                    {item}
                  </Typography>
                </View>
              );
            })}
          </View>
        </View>
        <Spacer space={20} />
        <CustomButton onPress={onPressGetNumber}>
          <View style={{ backgroundColor: "black", paddingVertical: 24, alignItems: "center" }}>
            <Typography color="white" fontSize={18}>
              로또 번호 추출하기
            </Typography>
          </View>
        </CustomButton>
      </View>
    </View>
  );
}
