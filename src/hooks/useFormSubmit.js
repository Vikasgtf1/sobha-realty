import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFormSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
   const navigate = useNavigate();

  const getProjectName = () => {
  return "One FNG TECHZONE 4 Greater Noida West";
};

  const handleSubmit = async (formDetails) => {
    console.log("formsubmitted");
    const projectName = getProjectName();
    setLoading(true);
    setResponse(null);
    setError(null);

    const apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4559&qSenderName=${encodeURIComponent(
      formDetails.name
    )}&qMobileNo=${encodeURIComponent(
      formDetails.contact
    )}&qEmailID=${encodeURIComponent(
      formDetails.email
    )}&qQueryMessage=${encodeURIComponent(
      formDetails.message
    )}&qProjectName=${encodeURIComponent(projectName)}`;

    try {
      const res = await fetch(apiUrl, { method: "GET" });
      if (!res.ok) throw new Error("Failed to submit form");
      setResponse({ success: true, message: "Form submitted successfully!" });

      navigate("/thank-you");
      // navigate("/thank-you.htm");
    } catch (err) {
      const message = err.message || "Something went wrong";
      setError(message);
      setResponse({ success: false, message });
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    loading,
    error,
    response,
  };
};
