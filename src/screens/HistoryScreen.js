import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";
import LottoNumberView from "../components/LottoNumberView";
import { useSelector } from "react-redux";

export default function HistoryScreen() {
  const history = useSelector((state) => state.numbers.history);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="History" />
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{ paddingVertical: 24 }}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingHorizontal: 20, paddingVertical: 12, marginHorizontal: 24, height: 120, backgroundColor: "white" }}>
              <Typography fontSize={16}>
                {item.date.getFullYear()}. {item.date.getMonth() + 1}. {item.date.getDate()}
              </Typography>
              <LottoNumberView numbers={item.numbers} />
            </View>
          );
        }}
      />
    </View>
  );
}
