import React from "react";

const FAQData = [
  {
    question: "How much does InvoChat cost?",
    answer: (
      <span>
        InvoChat is free to use. You can see further details about the features
        we offer for free from here.
      </span>
    ),
    panel: "panel1",
  },
  {
    question: "What features do I get with InvoChat?",
    answer: (
      <span>
        <li style={{ paddingLeft: "1rem" }}>Read receipts</li>
        <li style={{ paddingLeft: "1rem" }}>Screen pin lock</li>
        <li style={{ paddingLeft: "1rem" }}>
          Google Drive and Meet integration
        </li>
        <li style={{ paddingLeft: "1rem" }}>Notification management</li>
        <li style={{ paddingLeft: "1rem" }}>Dedicated workspaces</li>
        <li style={{ paddingLeft: "1rem" }}>Topic-specific chatroom</li>
        <li style={{ paddingLeft: "1rem" }}>Unlimited team members</li>
        <li style={{ paddingLeft: "1rem" }}>File sharing & attachments</li>
      </span>
    ),
    panel: "panel2",
  },
  {
    question: "How to enable desktop notifications for InvoChat?",
    answer: (
      <span>
        Go to your ‘notification’ settings. From there you can easily enable or
        disable notifications for your desktop. You can also turn on email
        notifications for unread msgs. Easily manage room-specific
        notifications. You can change settings accordingly if you want to be
        notified about everything or nothing or just specific mentions.
      </span>
    ),
    panel: "panel3",
  },
  {
    question: "How to create workspaces in InvoChat?",
    answer: (
      <span>
        Visit the website invochat.io, and click on this ‘create workspace’
        button, given on the top right corner of your screen. Enter your email
        address. You will receive a six-digit confirmation code in your email
        for confirmation. Set up your details such as first name, last name, and
        username, and set your password and pin for further security. Give your
        workspace a name and hand-pick a URL. You can get started by bringing in
        your team members to your workspace
      </span>
    ),
    panel: "panel4",
  },
];

export default FAQData;
