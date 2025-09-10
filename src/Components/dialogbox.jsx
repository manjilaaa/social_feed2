import React from "react";

const DialogBox = ({ open, title, message, onConfirm, onCancel ,showCancel = true}) => {
  if (!open) return null; 

  return (
    <div  className="fixed inset-0  bg-black/70 backdrop-blur-none z-50 ">
    <div className=" fixed inset-0  flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{message}</p>
        <div className="flex justify-end gap-3 mt-6">
            {showCancel && (
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          )}
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-red-600 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DialogBox;
