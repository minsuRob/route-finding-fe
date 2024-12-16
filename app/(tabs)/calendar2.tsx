import React, { useState, useEffect } from "react";
import {
  useColorScheme,
  Dimensions,
  Platform,
  ViewStyle,
  Text,
  View,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import styled from "styled-components/native";
import { Theme } from "react-native-calendars/src/types";

interface StyledProps {
  isDarkMode: boolean;
}

interface CustomTheme extends Theme {
  "stylesheet.calendar.header": {
    header: ViewStyle;
  };
}

interface DayComponentProps {
  date?: string;
  state?: string;
  marking?: any;
  theme?: any;
}

const Container = styled.View<StyledProps>`
  flex: 1;
  background-color: ${(props) => (props.isDarkMode ? "#000000" : "#FFFFFF")};
  padding: ${Platform.OS === "ios" ? "44px" : "20px"} 0px 0px 0px;
`;

const CalendarContainer = styled.View<StyledProps>`
  width: ${Dimensions.get("window").width}px;
  padding: 10px;
  background-color: ${(props) => (props.isDarkMode ? "#000000" : "#FFFFFF")};
`;

const DayContainer = styled.View`
  width: 45px;
  height: 65px;
  align-items: center;
  justify-content: flex-start;
  padding-top: 4px;
`;

const DateText = styled.Text<StyledProps>`
  color: ${(props) => (props.isDarkMode ? "#FFFFFF" : "#000000")};
  font-size: 16px;
  margin-bottom: 4px;
`;

const EmojiContainer = styled.View`
  width: 32px;
  height: 32px;
  background-color: ${(props) =>
    props.theme.isDarkMode ? "#1E1E1E" : "#F5F5F5"};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

const EmojiText = styled.Text`
  font-size: 16px;
`;

// 날짜별 이모지 매핑
const dateToEmoji: { [key: string]: string } = {
  "2024-10-11": "🏠",
  "2024-10-16": "🎮",
  "2024-10-23": "🎵",
};

const DayComponent: React.FC<DayComponentProps> = ({
  date,
  state,
  marking,
  theme,
}) => {
  const isDarkMode = useColorScheme() === "dark";
  const emoji = date ? dateToEmoji[date.dateString] : null;
  const isSelected = marking?.selected;

  if (state === "disabled") {
    return <View style={{ width: 45, height: 65 }} />;
  }

  return (
    <DayContainer>
      <DateText
        isDarkMode={isDarkMode}
        style={
          isSelected
            ? {
                color: "#FFFFFF",
                fontWeight: "bold",
                backgroundColor: "#FF0000",
                padding: 4,
                borderRadius: 4,
              }
            : {}
        }
      >
        {date ? date.day : ""}
      </DateText>
      <EmojiContainer
        theme={{ isDarkMode }}
        style={
          isSelected
            ? {
                backgroundColor: "#FF4444",
              }
            : {}
        }
      >
        <EmojiText>{emoji || "😊"}</EmojiText>
      </EmojiContainer>
    </DayContainer>
  );
};

// Korean locale configuration
LocaleConfig.locales["kr"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
};
LocaleConfig.defaultLocale = "kr";

const CustomCalendar: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [selectedDate, setSelectedDate] = useState("");
  const [markedDates, setMarkedDates] = useState<any>({});

  const getTheme = (): CustomTheme => ({
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    calendarBackground: isDarkMode ? "#000000" : "#FFFFFF",
    textSectionTitleColor: isDarkMode ? "#FFFFFF" : "#000000",
    selectedDayBackgroundColor: "#FF0000",
    selectedDayTextColor: "#FFFFFF",
    todayTextColor: "#FF0000",
    dayTextColor: isDarkMode ? "#FFFFFF" : "#000000",
    textDisabledColor: isDarkMode ? "#444444" : "#D9E1E8",
    dotColor: "#FF0000",
    selectedDotColor: "#FFFFFF",
    arrowColor: isDarkMode ? "#FFFFFF" : "#000000",
    monthTextColor: isDarkMode ? "#FFFFFF" : "#000000",
    textDayFontFamily: "System",
    textMonthFontFamily: "System",
    textDayHeaderFontFamily: "System",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 14,
    "stylesheet.calendar.header": {
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 6,
        alignItems: "center",
      },
    },
  });

  useEffect(() => {
    const today = new Date();
    const currentDate = today.toISOString().split("T")[0];

    setMarkedDates({
      [currentDate]: {
        selected: true,
        selectedColor: "#FF0000",
      },
      "2024-10-11": {
        selected: true,
        selectedColor: "#FF0000",
      },
      "2024-10-16": {
        marked: true,
        dotColor: "#8B3DFF",
      },
    });
  }, []);

  const onDayPress = (day: any) => {
    const newSelectedDate = day.dateString;
    setSelectedDate(newSelectedDate);

    // Update marked dates while preserving emoji markers
    const updatedMarkedDates = { ...markedDates };
    // Remove previous selection
    Object.keys(updatedMarkedDates).forEach((date) => {
      if (updatedMarkedDates[date].selected) {
        delete updatedMarkedDates[date].selected;
        delete updatedMarkedDates[date].selectedColor;
      }
    });

    // Add new selection
    updatedMarkedDates[newSelectedDate] = {
      ...updatedMarkedDates[newSelectedDate],
      selected: true,
      selectedColor: "#FF0000",
    };

    setMarkedDates(updatedMarkedDates);
  };

  return (
    <Container isDarkMode={isDarkMode}>
      <CalendarContainer isDarkMode={isDarkMode}>
        <Calendar
          theme={getTheme()}
          markedDates={markedDates}
          onDayPress={onDayPress}
          enableSwipeMonths={true}
          hideExtraDays={false}
          firstDay={0}
          showSixWeeks={true}
          dayComponent={DayComponent}
        />
      </CalendarContainer>
    </Container>
  );
};

export default CustomCalendar;
