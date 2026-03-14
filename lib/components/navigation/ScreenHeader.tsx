import {useColors} from "@/hooks/useColors.ts";
import {Text, TouchableOpacity, View} from "react-native";
import {ChevronLeft} from "lucide-react-native";
import React from "react";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import {BottomTabHeaderProps} from "@react-navigation/bottom-tabs";

type HeaderProps = NativeStackHeaderProps | BottomTabHeaderProps;

export default function CustomScreenHeader(props: HeaderProps) {
  const { navigation, route, options } = props;
  const back = 'back' in props ? props.back : undefined;
  const colors = useColors();

  return (
    <View
      className={'bg-background px-4 py-3 pt-safe-offset-3 flex-row items-center border-b border-neutrals1000'}
    >
      {options.headerLeft ? (
        options.headerLeft({tintColor: colors.foreground, canGoBack: !!back})
      ) : back ? (
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{marginRight: 12}}
        >
          <ChevronLeft size={24} color={colors.foreground}/>
        </TouchableOpacity>
      ) : null}
      <Text className={'text-foreground text-lg font-sans-semibold flex-1'} numberOfLines={1}>
        {options.title || route.name}
      </Text>
      {options.headerRight ? options.headerRight({
        tintColor: colors.foreground,
        canGoBack: !!back,
      }) : null}
    </View>
  );
}
