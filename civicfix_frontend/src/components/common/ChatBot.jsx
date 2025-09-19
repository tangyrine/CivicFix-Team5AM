import { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm CivicFix Assistant. How can I help you with civic reporting or our app?",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom of messages when new ones are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
    };

    setMessages([...messages, newUserMessage]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: botResponse,
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  // Enhanced response logic with more engaging options
  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // 🔹 General Greetings
    if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      return "Hello! 👋 I'm CivicFix Assistant. Need help reporting or tracking issues?";
    }

    // 🔹 Account / Login
    if (
      lowerInput.includes("create account") ||
      lowerInput.includes("sign up") ||
      lowerInput.includes("register") ||
      (lowerInput.includes("how") && lowerInput.includes("sign up"))
    ) {
      return "Click on the Sign Up button in the top-right corner. You'll need your email and a password to get started.";
    }

    if (
      lowerInput.includes("login") ||
      lowerInput.includes("sign in") ||
      lowerInput.includes("log in")
    ) {
      return "To log in, click the 'Log In' button at the top of the page and enter your email and password.";
    }

    if (
      lowerInput.includes("forgot") &&
      (lowerInput.includes("password") || lowerInput.includes("login"))
    ) {
      return "No worries! Just click on Forgot Password on the login page to reset it.";
    }

    // 🔹 Reporting Issues
    if (
      (lowerInput.includes("how") && lowerInput.includes("report")) ||
      (lowerInput.includes("report") && lowerInput.includes("issue"))
    ) {
      return "Click the Report Issue button on the homepage. You can add a description, photo, and location before submitting.";
    }

    if (lowerInput.includes("upload") && lowerInput.includes("photo")) {
      return "Yes 📸 You can attach photos when reporting an issue to help explain it better.";
    }

    if (
      lowerInput.includes("what") &&
      (lowerInput.includes("issues") || lowerInput.includes("report"))
    ) {
      return "You can report potholes, streetlight failures, garbage collection, broken infrastructure, and more. If it affects your community, you can raise it here.";
    }

    // 🔹 Tracking Issues
    if (
      (lowerInput.includes("how") && lowerInput.includes("track")) ||
      lowerInput.includes("status")
    ) {
      return "Go to the My Reports section after logging in. You'll see the status of all issues you've submitted.";
    }

    if (
      lowerInput.includes("in-progress") ||
      (lowerInput.includes("what") && lowerInput.includes("progress"))
    ) {
      return "It means the concerned authority has acknowledged your report and work has started. 👍";
    }

    if (
      lowerInput.includes("fixed") ||
      (lowerInput.includes("how") && lowerInput.includes("resolved"))
    ) {
      return "When the authority marks it as Resolved, you'll get a notification in your account.";
    }

    // 🔹 Community Features
    if (
      lowerInput.includes("others") ||
      (lowerInput.includes("see") && lowerInput.includes("issues"))
    ) {
      return "Yes 👀 Visit the Community Reports section to see what others around you have reported.";
    }

    if (lowerInput.includes("upvote")) {
      return "Absolutely ✅ Upvoting helps highlight important issues so they get attention faster.";
    }

    // 🔹 Support / Contact
    if (
      lowerInput.includes("need help") ||
      lowerInput.includes("i need help")
    ) {
      return "You can ask me about signing up, reporting, or tracking. If you need more help, go to our Contact Us page.";
    }

    if (lowerInput.includes("contact") || lowerInput.includes("support")) {
      return "Click on Contact Us at the bottom of the page. You can email us directly from there.";
    }

    // Additional helpful responses
    if (
      lowerInput.includes("photo") ||
      lowerInput.includes("picture") ||
      lowerInput.includes("image")
    ) {
      return "Yes 📸 You can attach up to 3 photos when reporting an issue to better illustrate the problem.";
    }

    if (
      lowerInput.includes("location") ||
      lowerInput.includes("address") ||
      lowerInput.includes("where")
    ) {
      return "When reporting an issue, you can pin the exact location on a map 📍 or let the app use your current location. This helps authorities find and fix the problem quickly!";
    }

    if (
      lowerInput.includes("profile") ||
      lowerInput.includes("account settings")
    ) {
      return "Access your profile by clicking on your name or avatar in the top-right corner after logging in. You can update your details and preferences there.";
    }

    if (lowerInput.includes("notification") || lowerInput.includes("alert")) {
      return "We'll notify you 🔔 whenever there's an update on your reported issues. You can manage your notification preferences in your profile settings.";
    }

    if (lowerInput.includes("privacy") || lowerInput.includes("data")) {
      return "We take your privacy seriously 🔒 Your personal information is protected and only used to help resolve the issues you report. Check our Privacy Policy for details.";
    }

    if (
      lowerInput.includes("civic tech") ||
      lowerInput.includes("civic technology")
    ) {
      return "Civic technology connects citizens with government and public services. It's all about using tech to improve community life and solve local problems! CivicFix is proud to be part of this movement. 🌟";
    }

    if (lowerInput.includes("what") && lowerInput.includes("civicfix")) {
      return "CivicFix is a platform that helps you report and track community issues like potholes, broken lights, or garbage problems. We connect citizens with local authorities to get things fixed faster! 🛠️";
    }

    if (
      lowerInput.includes("thank") ||
      lowerInput.includes("thanks") ||
      lowerInput.includes("helpful")
    ) {
      return "Happy to help! 😊 If you have any other questions about CivicFix, I'm here for you!";
    }

    // Default response
    return "I'm here to help with CivicFix! Ask me about reporting issues, tracking status, creating an account, or using any features of our platform. 💬";
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat toggle button */}
      <button
        onClick={handleToggleChat}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open chat assistant"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Chat window */}
      <div
        className={`bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col transition-all duration-300 absolute bottom-0 right-0 ${
          isOpen
            ? "opacity-100 scale-100 h-[450px]"
            : "opacity-0 scale-75 h-0 pointer-events-none"
        }`}
      >
        {/* Chat header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <h3 className="font-semibold">CivicFix Assistant</h3>
          </div>
          <button
            onClick={handleToggleChat}
            className="text-white hover:text-blue-200 transition-colors"
            aria-label="Close chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-3 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block rounded-lg py-2 px-3 max-w-[80%] ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <form
          onSubmit={handleSendMessage}
          className="p-3 border-t border-gray-200 bg-white rounded-b-lg"
        >
          <div className="flex items-center">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              className="flex-1 py-2 px-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Type a message..."
              aria-label="Type a message"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
