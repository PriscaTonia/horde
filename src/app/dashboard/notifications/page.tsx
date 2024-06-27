"use client";
import {
  CalendarColored,
  CloseIcon,
  ImportantColored,
  Profile,
  Search,
  SettingsColored,
} from "@/icons";
import { useNotify } from "@/utils/hooks/useNotify";
import { TextInput } from "@mantine/core";
import React, { useState } from "react";

interface Notification {
  id: number;
  text: string;
  date: string;
  notification_type: "profile" | "settings" | "reminder" | "important";
}

const Notifications = () => {
  const [searchValue, setSearchValue] = useState("");
  const notify = useNotify();

  const demo_notifications: Notification[] = [
    {
      id: 1,
      text: "Lorem dolor sit amet consectetur. Lectus varius nisi euismod dolor tincidunt volutpat dignissim.",
      date: "Mar 12",
      notification_type: "profile",
    },
    {
      id: 2,
      text: "Lorem dolor sit amet consectetur. Lectus varius nisi euismod dolor tincidunt volutpat dignissim.",
      date: "Mar 15",
      notification_type: "settings",
    },
    {
      id: 3,
      text: "Lorem dolor sit amet consectetur. Lectus varius nisi euismod dolor tincidunt volutpat dignissim.",
      date: "Mar 17",
      notification_type: "reminder",
    },
    {
      id: 4,
      text: "Lorem dolor sit amet consectetur. Lectus varius nisi euismod dolor tincidunt volutpat dignissim.",
      date: "Mar 19",
      notification_type: "important",
    },
  ];

  return (
    <div className="px-5 py-8 font-inter md:px-9">
      <div className="flex flex-col gap-5 rounded-lg bg-white px-6 py-5">
        {/* searchbar */}
        <div className="flex w-full items-center gap-5 pb-5 md:max-w-[50%] lg:max-w-[45%]">
          <TextInput
            value={searchValue}
            onChange={(event) => setSearchValue(event.currentTarget.value)}
            placeholder="Search for transaction, amount or name"
            leftSection={<Search />}
            styles={{
              input: {
                cursor: "pointer",
                borderRadius: "8px",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingRight: "14px",
                paddingLeft: "32px",
              },
              root: {
                width: "100%",
              },
            }}
          />
        </div>

        {/* recent notification list */}
        <div className="flex flex-col ">
          <h4 className="py-5 font-inter text-base font-bold text-[#1C1C1C] md:text-lg">
            Most recent
          </h4>
          {demo_notifications.map((n) => {
            return (
              <div
                key={n.id}
                className="relative flex flex-col items-center gap-3 border-b border-[#EAECF0] py-5 sm:flex-row "
              >
                <span>
                  {n.notification_type === "profile" ? (
                    <Profile />
                  ) : n.notification_type === "settings" ? (
                    <SettingsColored />
                  ) : n.notification_type === "reminder" ? (
                    <CalendarColored />
                  ) : (
                    <ImportantColored />
                  )}
                </span>

                <p className="flex max-w-[87%] flex-col text-sm font-medium text-[#202224]">
                  <span className="flex flex-wrap">{n.text}</span>
                  <span className="text-xs text-[#B5B5B5]">{n.date}</span>
                </p>

                <CloseIcon
                  className="absolute right-0 cursor-pointer"
                  onClick={() => notify("Feature not available yet")}
                />
              </div>
            );
          })}
        </div>

        {/* earlier notification list */}
        <div>
          <h4 className="py-5 font-inter text-base font-bold text-[#1C1C1C] md:text-lg">
            Earlier
          </h4>
          {demo_notifications.map((n) => {
            return (
              <div
                key={n.id}
                className="relative flex flex-col items-center gap-3 border-b border-[#EAECF0] py-5 sm:flex-row "
              >
                <span>
                  {n.notification_type === "profile" ? (
                    <Profile />
                  ) : n.notification_type === "settings" ? (
                    <SettingsColored />
                  ) : n.notification_type === "reminder" ? (
                    <CalendarColored />
                  ) : (
                    <ImportantColored />
                  )}
                </span>

                <p className="flex max-w-[87%] flex-col text-sm font-medium text-[#202224]">
                  <span className="flex flex-wrap">{n.text}</span>
                  <span className="text-xs text-[#B5B5B5]">{n.date}</span>
                </p>

                <CloseIcon
                  className="absolute right-0 cursor-pointer"
                  onClick={() => notify("Feature not available yet")}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
