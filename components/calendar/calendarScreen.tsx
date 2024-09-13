import React, { useState, Fragment, useCallback, useMemo, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";
import calendarIDs from "./calendarIDs";

const INITIAL_DATE = "2022-07-06";

export const CalendarScreen = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback((day: any) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [getDate(-1)]: {
        dotColor: "red",
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "orange",
        selectedTextColor: "red",
      },
    };
  }, [selected]);

  const renderCalendarWithPeriodMarkingAndSpinner = () => {
    return (
      <Fragment>
        <Text style={styles.text}>
          Calendar with period marking and spinner
        </Text>
        <Calendar
          // style={styles.calendar}
          current={INITIAL_DATE}
          minDate={getDate(-5)}
          displayLoadingIndicator
          markingType={"period"}
          theme={{
            calendarBackground: "#333248",
            textSectionTitleColor: "white",
            textSectionTitleDisabledColor: "gray",
            dayTextColor: "red",
            todayTextColor: "white",
            selectedDayTextColor: "white",
            monthTextColor: "white",
            indicatorColor: "white",
            selectedDayBackgroundColor: "#333248",
            arrowColor: "white",
            // textDisabledColor: 'red',
            stylesheet: {
              calendar: {
                header: {
                  week: {
                    marginTop: 30,
                    marginHorizontal: 12,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  },
                },
              },
            },
          }}
          markedDates={{
            [getDate(-2)]: { disabled: true },
            [getDate(1)]: { textColor: "pink" },
            [getDate(2)]: { textColor: "pink" },
            [getDate(12)]: {
              startingDay: true,
              color: "green",
              endingDay: true,
            },
            [getDate(22)]: { startingDay: true, color: "green" },
            [getDate(23)]: { endingDay: true, color: "gray" },
            [getDate(25)]: { startingDay: true, color: "gray" },
            [getDate(26)]: { color: "gray" },
            [getDate(27)]: { endingDay: true, color: "gray" },
          }}
        />
      </Fragment>
    );
  };

  const customHeaderProps: any = useRef();

  const setCustomHeaderNewMonth = (next = false) => {
    const add = next ? 1 : -1;
    const month = new Date(customHeaderProps?.current?.month);
    const newMonth = new Date(month.setMonth(month.getMonth() + add));
    customHeaderProps?.current?.addMonth(add);
    setCurrentMonth(newMonth.toISOString().split("T")[0]);
  };
  const moveNext = () => {
    setCustomHeaderNewMonth(true);
  };
  const movePrevious = () => {
    setCustomHeaderNewMonth(false);
  };

  const renderCalendarWithCustomHeader = () => {
    const CustomHeader = React.forwardRef((props, ref) => {
      customHeaderProps.current = props;

      return (
        // @ts-expect-error
        <View ref={ref} {...props} style={styles.customHeader}>
          <TouchableOpacity onPress={movePrevious}>
            <Text>Previous</Text>
          </TouchableOpacity>
          <Text>Custom header!</Text>
          <Text>{currentMonth}</Text>
          <TouchableOpacity onPress={moveNext}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      );
    });

    return (
      <Fragment>
        <Text style={styles.text}>Calendar with custom header component</Text>
        <Calendar
          initialDate={INITIAL_DATE}
          testID={calendarIDs.calendars.LAST}
          style={[styles.calendar, styles.customCalendar]}
          customHeader={CustomHeader}
        />
      </Fragment>
    );
  };

  const renderCalendarWithInactiveDays = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Calendar with inactive days</Text>
        <Calendar
          style={styles.calendar}
          disableAllTouchEventsForInactiveDays
          current={INITIAL_DATE}
          markedDates={{
            [getDate(3)]: {
              inactive: true,
            },
            [getDate(4)]: {
              inactive: true,
            },
          }}
        />
      </Fragment>
    );
  };

  const renderExamples = () => {
    return <Fragment>{renderCalendarWithPeriodMarkingAndSpinner()}</Fragment>;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      testID={calendarIDs.calendars.CONTAINER}
    >
      {renderExamples()}
    </ScrollView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "lightgrey",
    fontSize: 16,
  },
  disabledText: {
    color: "grey",
  },
  defaultText: {
    color: "purple",
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  customDay: {
    textAlign: "center",
  },
  customHeader: {
    backgroundColor: "#FCC",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00BBF2",
  },
});
