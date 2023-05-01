import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.JPG';

const UserProfile = () => {
  const {} = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Team members</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xm dark:text-gray-200"> YUANBO XU </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> yuanbo.xu@student.unimelb.edu.au </p>
          <p className="font-semibold text-xm dark:text-gray-200"> ZESONG ZHANG </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> zesong.zhang@student.unimelb.edu.au</p>
          <p className="font-semibold text-xm dark:text-gray-200"> XUEKE ZHENG </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> xueke.zheng@student.unimelb.edu.au </p>
          <p className="font-semibold text-xm dark:text-gray-200"> JIEXIN JI </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> jiexin.ji@student.unimelb.edu.au </p>
          <p className="font-semibold text-xm dark:text-gray-200"> ZE PENG </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> zep@student.unimelb.edu.au </p>

        </div>

      </div>
    </div>

  );
};

export default UserProfile;