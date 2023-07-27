import { View } from "react-native";
import React, { useCallback } from "react";
import { Typography } from "./Typography";

export default function LottoNumberView({ numbers }) {
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
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      {numbers.map((item, index) => {
        return (
          <View
            key={index}
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
  );
}
