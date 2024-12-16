import React, { useState, useEffect } from "react";
import { useColorScheme, Dimensions, Platform, ViewStyle } from "react-native";
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

const HeaderText = styled.Text<StyledProps>`
  color: ${(props) => (props.isDarkMode ? "#FFFFFF" : "#000000")};
  font-size: 16px;
  font-weight: bold;
`;

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
    // Example marked dates
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
    setSelectedDate(day.dateString);
    setMarkedDates((prev: any) => ({
      ...prev,
      [day.dateString]: {
        selected: true,
        selectedColor: "#FF0000",
      },
    }));
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
        />
      </CalendarContainer>
    </Container>
  );
};

export default CustomCalendar;
